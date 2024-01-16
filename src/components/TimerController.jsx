import { useEffect, useState } from "react";
import { Button } from "./Button";

export const TimerController = ({ getTime }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const buttonClicked = useState({ start: false, stop: false });

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
      getTime(time);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    getTime(0);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center w-1/2 md:w-1/4 my-6">
      <Button name={"Start"} clickHandler={handleStart} />
      <Button name={"Stop"} clickHandler={handleStop} />
      <Button name={"Reset"} clickHandler={handleReset} />
    </div>
  );
};
