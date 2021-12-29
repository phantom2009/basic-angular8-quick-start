import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

	//属性成员：当前选中的产品，响应式属性
	product: Product | undefined;

	/**
	 * activatedRoute：依赖注入当前ActivatedRoute类型路由实例，他包含当前路由相关信息，你一定要注意他与ngOnInit方法的分工
	 */
  	constructor(
		  private activatedRoute:ActivatedRoute,
		  private cartService:CartService
		) { }

  	ngOnInit() {
		/**
		 * 纯业务代码，获取路由、路由参数后查找数据，将数据显示给Product.
		 */
		const routeParams = this.activatedRoute.snapshot.paramMap;	
		const productIdFromRoute = Number(routeParams.get('productId'));
		this.product = products.find(product => product.id === productIdFromRoute);
	}

	//业务方法
	addToCart(product:Product){
		console.log(product);
		this.cartService.addToCart(product);
		window.alert('Your product has been added to the cart!');
	}

}
