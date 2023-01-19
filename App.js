import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Categories from "./src/screens/Categories";
import Contact from "./src/screens/Contact";
import PickUp from "./src/screens/PickUp";
import OrderDetail from "./src/screens/OrderDetail";
import{
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import{
  Nunito_600SemiBold,
  Nunito_700Bold
} from "@expo-google-fonts/nunito";

import AppLoading from "expo-app-loading"

import Context from "./src/API/Context"


export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded){
    <AppLoading />
  }

  return (
    <Context>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/**         <Stack.Screen name="Home" component={Home} />
         */}

         <Stack.Screen name="Home" options={{headerShown:false}}>
          {(props) => <Home {...props} channelName={"Laundry Partner"}/>}
         </Stack.Screen>
         <Stack.Screen 
         name="Categories" 
         component={Categories}
         options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold"
          },
          headerTitle:"Orders List",
          headerTitleAlign:"center"
         }}
         />
         <Stack.Screen 
         name="PickUp" 
         component={PickUp}
         options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold"
          },
          headerTitle:"Schedule a Pickup",
          headerTitleAlign:"center"
         }}
         />
         <Stack.Screen 
         name="OrderDetail" 
         component={OrderDetail}
         options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold"
          },
          headerTitle:"Order Details",
          headerTitleAlign:"center"
         }}
         />
         <Stack.Screen 
         name="Contact" 
         component={Contact}
         options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold"
          },
          headerTitle:"Contact Us",
          headerTitleAlign:"center"
         }} />

      </Stack.Navigator>
    </NavigationContainer>
    </Context>
  );
}
