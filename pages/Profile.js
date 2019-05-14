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
              Hello {currentUser && currentUser.email}
            </Text>
            <PureChart data={sampleData} type="pie" />
            <View style={styles.points}>
              <Text style={{ color: "white", zIndex: 1, fontSize: 65 }}>
                225
              </Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
              So far you have saved:
            </Text>
          </View>
          <View style={styles.body2}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  overflow: "hidden",
                  width: "90%",
                  boxShadow: 10
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 10, width: "100%" }}
                >
                  <MaterialCommunityIcons
                    name="spray-bottle"
                    size={30}
                    color="grey"
                  />
                  <Text style={{ color: "#777", padding: 5 }}>
                    Description of the image
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  overflow: "hidden",
                  width: "90%",
                  boxShadow: 10
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 10, width: "100%" }}
                >
                  <MaterialCommunityIcons name="food" size={30} color="grey" />
                  <Text style={{ color: "#777", padding: 5 }}>
                    Description of the image
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  overflow: "hidden",
                  width: "90%",
                  boxShadow: 10
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 10, width: "100%" }}
                >
                  <MaterialCommunityIcons
                    name="tshirt-crew"
                    size={30}
                    color="grey"
                  />
                  <Text style={{ color: "#777", padding: 5 }}>
                    Description of the image
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  overflow: "hidden",
                  width: "90%",
                  boxShadow: 10
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 10, width: "100%" }}
                >
                  <MaterialCommunityIcons name="brush" size={30} color="grey" />
                  <Text style={{ color: "#777", padding: 5 }}>
                    Description of the image
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  overflow: "hidden",
                  width: "90%",
                  boxShadow: 10
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 10, width: "100%" }}
                >
                  <MaterialCommunityIcons
                    name="lightbulb-on"
                    size={30}
                    color="grey"
                  />
                  <Text style={{ color: "#777", padding: 5 }}>
                    Description of the image
                  </Text>
                </View>
              </View>
            </View>
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
    alignItems: "center",
    flex: 1
  },
  container2: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    // height: "8.8%",
    borderTopColor: "lightgrey",
    borderTopWidth: 1
  },
  mainContent: {
    height: "80%",
    width: "100%"
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
    height: "52%"
  },
  body2: {
    alignItems: "center",
    flexDirection: "column",
    height: "50%"
  },
  points: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 120
  }
});
