import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.row}>
      <Text>Universal React with Expodddd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
