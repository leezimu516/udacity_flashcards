import { AsyncStorage } from 'react-native'
import { fetchData, DECK_STORAGE_KEY } from './_data'

export function fetchDeckResults () {
  // console.log("fetchdata, ", AsyncStorage.getAllKeys())
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(fetchData)

  // return AsyncStorage.getItem('flashcard')
  // .then((res) => {console.log('res', res)})

}