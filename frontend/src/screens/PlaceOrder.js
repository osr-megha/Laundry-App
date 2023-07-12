import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceOrder = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <LottieView
        source={require("../../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Order has been placed successfully
      </Text>

      <LottieView
        source={require("../../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600", margin: 10 }}>
          More Laundry
        </Text>
        <Pressable
          style={{
            width: 250,
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 20,
          }}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={{ fontSize: 17, fontWeight: "600", margin: 10 }}>
            Continue Here
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({});
