  // MyComponent.jsx
  import React from 'react';

  function MyComponent(props) {
    return (
      <div>
        <h1>Hello from MyComponent!</h1>
        <p>{props.message}</p>
      </div>
    );
  }

  export default MyComponent;