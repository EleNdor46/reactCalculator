import React from "react";

const Calculate = (props) => {
    const {onPlus,num,onMinus,onMultiply,onDived,setNum2} = props
  return (
    <>
      <input
      value={num}
        type="number"
        placeholder="1 number"
        className="m-2 num-1"
        onChange={(e) => props.setNum(e.target.value)}
      />
      <input type="number" placeholder="2 number" className="m-2 num-2" onChange={(e)=>setNum2(e.target.value)} />
      <button onClick={()=>onPlus()} className="btn btn-primary m-2">прибавить</button>
      <button onClick={()=>onMinus()}className="btn btn-danger m-2">вычесть</button>
      <button onClick={()=>onMultiply()}className="btn btn-success m-2">умножить</button>
      <button onClick={()=>onDived()}className="btn btn-warning m-2">делить</button>
      <h2>={num}</h2>
    </>
  );
};
export default Calculate;
