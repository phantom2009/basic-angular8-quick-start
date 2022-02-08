import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionComponent } from './permission.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/httpclient.service';
@NgModule({
	declarations: [PermissionComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:PermissionComponent
		}]),
		ReactiveFormsModule,
		HttpClientModule
	],
	providers:[HttpClientService]
})
export class PermissionModule { }
