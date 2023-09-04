import { useState, useEffect } from "react";

export default function Timer() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  let interval: number | undefined;

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === " " && running) {
      setRunning(false);
    } else if (e.key === " " && !running) {
      setRunning(true);
      setTime(0);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [running]);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01); // Increment by 0.01 seconds (10 milliseconds)
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div className="Timer">
      <p>{time.toFixed(2)}</p>
    </div>
  );
}
