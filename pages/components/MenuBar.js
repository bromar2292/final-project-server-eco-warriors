import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input, Text, TabBar, TabItem, Icon } from "@99xt/first-born";

export default class MenuBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
          <TabItem>
            <Icon name="person" />
            <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
          </TabItem>
          <TabItem onPress={() => this.props.navigation.navigate("Interests")}>
            <Icon name="bookmark" />
            <Text style={{ color: "black", fontSize: 10 }}>Interests</Text>
          </TabItem>
          <TabItem>
            <Icon name="camera" />
            <Text style={{ color: "black", fontSize: 10 }}>QR Code</Text>
          </TabItem>
        </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
