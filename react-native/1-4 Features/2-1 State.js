/*
https://www.javatpoint.com/react-native-state

There are two types of data state and props in React Native which control the component. 
The component that uses the state is mutable. They can be changed later on if required. The props component is immutable, and it is fixed throughout the lifetime.

*/

import React, {Component} from 'react';  
import { Text, View } from 'react-native';  
  
export default class App extends Component {  
    state = {  
        myState: 'This is a text component, created using state data. It will change or updated on clicking it.'  
    }  
    updateState = () => this.setState({myState: 'The state is updated'})  
    render() {  
        return (  
            <View>  
                <Text onPress={this.updateState}> {this.state.myState} </Text>  
            </View>  
        );  
    }  
}  