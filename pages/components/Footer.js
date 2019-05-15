import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, TabBar, TabItem, Icon, CardList } from "@99xt/first-born";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
          {this.props.active === "Profile" ? (
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
          ) : (
            <TabItem onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
          )}
          {this.props.active === "Interests" ? (
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("Interests")}
            >
              <Icon name="bookmark" />
              <Text style={{ color: "black", fontSize: 10 }}>Interests</Text>
            </TabItem>
          ) : (
            <TabItem
              onPress={() => this.props.navigation.navigate("Interests")}
            >
              <Icon name="bookmark" />
              <Text style={{ color: "black", fontSize: 10 }}>Interests</Text>
            </TabItem>
          )}
          {this.props.active === "QR" ? (
            <TabItem
              active
              onPress={() => this.props.navigation.navigate("QR")}
            >
              <Icon name="camera" />
              <Text style={{ color: "black", fontSize: 10 }}>QR Code</Text>
            </TabItem>
          ) : (
            <TabItem onPress={() => this.props.navigation.navigate("QR")}>
              <Icon name="camera" />
              <Text style={{ color: "black", fontSize: 10 }}>QR Code</Text>
            </TabItem>
          )}
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
    borderTopWidth: 1
  }
});
