import { IChildrenProps } from '../interfaces';

const Scroll = ({ children }: IChildrenProps) => {
	return (
		<div className="br3 ba dark-gray b--black-10 mv4-ns mv1 mh4 shadow-5 overflow-y-scroll vh-50-ns vh-75 pt3 pb3">
			{children}
		</div>
	);
};

export default Scroll;
