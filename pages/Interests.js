import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Input,
  Text,
  TabBar,
  TabItem,
  Icon,
  CardList
} from "@99xt/first-born";
import MenuBar from "../pages/components/MenuBar";
import Header from "../pages/components/Header";

export default class Interests extends React.Component {
  render() {
    const listData = [
      {
        title: "Heading 1",
        description: "Description 1"
      },
      {
        title: "Heading 2",
        description: "Description 2"
      },
      {
        title: "Heading 3",
        description: "Description 3"
      }
    ];

    return (
      <View style={styles.container}>
        <Header title="Interests" />
        <View style={styles.carousel}>
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
        </View>
        <View style={styles.cards}>
          <CardList data={listData} />
        </View>
        <View style={styles.container2}>
          <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
            <TabItem onPress={() => this.props.navigation.navigate("Main")}>
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
            <TabItem
              active
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
    // alignItems: "center"
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
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  cards: {
    height: "50%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
