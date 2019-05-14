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
import QRCode from "react-native-qrcode";

export default class QR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser,
      points: ""
    };
  }

  componentDidMount = () => {
    firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
        if (snapshot.val()) {
          this.setState({
            points: snapshot.val().points
          });
        }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="QR Code" />
        <ScrollView style={styles.mainContent}>
          <QRCode value={[this.state.user.uid, this.state.points]} size={300} />
        </ScrollView>
        <View style={styles.container2}>
          <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
            <TabItem onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
            <TabItem
              onPress={() => this.props.navigation.navigate("Interests")}
            >
              <Icon name="bookmark" />
              <Text style={{ color: "black", fontSize: 10 }}>Interests</Text>
            </TabItem>
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("QR")}
            >
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
    width: "100%",
    paddingTop: "10%",
    paddingLeft: "8%"
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
