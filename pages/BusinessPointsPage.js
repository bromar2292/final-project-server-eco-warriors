import React from "react";
import firebase from "firebase";
import { StyleSheet, View, TextInput } from "react-native";
import Header from "./components/Header";
import { Button, Text } from "@99xt/first-born";

export default class Profile extends React.Component {
  state = { points: "0" };

  //   handleSubmit = () =>
  //       firebase.

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened!
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header title="Points Page" />
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 33,
              fontWeight: "bold",
              marginTop: 160,
              padding: 10
            }}
          >
            <TextInput
              placeholder="Please enter points here"
              placeholderTextColor="#FFFFFF"
              style={{
                width: "73%",
                height: "7%",
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1
              }}
              autoCapitalize="none"
              onChangeText={points => this.setState({ points })}
              value={this.state.points}
            />
            The username is "here we need to actually insert the name/ username
            of user"
          </Text>
          <Button
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "8%",
              borderRadius: 30
            }}
            onPress={this.handleSubmit}
          >
            <Text style={{ color: "black" }}>Submit points</Text>
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "8%",
              borderRadius: 30
            }}
            onPress={this.handleSignOut}
          >
            <Text style={{ color: "black" }}>Sign Out</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  container2: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    height: "10%",
    borderTopColor: "grey",
    // borderTopStyle: "solid",
    borderTopWidth: 1
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  body: {
    flexDirection: "column",
    alignItems: "center"
  },
  body2: {
    justifyContent: "space-between",
    position: "absolute",
    top: 500,
    alignItems: "center"
  }
});
