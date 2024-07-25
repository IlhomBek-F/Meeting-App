import { useEffect, useState } from "react";

function useTimer() {
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState({
        second: '00',
        minutes: '00'
    })

    let intervalId: NodeJS.Timeout;

    useEffect(() => {
        intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter.toString();
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter.toString();

            setTime({
                second: computedSecond,
                minutes: computedMinute,
            })

            setCounter((counter) => counter + 1);
        }, 1000)

        return () => clearInterval(intervalId)
    }, [counter]);

    return [time.minutes, time.second]
}

export default useTimer