import React from "react";
import { StyleSheet, View, Image } from "react-native";
import firebase from "firebase";
import { LinearGradient } from "expo";
import { Button, Input, Text } from "@99xt/first-born";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Home"))
      .catch(error => this.setState({ errorMessage: error.message }));
    console.log("handleLogin");
  };
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Login</Text>
      //   {this.state.errorMessage && (
      //     <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
      //   )}
      //   <TextInput
      //     style={styles.textInput}
      //     autoCapitalize="none"
      //     placeholder="Email"
      //     onChangeText={email => this.setState({ email })}
      //     value={this.state.email}
      //   />
      //   <TextInput
      //     secureTextEntry
      //     style={styles.textInput}
      //     autoCapitalize="none"
      //     placeholder="Password"
      //     onChangeText={password => this.setState({ password })}
      //     value={this.state.password}
      //   />
      //   <Button title="Login" onPress={this.handleLogin} />
      //   <Button
      //     title="Don't have an account? Sign Up"
      //     onPress={() => this.props.navigation.navigate("SignUp")}
      //   />
      // </View>

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
          <Input
            placeholder="Email"
            color="secondary"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Input
            placeholder="Password"
            color="secondary"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            block
            onPress={() => this.handleLogin()}
            style={{ backgroundColor: "white" }}
          >
            <Text style={{ color: "black" }}>Log In</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("SignUp")}
            style={{ backgroundColor: "white" }}
            block
          >
            <Text style={{ color: "black" }}>Sign Up</Text>
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
