import { Injectable } from '@angular/core';

import {Product} from "../products"
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	/* 定义item保存当前用户选择购物车状态 */
	public items:Product[]=[];
  	constructor(private httpClient: HttpClient) { }

	addToCart(product:Product){	

		this.items.push(product);
	}

	//可以写一个删除

	getItems(){
		console.log(this.items);
		return this.items;
	}

	clearCart(){
		this.items=[];
		
		return this.items;
	}

	getShippingPrices() {
		return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
	}
}
