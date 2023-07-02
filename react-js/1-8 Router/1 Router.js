https://www.javatpoint.com/react-router


Router
  Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications.

  About.js
  import React from 'react'  
  class About extends React.Component {  
    render() {  
      return <h1>About</h1>  
    }  
  }  
  export default About  

  Contact.js
  import React from 'react'  
  class Contact extends React.Component {  
    render() {  
      return <h1>Contact</h1>  
    }  
  }  
  export default Contact  

  App.js
  import React from 'react'  
  class App extends React.Component {  
    render() {  
      return (  
        <div>  
          <h1>Home</h1>  
        </div>  
      )  
    }  
  }  
  export default App  


  Index.js
  import React from 'react';  
  import ReactDOM from 'react-dom';  
  import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
  import './index.css';  
  import App from './App';  
  import About from './about'  
  import Contact from './contact'  
    
  const routing = (  
    <Router>  
      <div>  
        <h1>React Router Example</h1>  
        <Route path="/" component={App} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
      </div>  
    </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root'));
