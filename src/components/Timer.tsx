import useTimer from "../hooks/useTimer";

function Timer() {
  const [minutes, second] = useTimer();
  
  return (
      <div>
        <span className="minute">{minutes}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
  )
}

export default Timer