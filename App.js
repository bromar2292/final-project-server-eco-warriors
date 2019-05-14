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
import Interests from "./pages/Interests";
import Profile from "./pages/Profile";
import RegisterBus from "./pages/RegisterBus";
import BusinessPointsPage from "./pages/BusinessPointsPage";
import BusinessInfo from "./pages/BusinessInfo";
import QR from "./pages/QR";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      Loading,
      Login,
      SignUp,
      Profile,
      Interests,
      RegisterBus,
      BusinessPointsPage,
      BusinessInfo,
      QR
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
