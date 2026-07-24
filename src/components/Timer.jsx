import { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timerId = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer-page">
      <div className="timer-container">
        <h1 className="timer-text">{count} 秒経過</h1>

        <button className="stop-button" onClick={stopTimer}>
          ストップ
        </button>
      </div>
    </div>
  );
};

export default Timer;