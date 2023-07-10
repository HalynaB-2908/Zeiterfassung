import { useState, useEffect } from 'react';
import React from 'react';

export default function Timer(props) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime( (prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
        }, [running]);
    
    useEffect(() => {
        localStorage.setItem(`timer_${props.projectId}`, JSON.stringify(time));

    }, [time, props.projectId]);

    useEffect(() => {
        const savedTime = localStorage.getItem(`timer_${props.projectId}`);
    }, [props.projectId]);
    return (
        <div className='Timer'>
        <div className='Time-content'>
            <span>{ ("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
            <span>{ ("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
            <span>{ ("0" + ((time / 10) % 100)).slice(-2)} </span>  
            {running ? (
                <button type="button" className="btn btn-outline-secondary time-btn" onClick={()=> {setRunning(false)}}>Pause</button>
            ) : (<button type="button" className="btn btn-outline-secondary m-2 time-btn" onClick={()=> {setRunning(true)}}>Start</button>)}       
            <button type="button" className="btn btn-outline-secondary time-btn" onClick={()=> {setTime(0)}}>Reset</button>
            </div>
        </div>
    );
}
