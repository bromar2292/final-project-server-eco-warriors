import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import firebase from "firebase";

export default class Header extends React.Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header2}>
          <Feather name="log-out" size={25} color="#669335" />
          <Text style={{ color: "white", fontSize: 20 }}>
            {this.props.title}
          </Text>
          {this.props.isLoggedIn ? (
            <Feather
              name="log-out"
              size={25}
              color="white"
              onPress={this.handleSignOut}
            />
          ) : (
            <Feather name="log-out" size={25} color="#669335" />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#669335",
    height: "15%",
    width: "100%",
    justifyContent: "center"
  },
  header2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
    margin: 10
  }
});
