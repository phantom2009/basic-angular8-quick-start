import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/httpclient.service';

import { tokenKey } from 'src/app/utils/Constants';


import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public user:any;

	constructor(
		private router:Router,
		private httpClientService:HttpClientService,
		private httpClient:HttpClient
	) {
		this.user={
			username:"admin",
			password:"123456"
		}
	}

	ngOnInit() {
	}

	handleLogin(){
		if(this.user.username.length<1){
			alert("请输入用户名");
		}else if(this.user.password.length<1){
			alert("请输入密码");
		}else{
			this.httpClientService.post("api/user/login",this.user).subscribe((res)=>{
				if(res && res.username){
				

					window.localStorage.setItem(tokenKey,JSON.stringify(res));
					this.router.navigateByUrl("/home")
				}else{
					alert("登录失败，请重新登录");
				}
			})
		}
		//this.router.navigateByUrl("/home")
	}
}
