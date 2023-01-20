import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import ProductItem from "../component/ProductItem";
import products from "../data/products";
import Button from "../component/Button";
import PickUp from "./PickUp";
import { CartContent } from "../API/Context";
import serviceHeading from "../data/serviceHeading";

const Categories = ({ navigation }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

  const { cart, activeIndex, setActiveIndex, total, setTotal } = useContext(CartContent);

  // const [cart, setCart] = useState([]);
  // console.log(cart);

//   const [total, setTotal] = useState();

//   useEffect(() => {
//     setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
//   }, [cart]);

  return (
    <View style={styles.mainContainer}>
      {/**Service heading */}
      <View style={styles.serviceHeading}>
        {serviceHeading.map((d, index) => (
          <TouchableOpacity
            style={[
              styles.headingText,
              {
                backgroundColor: index === activeIndex ? "#e64cc4" : "pink",
              },
            ]}
            key={d.id}
            onPress={() => setActiveIndex(index)}
          >
            <Text>{d.heading}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {products.map((prod) => (
        <ProductItem prod={prod} key={prod.id} />
      ))}
      {/** 
      <FlatList 
    //   keyExtractor={({id})=>id}
      data ={products}
      renderItem={({item}) => <ProductItem item= {item} />}
      />*/}
      <View style={styles.cartContainer}>
        <View style={styles.leftCart}>
          <Image
            style={styles.productImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
            }}
          />
          <View style={styles.cartSection}>
            <Text>Total</Text>
            <Text>{cart.length}</Text>
          </View>
        </View>
        <View style={styles.rightCart}>
          <View style={styles.cartSection}>
            <Text>Cost</Text>
            <Text>Total ₹{total}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{marginTop:10, width:"100%", backgroundColor:"#e64cc4", padding:10, borderRadius:20, shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
      elevation: 5,}}>
        <Button
          text={"Confirm Order"}
          onPress={() => navigation.navigate(PickUp)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  serviceHeading: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 6,
  },
  headingText: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  
  cartContainer: {
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 5,
    backgroundColor: "#fff",
    // marginTop:5, 
    width:"100%",
    padding:5
  },
  leftCart: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  productImage: {
    marginRight: 15,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  rightCart: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Categories;
