import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#e64cc4",
        margin:10,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        // borderWidth:1,
        borderColor:"#a3468f",    
    },
    text:{
        fontSize:20,
        color:"#FFFFFF",
        fontWeight:"700"
        
    }
});

export default Button

