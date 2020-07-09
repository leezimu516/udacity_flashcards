import * as React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import NewDeck from "./src/components/NewDeck";
import Deck from "./src/components/Deck"
import reducer from './src/reducers'
import {createStackNavigator} from 'react-navigation';
import {purple, white} from './src/utils/colors'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <NavigationContainer style={styles.row}>
            <Tab.Navigator>
                <Tab.Screen name="Deck" component={Deck}/>
                <Tab.Screen name="New Deck" component={NewDeck}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
    return (

        <Provider store={createStore(reducer)}>
            <TabBar/>
        </Provider>


    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
