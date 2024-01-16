import { useState } from "react";
import { TimerController } from "../components";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);

  const getTime = (time) => {
    setHour(Math.floor(time / 360000));
    setMinute(Math.floor((time % 360000) / 6000));
    setSecond(Math.floor((time % 6000) / 100));
    setMiliSecond(time % 100);
  };

  return (
    <div className="bg-orange-400 text-white min-h-screen flex flex-col justify-center items-center w-screen">
      <div className="text-3xl md:text-5xl flex flex-col items-center w-auto">
        <div className="my-6">STOPWATCH</div>
        <div className="my-6">REACT STOPWATCH</div>
      </div>
      <div className="text-6xl my-6">
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}:
        {miliSecond.toString().padStart(2, "0")}
      </div>
      <TimerController getTime={getTime} />
    </div>
  );
};

export default Timer;
