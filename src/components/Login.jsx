import React , { useState } from "react";

function Login(){

  setInterval(getTimeUpdated, 1000)

  let now = new Date().toLocaleTimeString()

  let [time, setTime] = useState(now)
  
  function  getTimeUpdated(){
    let newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  return(
    <div className="container">
      <h1>{time}</h1><br />
      <button className="btn btn-warning" onClick={getTimeUpdated}>you're awesome</button><br /><br />
      <footer>Made it with the React ❤️ Technology By DopDev</footer>
    </div>
  )
}

export default Login