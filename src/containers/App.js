import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions/actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

//Action being dispatched
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      staffs: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => this.setState({ staffs: users }));
  }

  render() {
    const { staffs } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredStaffs = staffs.filter(staff => {
      return staff.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !staffs.length ? (
      <h1 className="tc vh-100 pt6 fs">Loading</h1>
    ) : (
      <div className="tc vh-100 pt4-ns pt3">
        <div className="f1-ns f1 title">Profile Manager</div>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList staffs={filteredStaffs} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
