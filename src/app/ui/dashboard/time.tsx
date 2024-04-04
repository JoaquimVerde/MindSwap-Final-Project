'use client'
import { useState, useEffect } from 'react';

const Time: React.FC = () => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime: Date = new Date();
            let hours: any = currentTime.getHours();
            let minutes: any = currentTime.getMinutes();

            // Add leading zero if minutes is less than 10
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }

            let timeStr = hours + ':' + minutes + ' ';

            // Determine AM or PM
            if (hours > 11) {
                timeStr += 'PM';
            } else {
                timeStr += 'AM';
            }

            setTime(timeStr);
        }, 1000);

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Time;
