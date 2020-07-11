import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import SubmitBtn from './SubmitBtn'
import {connect} from "react-redux";

class DeckDetails extends Component {


    render() {
        const {route, navigation,decks} = this.props;
        const {entryId} = route.params
        const entry = decks[entryId]
        // console.log("deck detail route params", entry)
        return (
            <View style={styles.entry}>
                <Text style={styles.entry_deck}>{entry['title']}</Text>
                <Text style={styles.entry_card}>Cards: {entry['questions'].length}</Text>
                <SubmitBtn text={'Add Card'} onPress={() => navigation.push('NewCard', {entryId: entry['title']})}/>
                <SubmitBtn text={'Start Quiz'} onPress={() => navigation.push('Quiz', {entryId: entry['title'], cardId: 0, correct:0})}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    entry: {
        // height:100,
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