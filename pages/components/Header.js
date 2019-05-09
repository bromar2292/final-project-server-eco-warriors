import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header2}>
          <AntDesign name="arrowleft" size={25} color="white" />
          <Text style={{ color: "white", fontSize: 20 }}>
            {this.props.title}
          </Text>
          <Feather name="log-out" size={25} color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#669335",
    height: "15%",
    width: "100%",
    justifyContent: "center"
  },
  header2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
  }
});
