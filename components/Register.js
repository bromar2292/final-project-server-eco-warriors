import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebase from "firebase";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

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

        //here we would create the QR code with the USER uid
        firebase
          .database()
          .ref("users/" + currentUser.user.uid)
          .set({
            userType: this.state.userType,
            ageRange: this.state.ageRange,
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Location"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <TextInput
          placeholder="Age range"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={ageRange => this.setState({ ageRange })}
          value={this.state.ageRange}
        />
        <TextInput
          placeholder="Surname"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            this.setState({ value: value });
          }}
        />

        <Button title="Login" onPress={this.navigateToLogin} />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});
