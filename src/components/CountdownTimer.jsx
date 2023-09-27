import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hours = 10, minutes = 20, seconds = 5 }) => {

  const timerStyle = 'text-coolblue shadow-md rounded-lg md:text-3xl p-2 px-5 text-center'

  // code for the functionality  of the timer
  const [time, setTime] = useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = time;

  useEffect(() => {
    let countdownInterval = null;

    if (remainingHours === 0 && remainingMinutes === 0 && remainingSeconds === 0) {
      clearInterval(countdownInterval);
    } else {
      countdownInterval = setInterval(() => {
        if (remainingSeconds > 0) {
          setTime(prevTime => ({
            ...prevTime,
            seconds: prevTime.seconds - 1
          }));
        } else {
          if (remainingMinutes > 0) {
            setTime(prevTime => ({
              ...prevTime,
              minutes: prevTime.minutes - 1,
              seconds: 59
            }));
          } else {
            if (remainingHours > 0) {
              setTime(prevTime => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59
              }));
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [remainingHours, remainingMinutes, remainingSeconds]);

  const formatTime = value => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className='flex justify-start'>
      <div className={timerStyle}>
        <span> {formatTime(remainingHours)} </span>
        <span className='block text-sm'>Hours </span>
      </div>

      <div className={timerStyle}>
        <span> {formatTime(remainingMinutes)} </span>
        <span className='block text-sm'>Minutes</span> 
      </div>

      <div className={timerStyle}>
        <span> {formatTime(remainingSeconds)} </span> 
        <span className='block text-sm'>Seconds</span> 
      </div>
    </div>
  );
};

export default CountdownTimer;
