import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, button } from "react-native";

import logo from "./assets/icon.png";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Hello world</Text>
      <Text>Hola Mundsaddaso</Text>
      <Image source={logo} style={{ width: 50, height: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
