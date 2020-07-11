import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    FlatList,
    Dimensions,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import SubmitBtn from "./SubmitBtn";
import {formatDeck} from "../utils/helper";
import {addDeck} from "../actions/deckAction";
import {connect} from "react-redux";


class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            deckTitle: '',
            toggleAnswer: false
        }
    }

    next = (entryId, cardId) => {
        const {dispatch, navigation} = this.props
        navigation.push('Quiz', {entryId, cardId})

    }

    handleToggleAnswer = () =>{
        const current = this.state.toggleAnswer
        this.setState({toggleAnswer: !current})
    }


    render() {
        const {decks, route, navigation} = this.props
        const {entryId, cardId} = route.params
        const deck = decks[entryId]
        const cards = deck['questions']
        const card = cards[cardId]
        console.log("card component", cardId, cards)
        return (
            <View style={styles.container}>
                {cardId !== cards.length ?
                    <View>
                        {cards.length !== 0 ?
                            <View>
                                {this.state.toggleAnswer ?
                                    <View>
                                        <Text style={styles.entry_question}>{card.answer}</Text>
                                        < SubmitBtn text={'Question'} onPress={()=>this.handleToggleAnswer()}/>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.entry_question}>{card.question}</Text>
                                        < SubmitBtn text={'Answer'} onPress={()=>this.handleToggleAnswer()}/>
                                    </View>


                                }

                                <SubmitBtn text={'Correct'} onPress={() => this.next(entryId, cardId + 1)}/>
                                <SubmitBtn text={'Incorrect'}/>
                            </View>
                            :
                            <View>
                                <Text>Sorry, you cannnot take a quiz because there are no cards in the deck</Text>
                            </View>

                        }
                    </View>
                    :
                    <View>
                        <Text>this is last card</Text>
                    </View>
                }

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',//
        // alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        // width: Dimensions.get('window').width,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 100,
        paddingHorizontal: 10,
    },

    entry_question: {
        fontSize: 30,
        alignSelf: 'center',

    },
    entry_answer: {
        fontSize: 15
    }
});


function mapStateToProps({deckReducer}) {
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(Quiz)