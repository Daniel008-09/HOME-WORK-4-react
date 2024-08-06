import React, { useEffect, useState } from "react";

export default function StopWath() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => 
          prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(timer);
    }
    return()=>{clearInterval(timer)}



  },[running]
);

const HandleStart = ()=>{setRunning(true)}

const HandleReset = ()=>{
    setRunning(false)
     setTime(0)
}

const HandleStop = ()=>{
    setRunning(false) 
    setResult((prevResult )=>[...prevResult, time])

}




  return <div>
<h1>секундомер</h1>
<h2>{time} сек</h2>
<button onClick={()=>{
HandleStart()
}}>start</button>

<button onClick={()=>{
    HandleStop()
}}>stop</button>

<button onClick={()=>{
    HandleReset()
}}>reset</button>

<ul>
    {result.map((result,index) =>(
    <li key={index}>{result}сек</li>
    ))}
</ul>

  </div>;
}


