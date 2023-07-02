/*
https://www.javatpoint.com/react-native-props


The properties of React Native components are simply pronounced as props. In React Native, most of the components can be customized at the time of their creation with different parameters. These parameters are known as props. They are immutable, and they cannot be changed.

*/

  import React, { Component } from 'react';  
  import {  
    Platform,  
    StyleSheet,  
    Image,  
    Text,  
    View  
  } from 'react-native';  
    
    
  export default class App extends Component<{}> {  
    render() {  
      let imagePath = { uri: 'https://facebook.github.io/react-native/img/header_logo.png'};  
      return (  
          <View style={styles.container}>  
            <Text style={styles.welcome}>Welcome to React Native!</Text>  
            <Image source={imagePath} style={{width: 250, height: 250}} />  
          </View>  
      );  
    }  
  }  
    
  const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      backgroundColor: '#a7a6a9',  
    },  
    welcome: {  
      fontSize: 30,  
      textAlign: 'center',  
      margin: 20,  
    }  
  });  