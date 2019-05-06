import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import the different screens
import Loading from "./components/Loading";
import SignUp from "./components/Register";
import Login from "./components/Login";
import Main from "./components/HomePage";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName: "Loading"
    }
  )
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}
