https://www.javatpoint.com/react-fragments

Fragments
  In React, whenever you want to render something on the screen, you need to use a render method inside the component. This render method can return single elements or multiple elements. The render method will only render a single root node inside it at a time. However, if you want to return multiple elements, the render method will require a 'div' tag and put the entire content or elements inside it. This extra node to the DOM sometimes results in the wrong formatting of your HTML output and also not loved by the many developers.

  <React.Fragment>  
      <h2> child1 </h2>   
    <p> child2 </p>   
      .. ..... .... ...  
  </React.Fragment>  


