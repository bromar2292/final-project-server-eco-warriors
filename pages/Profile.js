import React from "react";
import { StyleSheet, View } from "react-native";

import {
  Button,
  Input,
  Text,
  TabBar,
  TabItem,
  Icon,
  CardList
} from "@99xt/first-born";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PureChart from "react-native-pure-chart";

import Header from "../pages/components/Header";

export default class Profile extends React.Component {
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
    let sampleData = [
      {
        value: 40,
        label: "Plastic",
        color: "lightgreen"
      },
      {
        value: 30,
        label: "Meat",
        color: "darkgreen"
      },
      {
        value: 30,
        label: "Clothing",
        color: "green"
      }
    ];
    return (
      <View style={styles.container}>
        <Header title="Profile" />
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 33,
              fontWeight: "bold",
              marginTop: 160,
              padding: 10
            }}
          >
            Hello {currentUser && currentUser.email}
          </Text>
          <PureChart data={sampleData} type="pie" />
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
            So far you have saved:
          </Text>
        </View>
        <View style={styles.body2}>
          <MaterialCommunityIcons name="spray-bottle" size={45} color="grey" />
          <Text>4 Turtles</Text>
          <MaterialCommunityIcons name="tshirt-crew" size={45} color="grey" />
          <Text>7 Hippos</Text>
          <MaterialCommunityIcons name="food" size={45} color="grey" />
          <Text>12 Cows</Text>
        </View>
        <View style={styles.container2}>
          <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("Profile")}
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
