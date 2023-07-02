https://www.javatpoint.com/react-keys

Keys
  A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.

  const stringLists = [ 'Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa' ];   
    
  const updatedLists = stringLists.map((strList)=>{   
      <li key={strList.id}> {strList} </li>;   
  });   

