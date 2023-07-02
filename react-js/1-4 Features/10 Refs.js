https://www.javatpoint.com/react-refs

Refs

  Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements.

    class MyComponent extends React.Component {  
    constructor(props) {  
      super(props);  
      this.callRef = React.createRef();  
    }  
    render() {  
      return <div ref={this.callRef} />;  
    }  
   }  



