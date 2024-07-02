import { SearchChangeCallback } from '../interfaces/SearchField.interface';

interface IProps {
	searchChange: SearchChangeCallback;
}

const SearchBox = ({ searchChange }: IProps) => {
	return (
		<div className="pa2">
			<input
				className="pa3 br-pill ba b--black"
				type="search"
				placeholder="🔍 &nbsp; Type a name..."
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
