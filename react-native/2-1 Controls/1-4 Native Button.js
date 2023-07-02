/*
https://www.javatpoint.com/react-native-button

React Native Button is a basic component that works by clicking on it. It imports the Button class of react-native.

https://aboutreact.com/online-emulator/

*/

import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
  
export default class ButtonBasics extends Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <View>  
                <Button onPress={this.onPressButton}  title="Click"  />  
            </View>  
        );  
    }  
}  
