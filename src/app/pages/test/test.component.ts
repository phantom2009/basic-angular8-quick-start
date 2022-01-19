import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

	private isEdit: boolean = true;
private isDisabled = true;
private myForm: FormGroup;

private roleParams = {
roleName:'',
items:['全部权限']
}
	constructor(private formBuilder:FormBuilder) { 
		
	}


ngOnInit() {
	
	setTimeout(()=>{
		let params={
			id:"0",
			roleParams:"1"
		}

		this.isEdit = Number(params['id']) !== 0; // 0:添加，!0编辑



		
    	this.roleParams.roleName = params['id'];
		this.createOrEdit();
		this.creatForm();
	},5000)

    this.createOrEdit();
    this.creatForm();
}

	createOrEdit(){
		console.log(this.isEdit);

		if(this.isEdit){ // 如果是编辑的时候，就禁用掉该输入框
			this.isDisabled = true;
			return;
		}
		this.isDisabled = false;
		this.creatForm();
	}

// 在初始化表单的时候设置表单中input的属性值，禁用的话 disabled:true
creatForm() {
    this.myForm=null;
	
	this.myForm= this.formBuilder.group({
      roleName:[{ value:this.roleParams.roleName,disabled:this.isDisabled}]
    });
  }
}
