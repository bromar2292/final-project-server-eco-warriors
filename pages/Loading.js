import React from "react";
import firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebaseConfig from "../firebase.config";

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(currentUser => {
      // if the user is already logged in
      // using their UID we get from the db their userType
      // based on the UserType we navigate them to the correct page
      // console.log(currentUser);
      if (currentUser) {
        firebase
          .database()
          .ref("users/" + currentUser.uid)
          .once("value")
          .then(snapshot => {
            var userInfo = snapshot.val();
            if (userInfo.userType === "personal") {
              console.log("loading-personal");
              this.props.navigation.navigate("Profile");
            } else if (userInfo.userType === "business") {
              console.log("loading-business");
              this.props.navigation.navigate("BusinessPointsPage");
            }
          })
          .catch(err => {
            console.log(err);
          });
        //if the user is not already signed in
        // we redirect to  the login page
      } else {
        this.props.navigation.navigate("Login");
      }
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
