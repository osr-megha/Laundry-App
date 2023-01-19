import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Button from "../component/Button";
import { CartContent } from "../API/Context";
import UpdateDate from "../component/UpdateDate";
import OrderDetail from "./OrderDetail";

import { WebView } from 'react-native-webview';

const PickUp = ({ navigation }) => {
  const { total, cart,tax, setTax, subTotal, setSubTotal,amt, setAmt} = useContext(CartContent);
  // const [tax, setTax] = useState(10);
  // const [subTotal, setSubTotal] = useState();
  // const [amt, setAmt] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Pending");

  const handleResponse = (data) => {
    if (data.title === "success") {
         setShowModal(false);
          setStatus("Complete");
    } else if (data.title === "cancel") {
      setShowModal(false);
      setStatus("Cancelled!!");
    } else {
        return;
    }
};

  // const pay= () => {
  //   if(amt != ""){
  //     props.navigation.navigate("PaypalPayment", {'amt':amt})
  //   }
  // }

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + Number(curr.price), tax));
  }, [cart]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.title}>Price Details</Text>
        <View style={styles.details}>
          <View>
            <Text>Subtotal</Text>
            <Text>Tax</Text>
            <Text>Total</Text>
          </View>
          <View>
            <Text>₹{total}</Text>
            <Text>₹{tax}</Text>
            <Text>₹{subTotal}</Text>
          </View>
        </View>
      </View>
      {/**Date & Time Container */}
      <View style={styles.dateContainer}>
        <Text style={[styles.title, {margin:5}]}>Schedule Date</Text>
        <View style={styles.timeLines}>
          <View style={styles.pickUpDetails}>
            <Text style={styles.timeText}>Pick Up time</Text>

              <View style={styles.timeInput}>
            <Image 
            style={styles.iconImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1581/1581943.png",
              }}
              />
            <UpdateDate /> 
            </View>

          </View>
          <View style={styles.deliveryDetails}>
            <Text style={styles.timeText}>Delivery time</Text>

            <View style={styles.timeInput}>
            <Image 
            style={styles.iconImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1581/1581943.png",
              }}
              />
              <UpdateDate />
          </View>
          </View>
        </View>
      </View>

      {/** Payment Methods Container */}
      <View style={styles.paymentContainer}>
        <Text style={[styles.title, {margin:10}]}>Payment Method</Text>
        
        <View style={styles.iconContainer}>
        <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            >
            <WebView 
            source={{ uri:"http://192.168.0.147:3000/" }}  // entering computer IP address
            onNavigationStateChange={(data) => handleResponse(data)}
            injectedJavaScript={`document.f1.submit()`}
            />
            </Modal>
          <TouchableOpacity style={styles.paymentLine} onPress={()=>setShowModal(true)}>
            <View>
              <Text>Pay via Paypal</Text>
            </View>
            <View>
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
              }}
            />
            </View> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentLine}>
            <View>
              <Text>Pay via Visa/Master Card</Text>
            </View>
            <View>
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
              }}
            />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentLine}>
            <View>
              <Text>Cash On Delivery</Text>
            </View>
            <View>
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/726/726455.png",
              }}
            />
            </View>
            </TouchableOpacity>
        </View>
      </View>

      {/** Address Container */}
      <View>
        <Text style={[styles.title, {margin:10}]}>Adress</Text>
        <View style={styles.addressDetail}>
          <View style={styles.addressContainer}>
            <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/512/1432/1432883.png"}}
            style={styles.iconImage}
            />
            <View>

              <Text style={{fontSize:18}}>Pick Up Address</Text>
              <Text>C-1, ABC Colony, XYZ Nagar, New Delhi</Text>
            </View>
          </View>
          <View style={styles.addressContainer}>
            <Image 
            style={styles.iconImage}
            source={{uri:"https://cdn-icons-png.flaticon.com/512/1001/1001022.png"}}
            />
            <View>
              <Text style={{fontSize:18}}>Delivery Address</Text>
              <Text>C-1, ABC Colony, XYZ Nagar, New Delhi</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{marginTop:5, width:"100%", backgroundColor:"#e64cc4", padding:10, borderRadius:20, shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
      elevation: 5,}}>
        <Button
          text={"Confirm Order"}
          onPress={() => navigation.navigate(OrderDetail)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  title: {
    alignItems: "flex-start",
    fontSize: 18,
    margin:5
  },
  details: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor:"#e4ede6"
  },
  textDetails: {
    borderWidth: 1,
  },
  timeLines:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: "#fff",
    
  },
  pickUpDetails: {
    borderWidth: 2,
    margin:5,
    width:190,
    borderColor:"#e4ede6"
  },
  timeText:{
    alignSelf:"center",
    margin:5
  },
  timeInput:{
    flexDirection:"row",
    marginBottom:8,
    marginLeft:5,
  },
  deliveryDetails: {
    borderWidth: 2,
    margin:5,
    width:190,
    borderColor:"#e4ede6"
  },
  iconImage: {
    marginRight: 15,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  addressDetail: {
    margin: 5,
    justifyContent: "space-between",
    backgroundColor: "#ebebeb",
  },
  paymentLine:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderColor:"#e4ede6",
    borderWidth:1,
    backgroundColor:"#fff",
    padding:5
  },

  addressContainer:{
    flexDirection:"row",
    backgroundColor:"#fff",
    borderWidth:0.5,
    padding:5,
    borderColor:"#e4ede6",
    margin:2
  },
  
});

export default PickUp;
