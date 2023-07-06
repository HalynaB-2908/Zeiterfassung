import { useState, useEffect } from 'react';
import React from 'react';

export default function Timer() {
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
    return (
        <div className='Timer'>
        <div className='Time-content'>
            <span>{ ("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
            <span>{ ("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
            <span>{ ("0" + ((time / 10) % 100)).slice(-2)} </span>  
            {running ? (
                <button type="button" class="btn btn-outline-secondary " onClick={()=> {setRunning(false)}}>Pause</button>
            ) : (<button type="button" class="btn btn-outline-secondary m-2" onClick={()=> {setRunning(true)}}>Start</button>)}       
            <button type="button" class="btn btn-outline-secondary" onClick={()=> {setTime(0)}}>Reset</button>
            </div>
        </div>
    );
}