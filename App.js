import * as React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import NewDeck from "./src/components/NewDeck";
import Deck from "./src/components/Deck"
import reducer from './src/reducers'
import {purple, white} from './src/utils/colors'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBar = () => {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Deck" component={Deck}/>
                <Tab.Screen name="New Deck" component={NewDeck}/>
            </Tab.Navigator>

    )
}

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabBar} />
    </Stack.Navigator>
  );
}

export default function App() {
    return (

        <Provider store={createStore(reducer)}>
            <NavigationContainer style={styles.row}>
            <MyStack/>
                {/*<TabBar/>*/}
                {/*<Deck/>*/}
            </NavigationContainer>
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
