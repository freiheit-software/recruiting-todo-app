export interface ITodo {
	id: number;
	title: string;
	description: string;
}

export interface IUser {
	username: string;
	password: string;
}

export interface IToken {
	token: string;
	refreshToken: string;
}