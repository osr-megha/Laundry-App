import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from "react";
import { CartContent } from "../API/Context";

const ProductItem = ({prod}) => {

  const {cart, setCart} = useContext(CartContent);

  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 100) {
      setNum(num + 1);
      setCart([...cart, prod]);
    } else {
      alert("Maximum Limit Reached");
      setNum(100);
    }
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
      setCart(cart.filter(c=>c.id!==prod.id))
    } else {
      alert("Minimum Limit Reached");
      setNum(0);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/** Products */}
      <View style={styles.productContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.productImage}
            source={{
              uri: prod.image,
            }}
          />
          <View style={styles.productSection}>
            <View>
              <Text style={styles.productTitle}>{prod.title}</Text>
              <Text style={{ marginTop: 6, fontSize: 10 }}>
              ₹{prod.price}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
        <View style={styles.root}>
          <TouchableOpacity style={styles.button} onPress={incNum}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>
            {num}
          </Text>
          <TouchableOpacity style={styles.button} onPress={decNum}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
  },
  
  productContainer: {
    // marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  leftContainer: {
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
  productSection: {
    flexDirection: "row",
  },
  productTitle: {
    width: "100%",
  },
  picker: {
    margin: 15,
    border: "none",
    fontSize: 2,
    width: 2,
  },
  rightContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    padding: 5,
  },
  root: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#e3e3e3",
    width:100
  },
  button: {
    width:25,
    height:25,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#d1d1d1"
  },
  buttonText: {
    fontSize:18
  },
  quantity: {
    color:"#007eb9"
  },
});

export default ProductItem;
