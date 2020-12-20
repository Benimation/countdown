import { useState, useEffect } from 'react';
import './App.scss';
import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from 'date-fns';
import clamp from 'clamp';

const countDownDate = parseISO('2020-12-21T11:00:00+01:00');

function App() {
  const [now, setNow] = useState(new Date());
  
  const days = clamp(
    differenceInDays(countDownDate, now),
    0, Infinity
   );
  const hours = clamp(
    differenceInHours(countDownDate, now) - Math.floor(days * 24),
    0, Infinity
   );
  const minutes = clamp(
    differenceInMinutes(countDownDate, now) - Math.floor(days * 24 * 60)  - Math.floor(hours * 60),
    0, Infinity
   );
  const seconds = clamp(
    differenceInSeconds(countDownDate, now) - Math.floor(days * 24 * 60)  - Math.floor(hours * 60 * 60)  - Math.floor(minutes * 60),
    0, Infinity
   );
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="app">
      <h1 className="title">Countdown</h1>
      <div className="description">
        <p>Aute deserunt cupidatat est ad sint magna do adipisicing sint sint mollit. Proident id ea amet aute pariatur ullamco occaecat quis eiusmod do elit fugiat pariatur exercitation nostrud in mollit. Reprehenderit excepteur commodo nulla esse anim ipsum proident deserunt duis eiusmod qui minim Lorem irure magna.</p>
      </div>
      <div className="countdown">
        <div className="countdown__item">
          <div className="countdown__number">{days}</div>
          <div className="countdown__label">Days</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">{hours}</div>
          <div className="countdown__label">Hours</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">{minutes}</div>
          <div className="countdown__label">Minutes</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">{seconds}</div>
          <div className="countdown__label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default App;
