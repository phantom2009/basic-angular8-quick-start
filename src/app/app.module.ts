import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, NoPreloading } from '@angular/router';
import { AppComponent } from './app.component';

/**
 *	1、export declare type LoadChildren = LoadChildrenCallback | DeprecatedLoadChildren;
 * 	export declare type DeprecatedLoadChildren = string;		
 * 	loadChildren:"./pages/login/login.module#LoginModule",	
 *	官网文档也有说明使用字符串形式的写法已经是废弃写法，但目前都支持，尽量使用回调函数； 
 *	2、pathMatch:"full"相当于其他路由“exact”;
 */
const routes:Routes=[{
	path:'', 
	redirectTo: 'test', 
	pathMatch: 'full'
},{
	path:"login",
	loadChildren:"./pages/login/login.module#LoginModule",	   
	data: {
    	preload: true
    }
},{
	path:"home",
	loadChildren:()=>import("./pages/home/home.module").then(m=>m.HomeModule)
},{
	path:"test",
	loadChildren:()=>import("./pages/test/test.module").then(m=>m.TestModule)
}];

/**
 * 1、@NgModule装饰器来自angular/core，注册元数据用；
 * 2、declarations声明当前模块用到的可声明组件，所谓可声明则是指组件、指令、管道...直观理解为视图中要用这里就有声明；
 * 3、imports：当前模块依赖的其他模块，你导入了其他模块相关的指令、组件、视图你才能用;
 * 4、cli分离太多文件，很多与开发无直接关系的我暂时都删除了；
 */
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
