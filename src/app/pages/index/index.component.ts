import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	private user:any;

	constructor(public userService:UserService) {
		this.user=this.userService.getUser()
	}

	ngOnInit() {
	}

}
