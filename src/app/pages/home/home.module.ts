import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router"
import { HomeComponent } from './home.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';

const routes:Routes=[{
	path:"",
	component:HomeComponent,
	//pathMatch: 'full',
	children:[{
		path:"index",
		loadChildren:()=>import("./../index/index.module").then(m=>m.IndexModule)
	},{
		path:"todos",
		loadChildren:()=>import("./../todos/todos.module").then(m=>m.TodosModule)
	},{
		path:"permission",
		loadChildren:()=>import("./../permission/permission.module").then(m=>m.PermissionModule)
	},{
		path:"menu",
		loadChildren:()=>import("./../menu/menu.module").then(m=>m.MenuModule)
	}]
}]

@NgModule({
	declarations: [HomeComponent, AsideComponent, HeaderComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class HomeModule { }
