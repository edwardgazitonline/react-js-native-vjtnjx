State
  While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!


  //Example 1: State with Function Components
  //useState is a Hook that lets you add state to function components.  
  import React, { useState } from "react";
  import { Button, Text, View } from "react-native";

  function Cat(props) {
    const [isHungry, setIsHungry] = useState(true);

    return (
      <View>
        <Text>
          I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        </Text>
        <Button
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        />
      </View>
    );
  }

  export default function Cafe() {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }

  //2 State with Class Components
  import React, { Component } from "react";
  import { Button, Text, View } from "react-native";

  export class Cat extends Component {
    state = { isHungry: true };

    render(props) {
      return (
        <View>
          <Text>
            I am {this.props.name}, and I am
            {this.state.isHungry ? " hungry" : " full"}!
          </Text>
          <Button
            onPress={() => {
              this.setState({ isHungry: false });
            }}
            disabled={!this.state.isHungry}
            title={
              this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
            }
          />
        </View>
      );
    }
  }

  export default class Cafe extends Component {
    render() {
      return (
        <>
          <Cat name="Munkustrap" />
          <Cat name="Spot" />
        </>
      );
    }
  }
