import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import SubmitBtn from './SubmitBtn'
import {connect} from "react-redux";
import {clearLocalNotification, NOTIFICATION_KEY, setLocalNotification} from "../utils/helper";
import {DECK_STORAGE_KEY, fetchData} from "../utils/_data";

class DeckDetails extends Component {

    handleQuiz = (navigation, entry) => {

        clearLocalNotification()
            .then(setLocalNotification())
        return navigation.push('Quiz', {entryId: entry['title'], cardId: 0, correct: 0})
    }

    render() {
        const {route, navigation, decks} = this.props;
        const {entryId} = route.params
        const entry = decks[entryId]
        return (
            <View style={styles.entry}>
                <Text style={styles.entry_deck}>{entry['title']}</Text>
                <Text style={styles.entry_card}>Cards: {entry['questions'].length}</Text>
                <SubmitBtn text={'Add Card'} onPress={() => navigation.push('NewCard', {entryId: entry['title']})}/>
                <SubmitBtn text={'Start Quiz'} onPress={() => this.handleQuiz(navigation, entry)}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },

    entry: {
        flexDirection: "column",
        width: Dimensions.get('window').width,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },

    entry_deck: {
        fontSize: 40,
        padding: 20,
    },
    entry_card: {
        fontSize: 15,
        padding: 20,
    },

})


function mapStateToProps({deckReducer}) {
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(DeckDetails)