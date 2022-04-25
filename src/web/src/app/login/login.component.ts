import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { ListToDo } from 'src/shared/stores/todo.action';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor (private store: Store) { }

	ngOnInit (): void {
		this.store.dispatch(new ListToDo());
	}

}
