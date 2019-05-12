import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Input,
  Text,
  TabBar,
  TabItem,
  Icon,
  Card
} from "@99xt/first-born";
import MenuBar from "../pages/components/MenuBar";
import Header from "../pages/components/Header";
import Carousel from "react-native-carousel-control";

export default class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [
        (plastic = [
          {
            name: "The Clean Kilo",
            address: "1 Gibb Street, Birmingham, B9 4BF"
          },
          {
            name: "Nature's Intention",
            address: "2 High Street, Bromsgrove, B61 8HQ"
          },
          {
            name: "Indigo Wholefoods",
            address: "50-52 St Mary's Row, Birmingham, B13 8JG"
          }
        ]),
        (meat = [
          {
            name: "BA-HA",
            address: "The Mailbox, 171-172 Wharfside St, Birmingham, B1 1RL"
          },
          {
            name: "Natural Bar and Kitchen",
            address:
              "1 Sirius (The Orion Building), 24 Suffolk St, Queensway, Birmingham, B1 1LT"
          },
          {
            name: "3 Three's Coffee Lounge",
            address: "17 Martineau Way, Birmingham, B2 4UW"
          },
          {
            name: "Not Dogs",
            address: "LinkStreet, Bullring, Birmingham, B5 4BS"
          },
          {
            name: "The Warehouse Cafe",
            address: "54-57 Allison St, Birmingham, B5 5TH"
          }
        ]),
        (cosmetics = [
          {
            name: "Lush",
            address: "143-144 New St, Birmingham, B2 4NY"
          },
          {
            name: "The Body Shop",
            address:
              "Unit Su518, The Bullring Shopping Centre, Birmingham, B5 4BE"
          },
          {
            name: "The Body Shop",
            address: "Birmingham Station, Unit 14/15 The Concourse, B2 4XJ "
          }
        ]),
        (energy = [
          {
            name: "Green Tech Hub",
            address:
              "Office 1, Izabella House, 24-26 Regent Place, Birmingham, B1 3NJ"
          }
        ]),
        (clothes = [
          {
            name: "H&M",
            address: "Smallbrook Queensway, Birmingham, B5 4BG"
          },
          {
            name: "Oxfam",
            address: "34 St Mary's Row, Birmingham, B13 8JG"
          }
        ])
      ],
      currentCategory: [
        (plastic = [
          {
            name: "The Clean Kilo",
            address: "1 Gibb Street, Birmingham, B9 4BF"
          },
          {
            name: "Nature's Intention",
            address: "2 High Street, Bromsgrove, B61 8HQ"
          },
          {
            name: "Indigo Wholefoods",
            address: "50-52 St Mary's Row, Birmingham, B13 8JG"
          }
        ])
      ]
    };
  }

  updateCurrentCategory = category => {
    this.setState(() => ({ currentCategory: [category] }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Interests" />
        <View style={styles.carousel}>
          <Carousel
            pageStyle={{
              height: 130,
              marginLeft: 6,
              marginRight: 6,
              marginTop: 10
            }}
            pageWidth={130}
            swipeThreshold={0.2}
          >
            <TouchableOpacity
              onPress={() => this.updateCurrentCategory(plastic)}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require("../assets/530878d8-gp0stt3fm.jpg")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 110,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                  onPress={() => this.updateCurrentCategory(plastic)}
                >
                  <Text style={{ color: "#FFFFFF" }}>Reduce Plastic</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateCurrentCategory(meat)}>
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require("../assets/Black-Bean-Burgers-4-600x600.jpg")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 110,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Reduce Meat</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.updateCurrentCategory(cosmetics)}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require("../assets/lush.png")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 110,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Eco Cosmetics</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.updateCurrentCategory(energy)}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require("../assets/energy.jpg")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 110,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Energy Saving</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.updateCurrentCategory(clothes)}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require("../assets/clothes.jpg")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 110,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Recycle Clothes</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </Carousel>
          {/* <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("../assets/530878d8-gp0stt3fm.jpg")}
          /> */}
        </View>
        <ScrollView style={styles.cards}>
          {this.state.currentCategory &&
            this.state.currentCategory[0].map((item, idx) => (
              <Card
                title={item.name}
                key={idx}
                description={item.address}
                onPress={() => this.props.navigation.navigate("BusinessInfo")}
              />
            ))}
          {/* <Card
            title="The Clean Kilo"
            description="1 Gibb Street, Birmingham, B9 4BF"
            onPress={() => this.props.navigation.navigate("BusinessInfo")}
          />
          <Card
            title="Nature's Intention"
            description="2 High Street, Bromsgrove, B61 8HQ"
          />
          <Card
            title="Indigo Wholefoods"
            description="50-52 St Mary's Row, Birmingham, B13 8JG"
          /> */}
        </ScrollView>
        <View style={styles.container2}>
          <TabBar color="secondary" inactiveColor="black" activeColor="#669335">
            <TabItem onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name="person" />
              <Text style={{ color: "black", fontSize: 10 }}>Profile</Text>
            </TabItem>
            <TabItem
              active
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
    // alignItems: "center"
  },
  container2: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    height: "10%",
    borderTopColor: "grey",
    // borderTopStyle: "solid",
    borderTopWidth: 1
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
    marginLeft: "-20%",
    marginRight: "-20%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  cards: {
    height: "50%",
    width: "100%",
    paddingRight: 5
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
