import { useState, useEffect } from "react";

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateTime = () => setDate(new Date());
        setInterval(updateTime, 1000);
        
        return clearInterval(updateTime);
    }, []);

    return (
        <span>{date.toLocaleTimeString()}</span>
    )
}