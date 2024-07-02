import { ChangeEventHandler } from 'react';

export type SearchChangeCallback =
	| ChangeEventHandler<HTMLInputElement>
	| undefined;
