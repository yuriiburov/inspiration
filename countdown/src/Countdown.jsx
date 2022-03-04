import React, {useEffect, useState} from 'react';
import * as dateUtils from "./date-utils";

const Countdown = () => {
  const [count, setCount] = useState(Number(new Date()));

  useEffect(() => {
    let date = Number(new Date());
    const timeInterval = setInterval(() => {
      setCount(date -= 1000)
    }, 1000);
    return () => clearInterval(timeInterval)
  }, []);

  return (
    <div className="time">
      <span className="time__year date-data">{new Date(count).getFullYear()}</span>
      <span className="time__month date-data">{dateUtils.months[new Date(count).getMonth()]}</span>
      <span className="time__day date-data">{dateUtils.days[new Date(count).getDate()]}</span>
      <span className="time__hour date-data">{dateUtils.isDouble(new Date(count).getHours())}</span>
      <span>:</span>
      <span className="time__minutes date-data">{dateUtils.isDouble(new Date(count).getMinutes())}</span>
      <span>:</span>
      <span className="time__seconds date-data">{dateUtils.isDouble(new Date(count).getSeconds())}</span>
    </div>
  );
};

export default Countdown;
