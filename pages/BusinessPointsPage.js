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
      points: "0",
      hasCameraPermission: true,
      scanned: false,
      userID: ""
    };
  }

  handleSubmit = () => {
    firebase
      .database()
      .ref("users/" + this.state.userID)
      .update({ points: this.state.points });
  };

  handleScan = ({ data }) => {
    console.log("I have scanned");
    console.log(data);
    this.setState(() => ({ scanned: true, userID: data }));
  };

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened!
      });
  };
  render() {
    const { hasCameraPermission, scanned } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Points Page" />
        <View style={styles.body}>
          {scanned ? (
            <>
              <Text>
                The username is "here we need to actually insert the name/
                username of user"
              </Text>
              <TextInput
                placeholder="Please enter points here"
                placeholderTextColor="#a0a2a5"
                style={{
                  width: "73%",
                  height: "7%",
                  borderColor: "#a0a2a5",
                  borderBottomWidth: 1
                }}
                autoCapitalize="none"
                onChangeText={points => this.setState({ points })}
                value={this.state.points}
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
