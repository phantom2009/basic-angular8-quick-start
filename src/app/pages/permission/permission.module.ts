import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionComponent } from './permission.component';

@NgModule({
	declarations: [PermissionComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:PermissionComponent
		}]),
		ReactiveFormsModule
	]
})
export class PermissionModule { }
