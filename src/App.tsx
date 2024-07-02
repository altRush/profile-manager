import CardList from './features/profile-showroom/CardList';
import SearchBox from './features/profile-showroom/SearchBox';
import Scroll from './components/Scroll';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from './features/profile-showroom/searchFieldSlice';
import { storeStaff } from './features/profile-showroom/staffSlice';
import { RootState } from './store';
import './App.css';
import StaffModal from './features/profile-showroom/Modal';

const App = () => {
	const { staffMembers, searchText } = useSelector((state: RootState) => {
		return {
			staffMembers: state.staff.members,
			searchText: state.searchField.searchText
		};
	});
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => dispatch(storeStaff(users)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filteredStaffs = staffMembers.filter(staff => {
		return staff.name.toLowerCase().includes(searchText.toLowerCase());
	});

	return !staffMembers.length ? (
		<h1 className="tc vh-100 pt6 fs">Loading</h1>
	) : (
		<div className="tc vh-100 pt4-ns pt3">
			<div className="f1-ns f1 title">Profile Manager</div>
			<SearchBox
				searchChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					dispatch(search(e.target.value));
				}}
			/>
			<Scroll>
				<CardList staffMembers={filteredStaffs} />
			</Scroll>
			<StaffModal />
		</div>
	);
};

export default App;
