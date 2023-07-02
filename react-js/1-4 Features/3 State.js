State
https://www.javatpoint.com/react-state

  The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time.

  A component with the state is known as stateful components. 

   It can be set by using the setState() method

  Example: To define a state, you have to first declare a default set of values for defining the component's initial state. 
   
  import React, { Component } from 'react';  
  class App extends React.Component {  
  constructor() {  
        super();        
        this.state = { displayBio: true };  
        }  
        render() {  
            const bio = this.state.displayBio ? (  
                <div>  
                    <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
              </div>  
                ) : null;  
                return (  
                    <div>  
                        <h1> Welcome to JavaTpoint!! </h1>  
                        { bio }   
                    </div>  
                );  
      }  
  }  
  export default App;     



