import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/httpclient.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private httpClientService:HttpClientService
	) { }

	ngOnInit() {}

}
