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


class NewDeck extends Component {
    constructor() {
        super()
        this.state = {
            deckTitle:''
        }
    }

    submit = () => {
        const {deckTitle} = this.state
        const {dispatch,navigation} = this.props
        // const deck = formatDeck(deckTitle)
        // console.log('add card component', deck)

        dispatch(addDeck(deckTitle))
        navigation.push('DeckDetails', {entryId: deckTitle})
        this.setState({deckTitle:''})

    }



    render() {

        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    clearButtonMode="always"
                    placeholder={'Deck title'}
                    style={styles.textInput}
                    onChangeText={(input) => {this.setState({deckTitle:input})}}
                    value={this.state.deckTitle}
                />
                <SubmitBtn text='submit' onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',//
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 100,
    paddingHorizontal: 10,
  },
});

export default connect()(NewDeck)