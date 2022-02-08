import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/httpclient.service';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:LoginComponent
		}]),
		FormsModule,
		HttpClientModule
	],
	providers:[HttpClientService]
})
export class LoginModule { }
