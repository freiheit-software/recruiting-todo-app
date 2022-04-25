import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ITodo } from '../todo.types';
import { environment } from 'src/environments/environment';
import { ListToDo } from './todo.action';

export class ToDoStateModel {
	todo!: ITodo[];
}

@State<ToDoStateModel>({
	name: 'ToDoListState',
	defaults: new ToDoStateModel()
})

@Injectable()
export class ToDoState {

	constructor (private http: HttpClient) { }

	// *****************************************************************************************************
	// ************************************ SELECTORS
	// *****************************************************************************************************

	@Selector()
	static getToDoList (state: ToDoStateModel) {
		return state.todo;
	}


	// *****************************************************************************************************
	// ************************************ ACTIONS
	// *****************************************************************************************************

	@Action(ListToDo)
	listToDo (ctx: StateContext<ToDoStateModel>, action: ListToDo) {
		const staticToDos: ITodo[] = [
			{ id: 1, title: 'one', description: 'Note one description' },
			{ id: 2, title: 'two', description: 'Note two description' },
			{ id: 3, title: 'three', description: 'Note three description' }
		];
		ctx.patchState({ todo: staticToDos });
	}


	// *****************************************************************************************************
	// ************************************ HELPERS
	// *****************************************************************************************************


}
