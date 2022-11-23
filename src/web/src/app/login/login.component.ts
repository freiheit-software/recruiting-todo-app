import { Component, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthService } from '../auth/auth.service';
import { IUser } from 'src/shared/todo.types';
import { ListToDo } from 'src/shared/stores/todo.action';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;
	isLoading = false;

	constructor (
		private store: Store,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit (): void {
		this.store.dispatch(new ListToDo());
		this.loginForm = new FormGroup({
			username: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required])
		});
	}

	submit () {
		const loginInfo: IUser = this.loginForm.value;
		this.isLoading = true;
		this.authService.login(loginInfo).pipe(
			tap({
				next: _ => { this.router.navigate(['/home']); },
				error: (err: HttpErrorResponse) => { alert('error with login request'); }
			}),
			finalize(() => this.isLoading = false)
		).subscribe();
	}
}
