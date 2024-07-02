import { useDispatch, useSelector } from 'react-redux';
import { openModal, selectStaff } from './modalSlice';
import { ICardProps } from '../../interfaces';
import { RootState } from '../../store';

const Card = ({ name, email, id }: ICardProps) => {
	const dispatch = useDispatch();
	const staffMembers = useSelector((state: RootState) => state.staff.members);

	const dispatchOpenModal = () => {
		const selectedCardStaffProfile = staffMembers.filter(
			staff => staff.id === id
		)[0];
		dispatch(selectStaff(selectedCardStaffProfile));
		dispatch(openModal());
	};

	return (
		<div
			onClick={dispatchOpenModal}
			className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"
		>
			<img
				className="br-100"
				alt="staff"
				src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
			/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
