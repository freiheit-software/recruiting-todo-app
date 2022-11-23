import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

	constructor (private authService: AuthService) { }

	intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(this.addAuthToken(request));
	}

	addAuthToken (request: HttpRequest<any>): HttpRequest<HttpHeaders> {
		const token = this.authService.getAuthToken();
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json')
			.set('Authorization', `Bearer ${token}`);

		return request.clone({ headers: headers });
	}
}
