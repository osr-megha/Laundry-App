import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../component/Carousel";
import Services from "../component/Services";
import DressItem from "../component/DressItem";
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from "../../ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { collection,getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log("cart array", cart);

  const [items, setItems] = useState([]);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev)=> curr + prev, 0);

  const navigation = useNavigation();

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "we are loading your location"
  );

  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log("Coords ===> ", coords);
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(response);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state)=>state.product.product);
  // console.log("product array ==>", product);

  const dispatch = useDispatch();

  useEffect(() => {
    if(product.length > 0)return;

    const fetchProducts = async() =>{
      // services.map((service) => dispatch(getProducts(service)));
     const colRef = collection(db,"types");
     const docsSnap = await getDocs(colRef);
     docsSnap.forEach((doc)=>{
      items.push(doc.data())
     });
     items?.map((service)=> dispatch(getProducts(service)))
    };
    
    fetchProducts();
  }, []);
  
  // console.log("products==>", product);

  const services = [
    {
      id: "1",
      name: "T-Shirt",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      price: 12,
      quantity: 0,
    },
    {
      id: "2",
      name: "Dresses",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      price: 15,
      quantity: 0,
    },
    {
      id: "3",
      name: "Sleeveless",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      price: 10,
      quantity: 0,
    },
    {
      id: "4",
      name: "Sweater",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      price: 25,
      quantity: 0,
    },
    {
      id: "5",
      name: "Shorts",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      price: 15,
      quantity: 0,
    },
    {
      id: "6",
      name: "Suit",
      image: "https://cdn-icons-png.flaticon.com/128/4150/4150582.png",
      price: 50,
      quantity: 0,
    },
    {
      id: "7",
      name: "Jeans",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      price: 30,
      quantity: 0,
    },
    
  ];

  return (
    <>
    <ScrollView style={{marginTop:20, paddingTop:10, backgroundColor:"#F0F0F0", flex:1}}>
      {/** Location & Profile */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable 
        onPress={()=> navigation.navigate("Profile")}
        style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{
              uri: "https://images.freeimages.com/images/large-previews/a2a/toy-soldier-1412148.jpg",
            }}
          />
        </Pressable>
      </View>

      {/**Serach bar */}

      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          borderWidth:0.8,
          borderColor:"#C0C0C0",
          borderRadius:7
        }}
      >
        <TextInput placeholder="search for items or more" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>
      {/**Image Carousel */}
      <Carousel />
      {/**Services Component */}
      <Services />

      {/**Render all the services */}
      {product.map((item, index) => (
        <DressItem item={item} key={index} />
      ))}
     

    </ScrollView>

    {
      total === 0 ? (
        null
      ) : (
        <Pressable style={{ backgroundColor:"#088F8F", padding:10,marginBottom:40, margin:15, borderRadius:7, flexDirection:"row", alignItems:"center",justifyContent:"space-between" }}>
        <View>
        <Text style={{fontSize:14, fontWeight:"500", color:"white"}}>{cart.length} item | ₹ {total}</Text>
        <Text style={{fontSize:12, fontWeight:"400", color:"white", marginVertical:6}}>extra charges might apply</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("PickUp")}>
        <Text style={{fontSize:17, fontWeight:"600", color:"white"}}>Proceed to PickUp</Text>
        </Pressable>
        
        </Pressable>
      )
    }

    
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
