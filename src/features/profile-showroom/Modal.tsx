import Modal, { Styles } from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeModal } from './modalSlice';
import './Modal.css';

const customStyles: Styles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'rgb(237 158 1)',
		border: '2px solid black'
	},
	overlay: {
		backgroundColor: '#ffeccdab'
	}
};

export default function StaffModal() {
	const { selectedStaff, isModalOpen } = useSelector((state: RootState) => ({
		selectedStaff: state.modalForStaff.selectedStaff,
		isModalOpen: state.modalForStaff.isModalOpen
	}));

	const dispatch = useDispatch();

	const dispatchCloseModal = () => {
		dispatch(closeModal());
	};

	const { id, name, email, address, website, company, phone } = selectedStaff;

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={dispatchCloseModal}
			style={customStyles}
			contentLabel="Staff Modal"
		>
			<>
				<img
					className="br-100"
					alt="staff"
					src={`https://randomuser.me/api/portraits/men/${selectedStaff.id}.jpg`}
				/>
				<div>
					<h2>{name}</h2>
					<p>
						<span className="modal-title">ID </span>
						{id}
					</p>
					<p>
						<span className="modal-title">Email </span>
						{email}
					</p>
					<p>
						<span className="modal-title">City </span>
						{address?.city || 'N/A'}
					</p>
					<p>
						<span className="modal-title">Website </span>
						{website}
					</p>
					<p>
						<span className="modal-title">Company </span>
						{company?.name}
					</p>
					<p>
						<span className="modal-title">Phone </span>
						{phone}
					</p>
				</div>
			</>
		</Modal>
	);
}
