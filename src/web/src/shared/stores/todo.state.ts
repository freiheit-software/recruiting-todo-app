import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ToDoStateModel {
	todo!: ITodo[];
	
}

@State<ToDoStateModel>({
	name: 'conferenceState',
	defaults: new ToDoStateModel()
})

@Injectable()
export class ToDoState {

	constructor(
		private http: HttpClient
	) {
		const url = `${environment.https ? 'https' : 'http'}://${environment.baseUrl}:${environment.port}/api`;
	}


	// *****************************************************************************************************
	// ************************************ SELECTORS
	// *****************************************************************************************************

	@Selector()
	static getToDoList(conferenceState: ConferenceStateModel) {
	}

	
	// *****************************************************************************************************
	// ************************************ ACTIONS
	// *****************************************************************************************************

	@Action(ListToDo)
	listToDo(ctx: StateContext<ToDoStateModel>, action: ListToDo) {
		const staticToDos:ITodo[] = [
			{id: 1, title: 'one', description:'Note one description'},
			{id: 2, title: 'two', description:'Note two description'},
			{id: 3, title: 'three', description:'Note three description'}
		]
		ctx.patchState({todo: staticToDos })
	}


	// *****************************************************************************************************
	// ************************************ HELPERS
	// *****************************************************************************************************


}
