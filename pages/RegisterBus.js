import React from "react";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  View
} from "react-native";
import { LinearGradient } from "expo";
import { Button, Text } from "@99xt/first-born";
import firebase from "firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class SignUp extends React.Component {
  state = {
    businessName: "",
    businessAddress: "",
    email: "",
    businessDescription: "",
    userType: "business",
    location: "",
    email: "",
    errorMessage: null
  };
  navigateToLogin = () => {
    this.props.navigation.navigate("Login");
  };
  handleSignUp = () => {
    // console.log(this.state);
    // firebase.initializeApp(firebaseConfig);
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(currentUser => {
        console.log(currentUser.user.uid);
        firebase
          .database()
          .ref("users/" + currentUser.user.uid)
          .set({
            userType: this.state.userType,
            businessName: this.state.businessName,
            businessAddress: this.state.businessAddress,
            businessDescription: this.state.businessDescription,
            location: this.state.location

            //insert QR code
          })
          .then(() => {
            console.log("inserted business");
            this.props.navigation.navigate("BusinessPointsPage");
          })
          .catch(error => this.setState({ errorMessage: error.message }));
      });
  };
  render() {
    return (
      <LinearGradient colors={["#a2ea54", "#669335"]} style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          style={styles.container}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
          contentContainerStyle={styles.container}
          style={{ backgroundColor: ["#a2ea54", "#669335"] }}
        >
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <Text color="white" size="h4">
            Ecommunity
          </Text>
          <TextInput
            placeholder="Business Name"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            onChangeText={businessName => this.setState({ businessName })}
            value={this.state.businessName}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Business Address"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            onChangeText={businessAddress => this.setState({ businessAddress })}
            value={this.state.surname}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Business Email"
            placeholderTextColor="white"
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
            placeholder="Business Description"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            onChangeText={businessDescription =>
              this.setState({ businessDescription })
            }
            value={this.state.businessDescription}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TextInput
            placeholder="Location"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1,
              marginBottom: "15%"
            }}
            autoCapitalize="none"
            onChangeText={location => this.setState({ location })}
            value={this.state.location}
          />
          <Button
            style={{
              backgroundColor: "white",
              width: "73%",
              height: "8%",
              borderRadius: 30
            }}
            onPress={() => this.handleSignUp()}
          >
            <Text style={{ color: "black" }}>Sign up</Text>
          </Button>
          <Button
            style={{
              width: "73%",
              height: "8%",
              backgroundColor: "transparent",
              border: "none"
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "black" }}>
              Already have an account? Login
            </Text>
          </Button>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
