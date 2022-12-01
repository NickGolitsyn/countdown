import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import '../App.css'

// const Clock = ({ d, h, m, s }) => {
const Clock = ({ countdownDate }) => {

  const [over, setOver] = useState(false)
  let navigate = useNavigate();

  const [d, setD] = useState();
  const [h, setH] = useState();
  const [m, setM] = useState();
  const [s, sets] = useState();

  let interval;

  const start = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();

      const diff = new Date(countdownDate).getTime() - now;

      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(diff % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(diff % ( 60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(diff % (60 * 1000) / 1000);

      if (diff < 0) {
        setOver(true)
        // clearInterval(interval.current);
      } else {
        setD(days);
        setH(hours);
        setM(minutes);
        sets(seconds)
      }

    })
  }

  useEffect(() => {
    over && navigate("/congrats");
  }, [over])

  useEffect(() => {
    start();
  }, [])

  return (
    <div>
      <section className='timer-container'>
        <section className='timer'>
          <div className='clock'>
            <section>
              <h3>{d}</h3>
              <p>days</p>
            </section>
            <section>
              <h3>{h}</h3>
              <p>hours</p>
            </section>
            <section>
              <h3>{m}</h3>
              <p>minutes</p>
            </section>
            <section>
              <h3>{s}</h3>
              <p>seconds</p>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}

Clock.defaultProps = {
  d: 0,
  h: 0,
  m: 0,
  s: 0
}

export default Clock