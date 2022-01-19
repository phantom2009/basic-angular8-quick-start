import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	private searchForm:any;


	constructor(private formBuilder:FormBuilder) { 
		this.searchForm=this.formBuilder.group({
			
		})
	}

	ngOnInit() {
	}

}
