https://www.javatpoint.com/react-props

Props
  Props stand for "Properties." They are read-only components.
   It gives a way to pass data from one component to other components. It is similar to function arguments.
   Props are immutable so we cannot modify the props from inside the component. 

   Example 1

   Main.js
   import React from 'react';  
   import ReactDOM from 'react-dom';  
   import App from './App.js';  
      
   ReactDOM.render(<App name = "JavaTpoint!!" />, document.getElementById('app'));  

   App.js
   import React, { Component } from 'react';  
  class App extends React.Component {  
    render() {     
        return (  
            <div>  
              <h1> Welcome to { this.props.name } </h1>    
              <p> <h4> Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4> </p>          
            </div>  
        );  
    }  
  }  
  export default App;  



Default Props
  It is not necessary to always add props in the reactDom.render() element. You can also set default props directly on the component constructor.

  Main.js
  import React from 'react';  
  import ReactDOM from 'react-dom';  
  import App from './App.js';  
    
  ReactDOM.render(<App/>, document.getElementById('app'));  

  App.js
  import React, { Component } from 'react';  
  class App extends React.Component {  
    render() {     
        return (  
            <div>  
                <h1>Default Props Example</h1>  
              <h3>Welcome to {this.props.name}</h3>   
              <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>          
            </div>  
          );  
      }  
  }  
  App.defaultProps = {  
    name: "JavaTpoint"  
  }  
  export default App;  



