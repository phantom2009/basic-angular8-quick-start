import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { TestComponent } from './test.component';

/**
 * 语法、机制调试页
 */
@NgModule({
	declarations: [TestComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:TestComponent
		}]),
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	]
})
export class TestModule { }
