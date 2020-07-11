import {ADD_CARD, ADD_DECK, RECEIVE_CARDS, RECEIVE_DECKS} from "../utils/constant";


export function receiveDecks(entries) {
    return {
        type: RECEIVE_DECKS,
        entries,
    }
}

export function addDeck(entry) {
    return {
        type: ADD_DECK,
        entry,
    }
}

export function addCard(card, entryId) {
    return {
        type: ADD_CARD,
        card,
        entryId
    }
}

export function receiveCards(cards) {
    return {
        type: RECEIVE_CARDS,
        cards,
    }
}