Function Components and Class Components
https://reactnative.dev/docs/getting-started

Function Component
  import React from 'react';
  import { Text, View } from 'react-native';

  export default function HelloWorldApp() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }


Class Component
  import React, { Component } from 'react';
  import { Text, View } from 'react-native';

  export default class HelloWorldApp extends Component {
    render() {
      return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>Hello, world!</Text>
        </View>
      );
    }
  }
