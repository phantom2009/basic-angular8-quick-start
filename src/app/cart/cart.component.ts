import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
/**
 * FormBuilder[Service]，表单构造服务，类似ant degisn Form组件，
 * 		FormBuilder属于 FomModule你需要在你当前组件做在模式使用FormModule，
 * 			可同时导入ReactiveFormsModule
 */
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

	public items =[];

	//声明变量后赋值最好在ngOnInit中
	public checkoutForm:any={};
  	constructor(
    	private cartService: CartService,
		private formBuilder: FormBuilder
		) { 
		//
	}

  	ngOnInit() {
		this.items= this.cartService.getItems();	
		this.checkoutForm=this.formBuilder.group({
			name:"",
			addRess:""
		})
	}

	onSubmit():void{
		this.items = this.cartService.clearCart();
		
		//模拟提交表单
		console.log('Your order has been submitted', this.checkoutForm.value);

    	this.checkoutForm.reset();
	}

}
