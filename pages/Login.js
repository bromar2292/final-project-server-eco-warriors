import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import firebase from "firebase";
import { LinearGradient } from "expo";
import { Button, Text } from "@99xt/first-born";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(currentUser => {
        firebase
          .database()
          .ref("users/" + currentUser.user.uid)
          .once("value")
          .then(snapshot => {
            var userInfo = snapshot.val();
            console.log(userInfo);
            if (userInfo.userType === "personal") {
              console.log("logged in as personal user, should go to home");
              this.props.navigation.navigate("Profile");
            } else {
              console.log(
                "logged in as business user, should go to business page"
              );
              this.props.navigation.navigate("BusinessPointsPage");
            }
          });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ errorMessage: err.message });
      });
  };

  render() {
    return (
      <LinearGradient colors={["#a2ea54", "#669335"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={{
              width: 220,
              height: 95,
              marginBottom: 50,
              marginRight: 75
            }}
            source={require("../assets/white-leaf-png-6.png")}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
            autoCapitalize="none"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1,
              marginBottom: "18%",
              paddingTop: 20
            }}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text>{this.state.errorMessage}</Text>
          <Button
            onPress={() => this.handleLogin()}
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "7%",
              borderRadius: 30
            }}
          >
            <Text style={{ color: "black" }}>Log In</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("SignUp")}
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "7%",
              borderRadius: 30
            }}
          >
            <Text style={{ color: "black" }}>Sign Up</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("RegisterBus")}
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "7%",
              borderRadius: 30
            }}
          >
            <Text style={{ color: "black" }}>Sign up for Business</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
