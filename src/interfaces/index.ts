import { Staff } from './Staff.interface';

export type IChildrenProps = {
	children: string | JSX.Element | JSX.Element[];
};

export type ICardProps = Pick<Staff, 'id' | 'name' | 'email'>;

export type ICardListProps = {
	staffMembers: Staff[];
};
