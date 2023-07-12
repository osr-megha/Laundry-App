import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const Intro = (props) => {
  const navigation = useNavigation();

  const description =
    "Our laundry app offers all laundry services including drycleaning, ironing.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/laundarymachine.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>

        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {props.channelName}
        </Text>

        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={{marginBottom:50, flexDirection:"row", justifyContent:"space-between"}}>
      <Pressable
          onPress={()=>navigation.navigate("Login")}
            style={{
              width: 150,
              backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
              Sign In
            </Text>
          </Pressable>

          <Pressable
          onPress={()=>navigation.navigate("Contact")}
            style={{
              width: 150,
              backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
              Contact Us
            </Text>
          </Pressable>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default Intro;
