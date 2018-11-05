import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	userList = [
		{ id: 1, name: 'John G.' },
		{ id: 2, name: 'Jake S.' },
		{ id: 3, name: 'Jelly F.' },
		{ id: 4, name: 'Matt T.' },
	];

  constructor() { }

  getUsers(): {}[] {
  	return this.userList;
  }

}
