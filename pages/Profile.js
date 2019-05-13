import React from "react";
import Header from "./components/Header";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "firebase";

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

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser
    };
  }

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
        <ScrollView style={styles.mainContent}>
          <View style={styles.body}>
            <Text
              style={{
                fontSize: 33,
                fontWeight: "bold",
                // marginTop: 160,
                padding: 10
              }}
            >
              Hello {this.state.user && this.state.user.email}
            </Text>
            <PureChart data={sampleData} type="pie" />
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
            <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
              So far you have saved:
            </Text>
          </View>
          <View style={styles.body2}>
            <MaterialCommunityIcons
              name="spray-bottle"
              size={45}
              color="grey"
            />
            <Text>4 Turtles</Text>
            <MaterialCommunityIcons name="tshirt-crew" size={45} color="grey" />
            <Text>7 Hippos</Text>
            <MaterialCommunityIcons name="food" size={45} color="grey" />
            <Text>12 Cows</Text>
          </View>
        </ScrollView>
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
            <TabItem onPress={() => this.props.navigation.navigate("QR")}>
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
  },
  mainContent: {
    height: "75%",
    width: "100%"
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
    height: "60%"
  },
  body2: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%"
  }
});
