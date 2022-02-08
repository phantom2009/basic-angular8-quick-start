import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpErrorResponse,
	HttpResponse
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { tokenKey } from '../utils/Constants';


export interface IHttpClientServiceOptions {
	headers?: | HttpHeaders | {
		[header: string]: string | string[];
	};
	observe?: 'response' | 'events' | 'body';
	params?: | HttpParams | {
		[param: string]: string | string[];
		};
	reportProgress?: boolean;
	responseType?: 'json' | 'arraybuffer' | 'blob' | 'text' | 'arraybuffer';
	withCredentials?: boolean;
	ignoreCheck?: boolean;
	ignoreErrorCheck?: boolean;
	timeStamp?: boolean;
}

/**
 * 服务端的JsonBean
 */
export interface IResponseBody<T = any> {
	code:string,
	state: string;
	msg: string;
	data: T;
}

@Injectable()
export class HttpClientService{

    constructor(private httpClient:HttpClient){}

	

    //请求头处理
    static headers={
        'Content-Type': 'application/json; charse=UTF-8',
        // 'X-Uz-Token': environment.production === false
        //     ? '***'
        //     : '',
        //"Access-Token":"custom header value",       
    }


    /**
     * @Desc 作者写这个方法类似axios拦截器，下面这个是对返回Reponse的处理
     */
    static handleSuccess<T = any>(
        response: HttpResponse<IResponseBody>,
        handleAlert = alert
    ): Observable<T | IResponseBody | null> {
        // 此处根据你项目后端返回数据结构自行修改，下面这个示例要求返回包含result、message格式
        // if (!(_.has(response.body, 'message') && _.has(response.body, 'result'))) {
        //     handleAlert.call(null, '服务器数据格式错误！');
        //     return of(null);
        // }
        const body: {
			code:string,
			state:string,
            msg: string;
           data: T;
        } = response.body;
        const { code,msg, data } = body;        
        // if (result.toLowerCase() !== 'ok') {
        //     handleAlert.call(null, message || '请求成功，但服务器遭遇未知错误！');
        //     return of(null);
        // }
        return of(data);
    }

    static handleError(errorResponse: HttpErrorResponse, handleAlert = alert) {
        const { ok, error, status, statusText } = errorResponse;
        let { message = null } = error || {};    
        if (ok) {
            return;
        }    
        switch (status) {
          case 503:
            message = '服务器错误[503]';
            break;
          case 502:
            message = '服务器错误[502]';
            break;
          case 501:
            message = '服务器错误[501]';
            break;
          case 500:
            message = '服务器错误[500]';
            break;
          case 400:
            message = `请求参数错误[400]!(${message || statusText})`;
            break;
          case 401:
            message = `非法用户登录[401]!(${message || statusText})`;
            break;
          case 403:
            message = `没有访问权限[403]!(${message || statusText})`;
            break;
          case 404:
            message = `请求资源不存在[404]!(${message || statusText})`;
            break;
          case 415:
            message = `请求方式错误[415]!(${message || statusText})`;
            break;
          default:
            message = `未知错误[${status}]!(${message || statusText})`;
        }
        handleAlert.call(null, message);
    }

    get unofficial() {
        return (
            // /此处为你项目的非线上地址正则/.test(window.location.href) ||
            // environment.production === false
            false
        );
    }
    
    errorMsg(msg: string, times = 2000) {
       // 此处使用你项目使用UI库的弹窗提示错误信息
    }

    get<T = any>(
        url: string,
        data?: object,
        options?: IHttpClientServiceOptions
      ): Observable<T | IResponseBody | null> {
        let params = new HttpParams();
        if (_.isObjectLike(data)) {
          Object.keys(data).forEach(key => {
            params = params.append(`${key}`, `${data[key]}`);
          });
        }
    
        const isUseTimeStamp = _.get(options, 'timeStamp');
        if (
          (isUseTimeStamp !== false && this.unofficial) ||
          isUseTimeStamp === true
        ) {
          // 开发环境默认添加时间戳
          params = params.append('_t', new Date().getTime().toString());
        }
		
		//token处理
		const user=JSON.parse(window.localStorage.getItem(tokenKey));
		if(user && user.username){
			HttpClientService.headers["Access-Token"]=user.token;
		}


        return this.httpClient
          .get(
            environment.serverURL+url,
            // @ts-ignore-next-line
            _.merge(
              {
                reportProgress: true,
                observe: 'response',
                responseType: 'json',
                withCredentials: false,
                headers: HttpClientService.headers,
                params
              },
              options
            )
            ).pipe(
                switchMap((response: any) => {
                        if (_.get(options, 'ignoreCheck')) {
                        return of(response.body);
                    }
                    return HttpClientService.handleSuccess<T>(response, this.errorMsg);
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    if (!_.get(options, 'ignoreErrorCheck')) {
                        HttpClientService.handleError(errorResponse, this.errorMsg);
                }    
                return throwError('Error');
            })
          );
      }
    

    	post<T = any>(
        		url: string,
        		data?: object,
        		options?: IHttpClientServiceOptions
      		): Observable<T | IResponseBody | null> {

			//token处理
		const user=JSON.parse(window.localStorage.getItem(tokenKey));
		if(user && user.username){
			HttpClientService.headers["Access-Token"]=user.token;
		}

        return this.httpClient
          .post(
            environment.serverURL+url,
            data,
            // @ts-ignore-next-line
            _.merge(
              {
                reportProgress: true,
                observe: 'response',
                responseType: 'json',
                withCredentials: false,
                headers: HttpClientService.headers
              },
              options
            )
          )
          .pipe(
            switchMap((response:any) => {
              if (_.get(options, 'ignoreCheck')) {
                return of(response.body);
              }
    
              return HttpClientService.handleSuccess<T>(response, this.errorMsg);
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              if (!_.get(options, 'ignoreErrorCheck')) {
                HttpClientService.handleError(errorResponse, this.errorMsg);
              }
    
              return throwError('Error');
            })
          );
      }
}