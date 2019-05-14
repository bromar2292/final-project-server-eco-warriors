import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "firebase";

import { Text, Card } from "@99xt/first-born";
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
        value: 20,
        label: "Reduce Plastic",
        color: "#0b6623"
      },
      {
        value: 20,
        label: "Reduce Meat",
        color: "#708238"
      },
      {
        value: 20,
        label: "Eco Cosmetics",
        color: "#c7ea46"
      },
      {
        value: 20,
        label: "Recycle Clothes",
        color: "#A9BA9D"
      },
      {
        value: 20,
        label: "Energy Saving",
        color: "#4B5320"
      }
    ];
    return (
      <View style={styles.container}>
        <Header title="Profile" isLoggedIn />
        <ScrollView style={styles.mainContent}>
          <View style={styles.body}>
            <Text
              style={{
                fontSize: 33,
                fontWeight: "bold",
                padding: 10
              }}
            >
              Hello {this.state.user && this.state.user.email}
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
            <Card
              title="Reduce Plastic"
              description="This is the description."
            />
            <Card title="Reduce Meat" description="This is the description" />
            <Card title="Eco Cosmetics" description="This is the description" />
            <Card title="Energy Saving" description="This is the description" />
            <Card
              title="Recycle Clothes"
              description="This is the description"
            />
          </View>
        </ScrollView>
        <Footer {...this.props} />
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
    borderTopColor: "lightgrey",
    borderTopWidth: 1
  },
  mainContent: {
    height: "80%",
    width: "100%"
  },
  body: {
    flexDirection: "column",
    alignItems: "center"
  },
  body2: {
    flexDirection: "column",
    paddingBottom: 10
  },
  points: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 120
  }
});
