/*
React Native AsyncStorage is a simple, unencrypted, asynchronous, persistent, storage system which stores the data globally in the app. It store data in the form of a key-value pair.
https://www.javatpoint.com/react-native-asyncstorage
https://www.javatpoint.com/react-native-asyncstorage-methods
*/
AsyncStorage.setItem('key', 'value');  



import React, {Component} from 'react';  
import {Platform, StyleSheet, Text,  
  View,TouchableOpacity, AsyncStorage,  
} from 'react-native';  
  
export default class App extends Component<Props> {  
  saveData(){  
    let name = "Michal";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }  
  render() {  
    return (  
      <View style={styles.container}>  
        <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
});  