import {AsyncStorage, Linking, Alert} from 'react-native'
// import {Notifications} from 'expo'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export const NOTIFICATION_KEY = 'flashcard:notification'

function formatCard(question, answer) {
    return {
        question,
        answer
    }
}

function formatDeck(title) {
    return {
        title,
        questions: []
    }
}



function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Take a quiz',
        body: "👋 Don't forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleNotificationAsync(
                                {
                                    content: createNotification(),
                                    trigger: tomorrow,
                                }
                            )


                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        } else {
                            Alert.alert(
                                "No Notification Permission",
                                "please goto setting and on notification permission manual",
                                [
                                    {text: "cancel", onPress: () => console.log("cancel")},
                                    {text: "Allow", onPress: () => Linking.openURL("app-settings:")},
                                ],
                                {cancelable: false}
                            );
                        }
                    })
            }
        })
}

export {
    formatCard,
    formatDeck,
    clearLocalNotification,
    setLocalNotification
}