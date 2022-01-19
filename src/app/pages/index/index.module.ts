import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

import { UserService } from 'src/app/services/user.service';

@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path:"",
			component:IndexComponent
		}])
	],
	providers:[UserService]
})
export class IndexModule { }
