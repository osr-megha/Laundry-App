import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";


const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
    
    <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => navigation.navigate("Categories")}
  >
   {/* <Text style={styles.textStyle}>Categories</Text>*/}
    <Image 
    style={styles.iconStyle}
    source={{uri:"https://cdn-icons-png.flaticon.com/512/6736/6736258.png"}}
    />

    
  </TouchableOpacity>

  <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("PickUp")}
      >
        {/*<Text style={styles.textStyle}>Contact</Text>*/}

        <Image 
    style={styles.iconStyle}
    source={{uri:"https://cdn-icons-png.flaticon.com/512/3319/3319354.png"}}
    />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("OrderDetail")}
      >
        {/*<Text style={styles.textStyle}>Contact</Text>*/}

        <Image 
    style={styles.iconStyle}
    source={{uri:"https://cdn-icons-png.flaticon.com/512/3045/3045670.png"}}
    />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        {/*<Text style={styles.textStyle}>Contact</Text>*/}

        <Image 
    style={styles.iconStyle}
    source={{uri:"https://cdn-icons-png.flaticon.com/512/3095/3095583.png"}}
    />
      </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
      },
      textStyle: {
        textTransform: "uppercase",
      },
      iconStyle:{
        width:"100%",
        height:50,
        aspectRatio: 1,
      },
});

export default Menu;
