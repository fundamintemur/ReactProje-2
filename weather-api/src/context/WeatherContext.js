import { createContext, useContext, useEffect, useState } from "react";
import InputContext from "./InputContext";
import axios from "axios"

const WeatherContext=createContext();
export const WeatherProvider=({children})=>{
    const { city,setCity}=useContext(InputContext);
    const [ data, setData ] = useState()
    const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    const apiKey = 'af380e96783ea3d2eb344da02864b224'; 
    
    // useEffect( () => {
    //         navigator.geolocation.getCurrentPosition( (position) => {
    //                 axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2eb5e66f28533bb0afdea44205243ec8&lang=tr`)
    //                 .then( (res) => res.data.name )
    //                 .then( (data) => setCity(data))
    //             })
    // },[])
    console.log(setData)
    useEffect ( () => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${apiKey}&cnt=40`)
            .then( (res) => res.data.data)
            .then( (item) => setData(item.filter( (day, index) => index < 7)))
            .catch( (e) => console.log(e))
        }, [city])


    const values = {
        data,
        weekday,
    }

  return(
    <WeatherContext.Provider value={values}>
     {children}
    </WeatherContext.Provider>
  )
}
export default WeatherContext