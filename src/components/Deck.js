import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {fetchDeckResults} from '../utils/api'
import {setDummyData} from '../utils/_data'
import NewDeck from './NewDeck'
import {useNavigation} from '@react-navigation/native';


import {receiveDecks, receiveCards} from "../actions/deckAction";
import {NOTIFICATION_KEY, setLocalNotification} from "../utils/helper";

class Deck extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }

    }

    componentDidMount() {
        const {dispatch} = this.props;
        fetchDeckResults()
            .then((entries) => {
                dispatch(receiveDecks(entries))
            })
            .then(() => {
                this.setState({loading: false})
            })
    }

    onPressDeck = (deckName) => {
        const {dispatch, navigation} = this.props;
        navigation.push('DeckDetails', {entryId: deckName})
    }

    renderItem = (item) => {
        const name = item.item
        const {navigation} = this.props;
        console.log("deck item:dddd", this.props.decks[name]['questions'].length)
        return (

            <TouchableOpacity
                onPress={() => this.onPressDeck(name)}
            >
                <View style={styles.entry}>
                    <Text style={styles.entry_deck}>{name}</Text>
                    <Text style={styles.entry_card}>Cards: {this.props.decks[name]['questions'].length}</Text>
                </View>
            </TouchableOpacity>


        )

    }

    render() {
        const {decks, loading} = this.props
        return (
            <View>
                <Text>Deck</Text>
                {loading ?
                    <Text>loading</Text>
                    :
                    <FlatList
                        data={Object.keys(decks)}
                        keyExtractor={(item, index) => item}
                        renderItem={this.renderItem}

                    />
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "column"

    },

    entry: {
        flexDirection: "column",
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },

    entry_deck: {
        fontSize: 40
    },
    entry_card: {
        fontSize: 15
    }

})

function mapStatToProps({deckReducer}) {
    // console.log('deckReducer', deckReducer)
    return {
        decks: deckReducer
    }
}

// export default connect()(Deck)
export default connect(mapStatToProps)(Deck)

