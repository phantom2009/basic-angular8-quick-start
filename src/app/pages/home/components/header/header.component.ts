import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tokenKey } from 'src/app/utils/Constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {
	}

	onLogout(){
		window.localStorage.removeItem(tokenKey);		
		this.router.navigateByUrl("/login")
	}
}
