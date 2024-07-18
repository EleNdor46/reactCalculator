import React, { useState } from "react";
import History from "./history";
import Calculate from "./calculater";
import propsForHistory from "./historyScript";
import { arrProps } from "./historyScript";
const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [arrayProps, setArrProps] = useState(arrProps);

  const handlePlus = () => {
    const numm = +num + +num2;
    propsForHistory(num, num2, "+", numm);
    return setNum(numm);
  };
  const handleMinus = () => {
    const numm = +num - +num2;
    propsForHistory(num, num2, "-", numm);
    return setNum(numm);
  };
  const handleMultiply = () => {
    const numm = +num * +num2;
    propsForHistory(num, num2, "*", numm);
    return setNum(numm);
  };
  const handleDived = () => {
    const numm = +num / +num2;
    propsForHistory(num, num2, "/", numm);
    return setNum(numm);
  };
  return (
    <div className="d-flex">
      <div className="w-50 h-100 d-flex flex-column justify-content-center  ">
        <Calculate
          onPlus={handlePlus}
          setNum={setNum}
          num={num}
          onMinus={handleMinus}
          onMultiply={handleMultiply}
          onDived={handleDived}
          num2={num2}
          setNum2={setNum2}
        />
      </div>
      <div className="w-50">
        <History arrayProps={arrayProps} />
      </div>
    </div>
  );
};
export default App;
