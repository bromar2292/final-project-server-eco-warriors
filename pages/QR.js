import React from "react";
import Header from "./components/Header";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "firebase";
import Footer from "./components/Footer";
import QRCode from "react-native-qrcode";

export default class QR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="QR Code" />
        <ScrollView style={styles.mainContent}>
          <QRCode value={this.state.user.uid} size={300} />
        </ScrollView>
        <Footer {...this.props} active="QR" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  mainContent: {
    height: "75%",
    width: "100%",
    paddingTop: "10%",
    paddingLeft: "8%"
  }
});
