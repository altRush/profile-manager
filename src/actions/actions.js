import { INTERACT_SEARCH_FIELD } from '../constants/constants.js'

export const setSearchField = (text) => ({
  type: INTERACT_SEARCH_FIELD,
  payload: text
})