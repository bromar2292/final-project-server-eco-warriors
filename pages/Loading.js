import React from "react";
import firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebaseConfig from "../firebase.config";

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "Login");
    });
  }
  render() {
    console.log("Loading");
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  }
});
