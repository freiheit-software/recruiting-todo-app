import { Component, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { IUser } from 'src/shared/todo.types';
import { ListToDo } from 'src/shared/stores/todo.action';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: UntypedFormGroup;
	isLoading = false;

	constructor (
		private store: Store,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit (): void {
		this.store.dispatch(new ListToDo());
		this.loginForm = new UntypedFormGroup({
			username: new UntypedFormControl('', [Validators.required, Validators.email]),
			password: new UntypedFormControl('', [Validators.required])
		});
	}

	submit () {
		const loginInfo: IUser = this.loginForm.value;
		console.log('loginInfo', loginInfo);
		this.isLoading = true;
		this.authService.login(loginInfo).pipe(
			tap({
				next: () => { this.router.navigate(['/home']); },
				error: (err: HttpErrorResponse) => { alert('error with login request'); }
			}),
			finalize(() => this.isLoading = false)
		).subscribe();
	}
}
