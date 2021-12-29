import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//这里又要引用一次，这也就是官网上直接将routes写在app.module.ts中的原因，尽管不影响性能
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [{
		path: '', 
		component: ProductListComponent 
  	},{
		path:"products/:productId",
		component:ProductDetailsComponent
	},{
		path:"cart",
		component:CartComponent
	},{
		path:"shipping",
		component:ShippingComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { } 
