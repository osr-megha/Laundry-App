import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Contact from "./src/screens/Contact";
import PickUp from "./src/screens/PickUp";
import OrderDetail from "./src/screens/OrderDetail";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";
import PlaceOrder from "./src/screens/PlaceOrder";
import Intro from "./src/screens/Intro";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";

import AppLoading from "expo-app-loading";

import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">

        <Stack.Screen name="Intro" options={{headerShown:false}}>
          {(props) => <Intro {...props} channelName={"Laundry Partner"}/>}
         </Stack.Screen>

          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />

          {/*<Stack.Navigator initialRouteName="Home"> **/}
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />

          <Stack.Screen
            name="PickUp"
            component={PickUp}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: "Nunito_600SemiBold",
              },
              headerTitle: "Schedule a Pickup",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="OrderDetail"
            component={OrderDetail}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: "Nunito_600SemiBold",
              },
              headerTitle: "Order Details",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Profile"
            // options={{ headerShown: false }}
            component={Profile}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: "Nunito_600SemiBold",
              },
              headerTitle: "Your Profile",
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="PlaceOrder"
            component={PlaceOrder}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: "Nunito_600SemiBold",
              },
              headerTitle: "Place Order",
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: "Nunito_600SemiBold",
              },
              headerTitle: "Contact Us",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
