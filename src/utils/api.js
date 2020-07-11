import {AsyncStorage} from 'react-native'
import {fetchData, DECK_STORAGE_KEY} from './_data'

export function fetchDeckResults() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(fetchData)
}

export function saveDeck({deck, entryId}) {
    // console.log("save deck", entryId, deck)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [entryId]: deck
    }))
}

export function saveCard({card, entryId}) {
    // console.log("save card", entryId, card)

    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[entryId]['questions'].push(card)
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}