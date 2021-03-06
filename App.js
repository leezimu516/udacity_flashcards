import * as React from "react";
import {View, Text, StyleSheet, Platform, AsyncStorage} from "react-native";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import NewDeck from "./src/components/NewDeck";
import Deck from "./src/components/Deck"
import reducer from './src/reducers'
import {purple, white} from './src/utils/colors'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DeckDetails from "./src/components/DeckDetails";
import NewCard from "./src/components/NewCard";
import Quiz from "./src/components/Quiz";
import {setLocalNotification} from "./src/utils/helper";
import {Component} from "react";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBar = () => {
    return (

        <Tab.Navigator
            initialRouteName="Deck"
            headerMode="screen"
        >
            <Tab.Screen name="Deck" component={Deck}/>
            <Tab.Screen name="NewDeck" component={NewDeck}/>
        </Tab.Navigator>

    )
}

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabBar}/>
            <Stack.Screen name="DeckDetails" component={DeckDetails}/>
            <Stack.Screen name="NewDeck" component={NewDeck}/>
            <Stack.Screen name="NewCard" component={NewCard}/>
            <Stack.Screen name="Quiz" component={Quiz}/>
        </Stack.Navigator>
    );
}

export default class App extends Component {

    componentDidMount() {
        setLocalNotification()
    }

    render() {

        return (

            <Provider store={createStore(reducer)}>
                <NavigationContainer style={styles.row}>
                    <MyStack/>
                </NavigationContainer>
            </Provider>


        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
