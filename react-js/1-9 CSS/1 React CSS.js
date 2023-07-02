https://www.javatpoint.com/react-css

Here, we are going to discuss mainly four ways to style React Components, which are given below:

  Inline Styling
  CSS Stylesheet
  CSS Module
  Styled Components

  1 Inline Styling
    import React from 'react';  
    import ReactDOM from 'react-dom';  
      
    class App extends React.Component {  
      render() {  
        return (  
          <div>  
          <h1 style={{color: "Green"}}>Hello JavaTpoint!</h1>  
          <p>Here, you can find all CS tutorials.</p>  
          </div>  
        );  
      }  
    }  
    export default App;  

    2 CSS Stylesheet
    App.css
      body {  
    background-color: #008080;  
    color: yellow;  
    padding: 40px;  
    font-family: Arial;  
    text-align: center;  
    }  

    App.js
    import React from 'react';  
    import ReactDOM from 'react-dom';  
    import './App.css';  
      
    class App extends React.Component {  
      render() {  
        return (  
          <div>  
          <h1>Hello JavaTpoint</h1>  
          <p>Here, you can find all CS tutorials.</p>  
          </div>  
        );  
      }  
    }  
    export default App;  


  3 CSS Module
  CSS Module is another way of adding styles to your application. It is a CSS file where all class names and animation names are scoped locally by default. It is available only for the component which imports it, means any styling you add can never be applied to other components without your permission, and you never need to worry about name conflicts. You can create CSS Module with the .module.css extension like a myStyles.module.css name.

  mystyle.module.CSS
    .mystyle {  
    background-color: #cdc0b0;  
    color: Red;  
    padding: 10px;  
    font-family: Arial;  
    text-align: center;  
  }  
    
  .parastyle{  
    color: Green;  
    font-family: Arial;  
    font-size: 35px;  
    text-align: center;  
  } 

  App.js
  import React from 'react';  
  import ReactDOM from 'react-dom';  
  import styles from './myStyles.module.css';   
    
  class App extends React.Component {  
    render() {  
      return (  
        <div>  
        <h1 className={styles.mystyle}>Hello JavaTpoint</h1>  
        <p className={styles.parastyle}>It provides great CS tutorials.</p>  
        </div>  
      );  
    }  
  }  
  export default App;   


4 Styled Components
  Styled-components is a library for React. It uses enhance CSS for styling React component systems in your application, which is written with a mixture of JavaScript and CSS.
  https://www.javatpoint.com/react-css
