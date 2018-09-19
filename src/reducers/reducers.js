import { INTERACT_SEARCH_FIELD } from '../constants/constants'
const initialState = {
  searchField: ''
}

export const searchingRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case INTERACT_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}