import { ICardProps } from '../../interfaces/Staff.interface';

const Card = ({ name, email, id }: ICardProps) => {
	return (
		<div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
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
