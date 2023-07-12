import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    "https://media.istockphoto.com/id/1208269122/vector/cartoon-female-laundry-worker-with-washer-dryer.jpg?s=612x612&w=0&k=20&c=LOankz-XY7lJGOLyUGh8fVGRYEQbUJiXm9llPFefsz8=",
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
            width:"94%"
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
