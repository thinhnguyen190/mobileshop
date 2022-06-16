
import React, { useCallback, useEffect, useState } from 'react'

function CountDown(props) {
    const { time } = props
    const [ count, setCount ] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        tik: 0,
    })
    const CountTime = useCallback(() => {
        
        const preTime = new Date()
        const saleTime = new Date(time)
        const resTime = saleTime - preTime
        const day = Math.floor(resTime/(1000*60*60*24))
        const hour = Math.floor(resTime/(1000*60*60)) - day*24 
        const minute = Math.floor(resTime/(1000*60)) - day*24*60 - hour*60 
        const tik = Math.floor(resTime/1000) - day*24*60*60 - hour*60*60 - minute*60
        setCount({
            day,
            hour,
            minute,
            tik
        })

    },[time])

    useEffect(() => {
        const timer = setTimeout(() => CountTime(),1000)

        return () => {
            clearTimeout(timer)
        }
    },[count, CountTime])

   

    return (
        <div>
            <p>{count.day} ngày {count.hour < 10 ? `0${count.hour}`: count.hour}:{count.minute < 10 ? `0${count.minute}`: count.minute}:{count.tik < 10 ? `0${count.tik}`: count.tik}</p>
        </div>
    )
}

export default CountDown

// const convert = (time) => {
//     let hour; 
//     let minute;
//     let tik;
//     if(time)
// }