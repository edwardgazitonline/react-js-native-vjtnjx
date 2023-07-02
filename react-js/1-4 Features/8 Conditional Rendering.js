Conditional Rendering
https://www.javatpoint.com/react-conditional-rendering

  In React, we can create multiple components which encapsulate behavior that we need. After that, we can render them depending on some conditions or the state of our application. 


  If
    function UserLoggin(props) {  
    return <h1>Welcome back!</h1>;  
    }  
    function GuestLoggin(props) {  
      return <h1>Please sign up.</h1>;  
    }  
    function SignUp(props) {  
      const isLoggedIn = props.isLoggedIn;  
      if (isLoggedIn) {  
        return <UserLogin />;  
      }  
      return <GuestLogin />;  
    }  
      
    ReactDOM.render(  
      <SignUp isLoggedIn={false} />,  
      document.getElementById('root')  
    );  
