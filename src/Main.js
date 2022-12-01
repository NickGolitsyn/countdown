import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {

  let navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/title=${event.target.title.value}&date=${event.target.date.value}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='title'>Title:</label>
        <input required type="text" id='title' name='title' maxLength="40" />
        <label for='date'>Date:</label>
        <input required type="date" id='date' name='date' min={new Date().toISOString().split("T")[0]} />
        <input className="submit-btn" type='submit' />
      </form>
    </div>
  )
}

export default Main;