import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {purple, white} from "../utils/colors";

function SubmitBtn({text, onPress}) {
    return (
        <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

class DeckDetails extends Component {


    render() {
        const {route} = this.props;
        const {entry} = route.params
        console.log("route params", entry)
        return (
            <View style={styles.entry}>
                <Text style={styles.entry_deck}>{entry['title']}</Text>
                <Text style={styles.entry_card}>Cards: {entry['questions'].length}</Text>
                <SubmitBtn text={'Add Card'}/>
                <SubmitBtn text={'Start Quiz'}/>


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

    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin:20

    },
    AndroidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }

})

export default DeckDetails