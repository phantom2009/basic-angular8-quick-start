import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

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
	

	constructor(private formBuilder:FormBuilder) { 
		this.searchForm=this.formBuilder.group({
			name:"",
			type:""
		});
		this.editForm=this.formBuilder.group({
			name:[{value:"",disabled:true},[Validators.required]],		
			url:"",
			perms:"",
			rootMenu:[{value:"",disabled:true}],
			sort:1,
			icon:"",
			isLock:""
		});
	}



	ngOnInit() {
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
			this.editForm.controls["name"].enable();
		}else{
			this.editForm.controls["name"].disable();
		}
	}
}
