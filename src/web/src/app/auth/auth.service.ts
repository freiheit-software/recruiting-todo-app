import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IToken, IUser } from 'src/shared/todo.types';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor () { }

	isLoggedIn (): boolean { return false; }

	getAuthToken (): string { return 'random-alphanumeric-text'; }

	login (loginInfo: IUser): Observable<IToken> {
		return of({ token: 'ff', refreshToken: 'ff' });
	}
}
