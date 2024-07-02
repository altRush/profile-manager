import { ChangeEventHandler } from 'react';

export interface ISearchBoxProps {
	searchChange: ChangeEventHandler<HTMLInputElement> | undefined;
}
