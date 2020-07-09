import {ADD_DECK, RECEIVE_DECKS} from "../utils/constant";


export function receiveDecks (entries) {
  return {
    type: RECEIVE_DECKS,
    entries,
  }
}

export function addDeck (entry) {
  return {
    type: ADD_DECK,
    entry,
  }
}