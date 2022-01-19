import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';


@NgModule({
	declarations: [MenuComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:MenuComponent
		}]),
		ReactiveFormsModule
	]
})
export class MenuModule { }
