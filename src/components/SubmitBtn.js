import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {purple, white} from "../utils/colors";

export default function SubmitBtn({text, onPress}) {
    return (
        <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({


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