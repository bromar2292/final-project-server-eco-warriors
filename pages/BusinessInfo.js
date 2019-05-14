import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

import { Button, Input, Text, TabBar, TabItem, Icon } from "@99xt/first-born";

export default class BusinessInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <ImageBackground
            style={styles.image}
            source={require("../assets/cleankilo.jpeg")}
          >
            <Text style={styles.mainTitle}>The Clean Kilo</Text>
          </ImageBackground>

          <View style={styles.description}>
            <Text style={styles.title}>Description</Text>
            <Text>0 waste plastic reduction shop</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.description}>
            <Text style={styles.title}>Opening Times </Text>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Monday</Text>
                <Text style={{ marginRight: 10 }}>Closed</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Tuesday</Text>
                <Text style={{ marginRight: 10 }}>10am -7pm</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Wednesday</Text>
                <Text style={{ marginRight: 10 }}>10am -7pm</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Thursday</Text>
                <Text style={{ marginRight: 10 }}>10am -7pm</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Friday</Text>
                <Text style={{ marginRight: 10 }}>10am -7pm</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Saturday</Text>
                <Text style={{ marginRight: 10 }}>9am - 6:30pm</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Sunday</Text>
                <Text style={{ marginRight: 10 }}>Closed</Text>
              </View>
            </View>
          </View>

          <Image
            style={styles.image2}
            source={require("../assets/cleankilomap.png")}
          />
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
    justifyContent: "center",
    height: "100%"
  },
  mainTitle: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  line: {
    color: "lightgrey",
    margin: 10
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  image2: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 40
  },
  description: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // border: "10%",
    // padding: 10
    marginLeft: 10
  },
  openingTimes: {},
  scroll: {
    height: "80%",
    width: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7
    // padding: 5
  },

  container2: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    borderTopColor: "grey",
    // borderTopStyle: "solid",
    borderTopWidth: 1
  },
  divider: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    margin: 10
  }
});
