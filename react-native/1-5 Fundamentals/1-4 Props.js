https://reactnative.dev/docs/intro-react

Props is short for “properties.” Props let you customize React components. For example, here you pass each <Cat> a different name for Cat to render:

  import React from 'react';
  import { Text, View } from 'react-native';

  function Cat(props) {
    return (
      <View>
        <Text>Hello, I am {props.name}!</Text>
      </View>
    );
  }

  export default function Cafe() {
    return (
      <View>
        <Cat name="Maru" />
        <Cat name="Jellylorum" />
        <Cat name="Spot" />
      </View>
    );
  }


Most of React Native’s Core Components can be customized with props, too. For example, when using Image, you pass it a prop named source to define what image it shows:

  import React from 'react';
  import { Text, View, Image } from 'react-native';

  export default function CatApp() {
    return (
      <View>
        <Image
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          style={{width: 200, height: 200}}
        />
        <Text>Hello, I am your cat!</Text>
      </View>
    );
  }