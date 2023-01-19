import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity -1));
  };

  const onPlus = () => {
    setQuantity(quantity+1);
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>0</Text>
      <TouchableOpacity onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default QuantitySelector;
