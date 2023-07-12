import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(!authUser){setLoading(false);
      }
      if(authUser){
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, [])
  

  const login = () =>{
      signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        console.log(userCredential, "user credential");
        const user = userCredential.user;
        console.log("user detail", user);
      })
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
        padding: 10,
      }}
    >
    {
      loading ? (
        <View style={{
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"center",
          flex:1
        }}>
        <Text style={{marginRight:10}}>Loading</Text>
        <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            SignIn
          </Text>
          <Text style={{ marginTop: 8, fontSize: 15, fontWeight: "600" }}>
            Sign In to your account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 20,
              }}
            />
          </View>
          <Pressable
          onPress={login}
            style={{
              width: 200,
              backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
              Login
            </Text>
          </Pressable>

          <Text style={{ marginTop: 30, textAlign: "center" }}>
            Don't have an account?
          </Text>
          <Pressable
            style={{
              width: 100,
              // backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            <Text
            onPress={() => navigation.navigate("Register")} 
            style={{ fontSize: 18, color: "blue", textAlign: "center", fontWeight:"bold" }}>
              SignUp
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      )
    }
      
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
