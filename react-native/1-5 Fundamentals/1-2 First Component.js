Component
https://reactnative.dev/docs/intro-react


  1 Function Component

  import React from 'react';
  import { Text } from 'react-native';

  export default function Cat() {
    return (
      <Text>Hello, I am your cat!</Text>
    );
  }


  2 Class Component
  import React, { Component } from 'react';
  import { Text } from 'react-native';

  export default class Cat extends Component {
    render() {
      return (
        <Text>Hello, I am your cat!</Text>
      );
    }
  }


Custom Components
  For example, you can nest Text and TextInput inside a View below, and React Native will render them together:

  import React from 'react';
  import { Text, TextInput, View } from 'react-native';

  export default function Cat() {
    return (
      <View>
        <Text>Hello, I am...</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="Name me!"
        />
      </View>
    );
  }



You can render this component multiple times and multiple places without repeating your code by using <Cat>:
  import React from 'react';
  import { Text, TextInput, View } from 'react-native';

  function Cat() {
    return (
      <View>
        <Text>I am a also cat!</Text>
      </View>
    );
  }

  export default function Cafe() {
    return (
      <View>
        <Text>Welcome!</Text>
        <Cat />
        <Cat />
        <Cat />
      </View>
    );
  }  


Any component that renders other components is a parent component. Here, Cafe is the parent component and each Cat is a child component.

You can put as many cats in your cafe as you like. Each <Cat> renders a unique element—which you can customize with props.

