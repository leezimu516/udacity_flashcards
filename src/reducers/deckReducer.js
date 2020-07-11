import {ADD_CARD, ADD_DECK, RECEIVE_CARDS, RECEIVE_DECKS} from "../utils/constant";

function deckReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            // console.log(action.entries)
            return {
                ...state,
                ...action.entries,
            }
        case ADD_DECK :

            console.log("ADD_DECK reducer action", action)
            console.log("ADD_DECK reducer state ", state)

            return {
                ...state,
                [action.entry]: {
                    title:action.entry,
                    questions:[]
                }
            }

        case ADD_CARD :
            // console.log("add card reducer action", action.entryId)
            // console.log("add card reducer state ", state)

            return {
                ...state,
                [action.entryId]: {
                    ...state[action.entryId],
                    questions: state[action.entryId].questions.concat(action.card)

                }
            }

        case RECEIVE_CARDS :
            // console.log("receive card reducer action", action.cards)
            // console.log("receive card reducer state ", state)


            return {
                ...state,
                ...action.cards,
            }
        default :
            return state
    }
}

export default deckReducer