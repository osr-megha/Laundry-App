import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/free-vector/laundry-dry-cleaning-concept-illustration_114360-7441.jpg?size=626&ext=jpg&ga=GA1.1.1580817499.1688028105&semt=sph",
    "https://img.freepik.com/premium-vector/happy-cute-kid-laundry-with-washing-machine_97632-3786.jpg?w=740",
    "https://img.freepik.com/free-vector/laundry-room-with-clean-dirty-clothes-equipment-furniture-bathroom-with-stuff-washing-machine-basket-with-dirty-stained-linen-shelf-towels-detergents-cartoon-illustration_107791-5925.jpg?w=740&t=st=1689240824~exp=1689241424~hmac=7d0271760ff707823d95cc21f846bc5c0dc8809538ef2c9bae4a16ef0a30f807",
    // "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    // "https://media.istockphoto.com/id/1208269122/vector/cartoon-female-laundry-worker-with-washer-dryer.jpg?s=612x612&w=0&k=20&c=LOankz-XY7lJGOLyUGh8fVGRYEQbUJiXm9llPFefsz8=",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleloop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"98%"
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
