import { ICardListProps } from '../../interfaces';
import Card from './Card';

const CardList = ({ staffMembers }: ICardListProps) => {
	return !staffMembers.length ? (
		<h2 className="white" style={{ fontFamily: 'Verdana' }}>
			No matched name..
		</h2>
	) : (
		<div>
			{staffMembers.map((staff, i) => {
				return (
					<Card key={i} id={staff.id} name={staff.name} email={staff.email} />
				);
			})}
		</div>
	);
};

export default CardList;
