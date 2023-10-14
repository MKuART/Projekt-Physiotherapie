import React, { useState, useEffect } from "react";

function FuncComponent() {
  const [count, setCount] = useState(0);
// useEffect (()=> {}, []), callbackfunction und ein Array
  useEffect(() => {
    console.log("useEffect");// if mounted, initiales mounten and by every state change
    document.title = `You clicked ${count} times`;
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 5000);
    return () => {
      clearInterval(interval);// componentWillUnmount
    };
  }, [count]);// is run how componentDidMount
  // if the Dependency Array has a State the the use is repeat(componentDidUpdate)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Lifecycle Demo</h1>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default FuncComponent;