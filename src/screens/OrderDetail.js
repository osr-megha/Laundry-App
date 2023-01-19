import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import Home from "./Home";
import Button from "../component/Button";
import { CartContent } from "../API/Context";

const OrderDetail = ({ navigation }) => {
  const { total, cart, tax, setTax, subTotal, setSubTotal, amt, setAmt } =
    useContext(CartContent);

  return (
    <View style={styles.mainContainer}>
      {/**1st section */}
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2875/2875878.png",
          }}
        />
        <Text style={{ marginTop: 5, fontWeight: "bold", lineHeight: 20 }}>
          Thank You for Choosing Us!!
        </Text>
        <Text style={{ marginTop: 5, lineHeight: 15, color: "#929c94" }}>
          Your Pick Up has been confirmed
        </Text>
      </View>

      {/**2nd section */}
      {/** Ordered Status - to come after payment success */}
      <View style={{ borderWidth: 0.5, margin: 5, borderRadius: 20 }}>
        <View style={styles.orderDetails}>
          <Text style={{ fontWeight: "bold" }}>
            Order #123
            <Text style={{ fontSize: 12, color: "#929c94" }}>(2bags) </Text>
          </Text>
          <Text>Pick Up Time</Text>
          <Text>Delivery Time</Text>
        </View>

        {/** Ordered Items List & their Category */}
        <View style={styles.orderItems}>
          <Text style={styles.selectedCategory}>Wash & Fold</Text>
          <View>
            <View style={styles.itemLines}>
              <Text>
                2 * Tshirt
                <Text style={{ fontSize: 12, color: "#929c94" }}>(Men) </Text>
              </Text>
            </View>
            <View style={styles.itemLines}>
              <Text>
                3 * Jeans
                <Text style={{ fontSize: 12, color: "#929c94" }}>(Men) </Text>
              </Text>
            </View>
          </View>
          <Text style={styles.selectedCategory}>Wash & Iron</Text>
          <View style={styles.itemLines}>
            <Text>
              2 * Tshirt
              <Text style={{ fontSize: 12, color: "#929c94" }}>(Men) </Text>
            </Text>
          </View>
          <View style={styles.itemLines}>
            <Text>
              3 * Jeans
              <Text style={{ fontSize: 12, color: "#929c94" }}>(Men) </Text>
            </Text>
          </View>
        </View>
        {/** Invoice details */}

        <View style={{ margin: 10, borderTopWidth: 0.5, paddingTop: 5 }}>
          <View style={styles.priceContainer}>
            <View style={styles.details}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Text>Subtotal</Text>
                <Text>₹{total}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Tax</Text>
                <Text>₹{tax}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderTopWidth: 0.5,
                  paddingTop: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>Total</Text>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  ₹{subTotal}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/**Order Status */}
      <View style={styles.orderStatus}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginBottom:15 }}
          >
            <Image
              style={{
                marginRight: 15,
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2066/2066664.png",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Order Status
            </Text>
          </View>
          <TouchableOpacity>
          <Text style={{ fontSize: 12, color: "#e64cc4",cursor:"pointer" }}>View Details</Text>
          </TouchableOpacity>
          </View>
        <View style={{ flexDirection: "row", alignItems:"center"}}>
          <View style={styles.dot}></View>
          <View style={{justifyContent:"center",padding:5}}>
          <Text style={{fontWeight:"bold"}}>Delivery Details</Text>
          <Text style={{ fontSize: 12, color: "#929c94", justifyContent:"space-between",}}>
           PickUp Time      Delivery Time
          </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 5,
          width: "100%",
          // backgroundColor: "#fff",
          padding: 10,
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: "#e64cc4",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Button
          text={"Schedule a Laundry"}
          onPress={() => navigation.navigate(Home)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  headerImage: {
    height: undefined,
    width: "20%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 20,
  },
  orderDetails: {
    margin: 10,
    // padding:5,
    borderBottomWidth: 0.5,
    marginBottom: 5,
  },
  orderItems: {
    marginLeft: 10,
  },
  selectedCategory: {
    alignItems: "flex-start",
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 5,
    padding: 5,
    fontWeight: "bold",
  },
  title: {
    alignItems: "flex-start",
    fontSize: 18,
    margin: 5,
  },
  orderStatus: {
    margin: 5,
    padding: 10,
    borderWidth: 0.5,
    marginBottom: 5,
    borderRadius: 20,
  },
  dot:{
    width: 15,
    height: 15,
    borderWidth: 1,
    backgroundColor: "#35662b",
    borderRadius: 50,
    marginRight: 15,
    shadowColor: "#1c660d",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
});

export default OrderDetail;
