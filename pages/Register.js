import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { LinearGradient } from "expo";
import { Button, Text } from "@99xt/first-born";
import firebase from "firebase";
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel
// } from "react-native-simple-radio-button";

// when a user Registers firebase takes in Email and Password and saves in the "Auth" tab
// After it is saved in the auth tab (in firebase) to save the rest of the fields in the
//users database (firebase)
// and then redirect user to Home Page

// import firebaseConfig from "../firebase.config";

export default class SignUp extends React.Component {
  state = {
    ageRange: "",
    name: "",
    userType: "personal",
    surname: "",
    location: "",
    email: "",
    password: "",
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

        //here we would create the QR code with the USER uid?

        firebase
          .database()
          .ref("users/" + currentUser.user.uid)
          .set({
            userType: this.state.userType,
            ageRange: this.state.ageRange,
            firstName: this.state.name,
            surname: this.state.surname,
            location: this.state.location,
            points: 0
            //insert QR code
          })
          .then(() => {
            console.log("inserted");
            this.props.navigation.navigate("Main");
          })
          .catch(error => this.setState({ errorMessage: error.message }));
      });
  };

  // 0. set up fake gmail
  // 0.1 add to firebase
  // 0.2 try adding a new user
  // 1. find out if you can have multiple collections in real time
  // look at firebase through post man
  //   figure it out at home?
  // 2. we need another route to add and subtract points
  //   2.1 `post /points/${userId}?add=true&points=${point}`
  // 3. QR codes - generate with url
  //    3.1 text: userId
  // 4. business schema's
  // 5. import json for business's
  // 6. 'get' route from db
  //

  // supertest to check api calls

  render() {
    return (
      <LinearGradient colors={["#a2ea54", "#669335"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <Text color="white" size="h3">
            Ecommunity
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Surname"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            onChangeText={surname => this.setState({ surname })}
            value={this.state.surname}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Email"
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
            placeholder="Age range"
            placeholderTextColor="white"
            style={{
              width: "73%",
              height: "7%",
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1
            }}
            autoCapitalize="none"
            onChangeText={ageRange => this.setState({ ageRange })}
            value={this.state.ageRange}
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
        </View>
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
