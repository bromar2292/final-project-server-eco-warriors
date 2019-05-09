import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import the different screens
import Loading from "./pages/Loading";
import SignUp from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/HomePage";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      Loading,
      Login,
      SignUp,
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
