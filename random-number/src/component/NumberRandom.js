import { useContext } from "react";
import { NumberContext } from "./NumberContext";
function NumberRandom() {
    console.log(NumberContext);
  const numberContext = useContext(NumberContext);
  console.log(numberContext);
  return (
    <div>
      <p>{numberContext.number}</p>
      <button onClick={numberContext.updateNumber} width={50} height={50}></button>
    </div>
  );
}

export default NumberRandom;
