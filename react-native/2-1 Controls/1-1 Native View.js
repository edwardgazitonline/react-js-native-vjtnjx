/*
/* 
React Native View
https://www.javatpoint.com/react-native-view

  The View is the fundamental component of React Native for building a user interface. It is a container that supports layout with flexbox, style, touch handling, and accessibility controls. It maps directly to the native view similar to whatever platform on React Native app is running on. It displays the components regardless with UIView, <div>, android.view, etc.
*/



import React, { Component } from 'react'  
import {StyleSheet,View, Text} from 'react-native'  
  
export default class SwitchExample extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={{backgroundColor: 'blue', flex: 0.3}} />  
                <View style={{backgroundColor: 'red', flex: 0.5}} />  
                <Text style={{fontSize: 18}}>View Example</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         flexDirection: 'row',  
         height: 100,  
         width: "80%",  
         backgroundColor:"#5ead97"  
     }  
})  