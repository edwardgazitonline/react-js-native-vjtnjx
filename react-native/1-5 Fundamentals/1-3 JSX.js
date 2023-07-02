
JSX
React and React Native use JSX, a syntax that lets you write elements inside JavaScript like so: <Text>Hello, I am your cat!</Text>.

Here you are declaring a name for the cat, name, and embedding it with curly braces inside <Text>.

  import React from 'react';
  import { Text } from 'react-native';

  export default function Cat() {
    const name = "Maru";
    return (
      <Text>Hello, I am {name}!</Text>
    );
  }




Any JavaScript expression will work between curly braces, including function calls like {getFullName("Rum", Tum", "Tugger")}:

  import React from 'react';
  import { Text } from 'react-native';

  export default function Cat() {
    function getFullName(firstName, secondName, thirdName) {
      return firstName + " " + secondName + " " + thirdName;
    }

    return (
      <Text>
        Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
      </Text>
    );
  }
