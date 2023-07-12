import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const image =
    "https://images.unsplash.com/photo-1610305401607-8745a10c75dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
  const navigation = useNavigation();

  const user = auth.currentUser;

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => console.log(err, "Error"));
  };

  return (
    <View
      style={{
        flex: 1,
        // margin: 10,
        // padding: 20,
        justifyContent: "space-evenly",
        position: "relative",
        // backgroundColor:"orange"
      }}
    >
      <Image
        source={require("../../assets/clothes.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          resizeMode: "stretch",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.3,
        }}
      />

      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 20, color: "#344055", textTransform: "uppercase" }}
        >
          Welcome
        </Text>
        <Pressable>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              color: "#4c5dab",
            }}
          >
            {user.email}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          padding: 10,
          width:300,
          height:100,
          
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", marginRight:10 }}>
          How can we help you today?
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Contact")}
          style={{
            // backgroundColor: "#CCCCFF",
            padding: 5,
            
            // borderRadius: 7,
          }}
        >
          <Text style={[
            styles.textStyle,
            {display: showText ? 'none' : 'flex'}
          ]}>Contact Us</Text>
        </Pressable>
      </View>

      <View style={{ margin: 10, padding: 10 }}>
        <Pressable
          onPress={signOutUser}
          style={{
            backgroundColor: "#93C572",
            padding: 5,
            borderRadius: 7,
            alignItems: "center",
          }}
        >
          <Text style={{fontWeight:"bold", fontSize:18}}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4c5dab",
    textAlign: "center",
    textDecorationLine: "underline",
    
  },
});
