import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { HttpClientService } from 'src/app/services/httpclient.service';

@Component({
	selector: 'app-permission',
	templateUrl: './permission.component.html',
	styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
	/**
	 * 1、typescript成员修饰符默认是public；
	 * 2、使用了formBuilder后angular FormControl disabled变得非常怪异，仅此例中的代码有效，其他原生dom理念在angular无效；
	 */
	private searchForm:FormGroup;
	private editForm:FormGroup;	
	private rootMenus:any;

	constructor(
		private httpClient:HttpClient,
		private formBuilder:FormBuilder,
		private httpClientService:HttpClientService
	) { 
		this.searchForm=this.formBuilder.group({
			name:"",
			type:""
		});
		this.editForm=this.formBuilder.group({
			name:[{value:"",disabled:false},Validators.required],		
			url:"",
			perms:"",
			rootMenu:[{value:"0",disabled:true},Validators.required],
			sort:[{value:"",disabled:true}],
			icon:[{value:"",disabled:true}],
			isLock:[{value:"0",disabled:true}]
		});
	}

	ngOnInit() {
		window.setTimeout(()=>{
			this.rootMenus=[{
				id:"1003",
				name:"金融机构"
			},{
				id:"1004",
				name:"展业机构"
			},{
				id:"1005",
				name:"贷款产品"
			},{
				id:"1006",
				name:"系统维护"
			}]
		},3000);

		//console.log(environment);
		// this.httpClient.get(environment.serverURL + "todos/getAllTodos")
		// 	.subscribe((res)=>{
		// 		console.log(res);
		// })

		// const headers = {
		// 	"Access-Token":"custom header value",
		// 	"Content-type":"application/json"
		// }

		// this.httpClient.get(environment.serverURL + "todo/getAllTodos",{
		// 	params:{
		// 		id:"1001"
		// 	},
		// 	headers:headers
		// }).subscribe(res=>{    
        //     console.log(res);
        // },(err:HttpErrorResponse)=>{  
        //     if(err.error instanceof Error){
        //         console.log("客户端出错",err.error.message)
        //     }else{
        //         console.log(`服务器出错${err.status}返回：${err.error}`)
        //     }
		// })	


		// this.httpClientService.get("todo/getAllTodos").subscribe((res)=>{
		// 	console.log(res);

		// })


	}

	onSubmit(form:FormGroup){
		console.log(form)		
	}

	onReset(){
		this.searchForm.reset();
	}

	onEditSubmit(form:FormGroup){
		console.log(form);
	}

	onEditReset(){

	}
	onPrepareMenuOption(evt){		
		if(evt.target.checked){
			this.editForm.controls["rootMenu"].enable();
			this.editForm.controls["sort"].enable();
			this.editForm.controls["icon"].enable();
			this.editForm.controls["isLock"].enable();
		}else{
			this.editForm.controls["rootMenu"].disable();
			this.editForm.controls["sort"].disable();
			this.editForm.controls["icon"].disable();
			this.editForm.controls["isLock"].disable();
		}
	}
	//预装载表单数据：使用FormGroup.setValue()、FormGroup.patchValue()

}
