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
            toggleAnswer: false,
        }
    }

    next = (entryId, cardId, isCorrect) => {
        const {dispatch, navigation, route} = this.props
        const {correct} = route.params
        console.log('current corrent', correct)
        const current = isCorrect ? correct+1:  correct
        console.log("correct answer", current)
        navigation.push('Quiz', {entryId, cardId, correct:current})

    }

    handleToggleAnswer = () => {
        const current = this.state.toggleAnswer
        this.setState({toggleAnswer: !current})
    }


    render() {
        const {decks, route, navigation} = this.props
        const {entryId, cardId, correct} = route.params
        const deck = decks[entryId]
        const cards = deck['questions']
        const card = cards[cardId]
        // console.log("card component", cardId, cards)
        return (
            <View style={styles.container}>
                {cards.length !== 0 ?
                    <View>

                        {cardId !== cards.length ?
                            <View>
                                <Text style={styles.indicator}>{cardId+1}/{cards.length}</Text>
                                {this.state.toggleAnswer ?
                                    <View>
                                        <Text style={styles.entry_question}>{card.answer}</Text>
                                        < SubmitBtn text={'Question'} onPress={() => this.handleToggleAnswer()}/>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.entry_question}>{card.question}</Text>
                                        < SubmitBtn text={'Answer'} onPress={() => this.handleToggleAnswer()}/>
                                    </View>


                                }

                                <SubmitBtn text={'Correct'} onPress={() => this.next(entryId, cardId + 1, true)}/>
                                <SubmitBtn text={'Incorrect'} onPress={() => this.next(entryId, cardId + 1, false)}/>
                            </View>
                            :

                            <View>
                                <Text style={styles.entry_question}>your score is {parseInt(correct/cards.length * 100, 10)}%</Text>
                                <SubmitBtn text={'Home'} onPress={() => navigation.navigate('Home')}/>
                                <SubmitBtn text={'Restart Quiz'} onPress={() => navigation.navigate('DeckDetails', {entryId: entryId})}/>
                            </View>
                        }
                    </View>
                    :
                    <View>
                        <Text>Sorry, you cannnot take a quiz because there are no cards in the deck</Text>
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
        // justifyContent: 'center',//
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
    },
    indicator: {
        fontSize:15,
        marginBottom:50,
    }
});


function mapStateToProps({deckReducer}) {
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(Quiz)