import { Injectable } from '@angular/core';

import {User} from "../models/user.model"

@Injectable()
export class UserService {
	private user=new User();

	constructor() { }

	public getUser (){
		return this.user;
	}

	public setUser(user){
		this.user=user
	}
}
