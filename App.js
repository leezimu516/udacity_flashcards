import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import Deck from "./src/components/Deck";
import reducer from './src/reducers'

export default function App() {
    return (

        <Provider store={createStore(reducer)}>
            <View style={styles.row}>
                {/*<Text>Universal React with Expodddd</Text>*/}
                <Deck/>
            </View>
        </Provider>


    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection:"column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
