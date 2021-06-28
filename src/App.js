import { useEffect, useRef } from 'react';
import './App.css';
import imageUnderConstruction from './images/1.jpeg'

function App() {
  const timerRef = useRef(null)

  let estimatedTime
  var countDownDate = new Date("Juni 27, 2021 09:37:25").getTime()

  useEffect(() => {
    const interval = setInterval(() => {

      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      estimatedTime = timerRef.current.innerText = "Estimated Time: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }, 1000)
    //   cleanup
    return () => {
      clearInterval(interval);
    }
    // return () => {
    // }
  }, [])


  return (
    <div className="app">
      <img className="image1" src={imageUnderConstruction} alt="Comming soon" />
      <p className="timer" ref={timerRef}>
        {estimatedTime}
      </p>
    </div>
  );
}

export default App;
