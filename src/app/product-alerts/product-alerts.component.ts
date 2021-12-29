import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//接口类型，非数据
import { Product } from '../products';

@Component({
	selector: 'app-product-alerts',
	templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent implements OnInit {
	@Input() product!: Product;
	//可以接收一个函数作为属性也能实现EventEmitter效果
	@Input() run:any;
	@Output() notify = new EventEmitter();

	constructor() {}

	ngOnInit() {
		this.run()
	}

	tellMe(arg) {
		window.alert('tellMe' + arg);
	}
}
