import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
// import the different screens
import Loading from "./pages/Loading";
import SignUp from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/HomePage";
import Interests from "./pages/Interests";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      Loading,
      Login,
      SignUp,
      Main,
      Interests
    },
    {
      initialRouteName: "Loading"
    }
  )
  // createStackNavigator({
  //   Profile: { screen: Main },
  //   Interests: { screen: Interests }
  // })
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
