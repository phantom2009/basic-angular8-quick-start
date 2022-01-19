import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';

/**
 * 这个文件作为angular按需加载路由可以是标准写法，一个比较容易忘记的是declarations没有写，会导致路由行为很怪异
 */
@NgModule({
	declarations: [TodosComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component: TodosComponent
		}])
	]
})
export class TodosModule { }
