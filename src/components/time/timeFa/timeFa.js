import React, { useState, useEffect } from 'react';
import './timeFa.css'

const TimeFa = (props) => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [weekDay, setWeekDay] = useState('');
    const [monthDay, setMonthDay] = useState('');
    const [monthName, setMonthName] = useState('');
    const [year, setYear] = useState();


    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            setSecond(date.getSeconds())
            setMinute(date.getMinutes())
            setHour(date.getHours())
            setWeekDay(date.toLocaleDateString('fa', { weekday: 'short' }))
            setMonthDay(date.toLocaleDateString('fa', { day: 'numeric' }))
            setMonthName(date.toLocaleDateString('fa', { month: 'long' }))
            setYear(date.toLocaleDateString('fa', { year: 'numeric' }))
        }, 1000)
    })

    const changeNumber = (input) => {
        const farsiNum = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
        let output = ''

        for (let i = 0; i < input.length; i++) {
            if (input[i] >= 0 && input[i] <= 9) {
                output += farsiNum[input[i]]
            }
            else {
                output += input[i]
            }
        }
        return output;
    }

    let timeString = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
    timeString = changeNumber(timeString)
    let dateString = `${weekDay}, ${monthDay} ${monthName} ${year}`

    return (
        <div className="timeFa">
            <div className="div-time">
                {timeString}
            </div>
            <div className="div-date">
                {dateString}
            </div>
        </div>
    );
}

export default TimeFa;