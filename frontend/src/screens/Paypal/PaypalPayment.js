import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const {width, height} = Dimensions.get('screen');

const PaypalPayment = (props) => {

    const route = useRoute();

    const stateChng = (navState) =>{
        console.log(navState);
        const {url, title} = navState;
        if(title == "PayPal success"){
          console.log('url', url);
          let splitUrl = url.split("?");
          console.log(splitUrl, "splitUrl");
          let splitOtherHalf = splitUrl[1].split("&");
          console.log(splitOtherHalf, "splitOtherHalf");
          let paymentId = splitOtherHalf[0].replace("paymentID=", "");
          let token = splitOtherHalf[1].replace("token=", "");
          let PayerId = splitOtherHalf[2].replace("PayerID=", "");
          // props.navigation.navigate('Success', (payId:paymentId, token:token, payerId:PayerId));
        }
    }

  return (
    <WebView 
    startInLoadingState={true}
    onNavigationStateChange={stateChng}
    renderLoading={()=> <Loading />}
    source={{uri:"http://localhost:3000/paypal/"+route.params.amt}}
    />
  )
}

const styles = StyleSheet.create({})
export default PaypalPayment

const Loading = () =>{
    return(
        <View style={{height:height, width:width,justifyContent:"center", alignItems:"center"}}>
        <Image 
        source={{
            uri: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
          }}
          style={{width:250, height:100, resizeMode:"contain"}}
        />
        </View>
    )
}