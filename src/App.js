import React, { useEffect, useState } from "react";
import Nav from './components/Nav'
import './App.css';

function App() {
  let [slider, setSlider] = useState(false);

  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    setInterval(tick, 1000)
  }, [time])

  const tick = () => {
    setTime(new Date())
  }

  const h = time.getHours();
  // minutes_with_leading_zeros
  const m = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  const s = time.getSeconds();

  let month = time.toLocaleString("en-uk", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="App">
      <Nav />

      <div className="panel">
        <label id="date-switch" className="switch">
          <input
            type="checkbox"
            onClick={() => setSlider((slider = !slider))}
            value={slider}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <header className="App-header">
        <div className="display">
          <div className="display-time">
            {h}: {m}: {s}
          </div>

          <div className="display-date">{slider && month}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
