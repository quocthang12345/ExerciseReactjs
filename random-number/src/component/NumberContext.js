import React, { useState } from "react";

export const NumberContext = React.createContext();

function NumberProvider(props) {
  const [ Number, setNumber ] = useState(5);

  function UpdateNumber() {
    setNumber(() => Math.random());
  }

  return (
    <div>
      <NumberContext.Provider
        value={{ number: Number, updateNumber: UpdateNumber }}
      >
        {props.children}
      </NumberContext.Provider>
    </div>
  );
}

export default NumberProvider;
