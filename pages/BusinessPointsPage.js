import React from "react";
import firebase from "firebase";
import { StyleSheet, View, TextInput } from "react-native";
import Header from "./components/Header";
import { Button, Text } from "@99xt/first-born";
import { Constants, Permissions, BarCodeScanner } from "expo";

export default class BusinessPointsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      hasCameraPermission: true,
      scanned: false,
      userID: "",
      currentPoints: 0,
      usersName: ""
    };
  }

  handleSubmit = () => {
    let newPoints =
      Number(this.state.points) + Number(this.state.currentPoints);
    firebase
      .database()
      .ref("users/" + this.state.userID)
      .update({ points: newPoints });
    this.setState(() => ({
      currentPoints: newPoints
    }));
  };

  handleScan = ({ data }) => {
    console.log("I have scanned");
    firebase
      .database()
      .ref("users/" + data)
      .on("value", snapshot => {
        if (snapshot.val()) {
          this.setState({
            scanned: true,
            usersName: snapshot.val().firstName,
            currentPoints: Number(snapshot.val().points),
            userID: data
          });
        }
      });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title="Points Page" // isLoggedIn={true}
        />
        <View style={styles.body}>
          {scanned ? (
            <>
              <Text>How much has {this.state.usersName} spent today?</Text>
              <TextInput
                placeholder="Please enter points here"
                placeholderTextColor="#a0a2a5"
                style={{
                  width: "73%",
                  height: "7%",
                  borderColor: "#a0a2a5",
                  borderBottomWidth: 1
                }}
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={points => this.setState({ points })}
                value={String(this.state.points)}
              />
              <Button
                style={{
                  backgroundColor: "white",
                  width: "73%",
                  height: "8%",
                  borderRadius: 30
                }}
                onPress={() => this.handleSubmit()}
              >
                <Text style={{ color: "black" }}>Submit points</Text>
              </Button>
            </>
          ) : (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleScan}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              style={{ height: 300, width: 300 }}
            />
          )}
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
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    padding: "10%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
