import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions, KeyboardAvoidingView, TextInput} from 'react-native'
import SubmitBtn from "./SubmitBtn";
import {connect} from 'react-redux'
import {formatCard} from "../utils/helper";
import {addCard} from "../actions/deckAction";
import {saveCard} from "../utils/api";

class NewCard extends Component {
    constructor () {
        super()
        this.state ={
            question:'',
            answer:''
        }
    }

    submit = (entryId) => {
        const {question, answer} = this.state
        const {dispatch, navigation} = this.props
        const card = formatCard(question, answer)
        console.log('add card component', card, entryId)
        dispatch(addCard(card, entryId))
        navigation.push('DeckDetails', {entryId: entryId})
        saveCard({card, entryId})

    }
    render() {
        const {route, navigation} = this.props;
        const {entryId} = route.params
        console.log("new card route params ", entryId)
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Text>New card</Text>
                <TextInput
                    placeholder={'Question'}
                    style={styles.textInput}
                    onChangeText={(input) => {this.setState({question:input})}}
                />

                <TextInput
                    placeholder={'Answer'}
                    style={styles.textInput}
                    onChangeText={(input) => {this.setState({answer:input})}}
                />
                <SubmitBtn text='submit' onPress={() => this.submit(entryId)}/>
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

export default connect()(NewCard)