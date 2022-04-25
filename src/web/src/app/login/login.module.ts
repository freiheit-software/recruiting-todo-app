import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { LoginRoutingModule } from './login-routing.module';
import { ToDoState } from 'src/shared/stores/todo.state';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		LoginRoutingModule,
		NgxsModule.forFeature([
			ToDoState
		]),
	]
})
export class LoginModule { }
