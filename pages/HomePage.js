import React from "react";
import { StyleSheet, Platform, Image, View } from "react-native";
import firebase from "firebase";
import MenuBar from "../pages/components/MenuBar";
import { Button, Input, Text, TabBar, TabItem, Icon } from "@99xt/first-born";

export default class Main extends React.Component {
  state = { currentUser: null };

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
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
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
        <View style={styles.container2}>
          <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
            <TabItem
              onPress={() => this.props.navigation.navigate("Interests")}
            >
              <Icon name="bookmark" />
              <Text style={{ color: "black", fontSize: 10 }}>Interests</Text>
            </TabItem>
            <TabItem>
              <Icon name="camera" />
              <Text style={{ color: "black", fontSize: 10 }}>QR Code</Text>
            </TabItem>
          </TabBar>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
  }
});
