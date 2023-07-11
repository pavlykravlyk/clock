import { useState, useEffect } from "react";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [btnStatus, setBtnStatus] = useState("");

    useEffect(() => {
        let updateTime = null
        if (isActive) {
            updateTime = setInterval(() => setTime(prevTime => prevTime + 1), 1);
        }

        return () => clearInterval(updateTime);
    }, [isActive, time]);

    useEffect(() => {
        if (isActive && time !== 0) {
            setBtnStatus("stop");
        } else if (!isActive && time > 0) {
            setBtnStatus("resume");
        } else if (!isActive && time === 0) {
            setBtnStatus("start");
        } else {
            setBtnStatus("start");
        }
    
    }, [btnStatus, isActive, time])
    
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60);

    const padTime = (num) => num.toString().padStart(2, "0")
    const timeString = [padTime(hours),padTime(minutes),padTime(seconds)].join(":")

    const stopTime = () => setIsActive(!isActive)
    const resetTime = () => setTime(0)

    return (
        <div>
            <span>{timeString}</span><br/>
            <button onClick={stopTime}>{btnStatus}</button>
            <button onClick={resetTime}>reset</button>
        </div>
    )
}