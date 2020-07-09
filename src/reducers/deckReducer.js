import {ADD_DECK, RECEIVE_DECKS} from "../utils/constant";

function deckReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      // console.log(action.entries)
      return {
        ...state,
        ...action.entries,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.entry
      }
    default :
      return state
  }
}

export default deckReducer