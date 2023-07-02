https://www.javatpoint.com/react-higher-order-components

Higher Order Components HOC

  In React, HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. According to the official website, it is not the feature(part) in React API, but a pattern that emerges from React compositional nature. They are similar to JavaScript functions used for adding additional functionalities to the existing component.
  
  //Function Creation  
  function add (a, b) {  
    return a + b  
  }  
  function higherOrder(a, addReference) {  
    return addReference(a, 20)  
  }  
  //Function call  
  higherOrder(30, add) // 50  