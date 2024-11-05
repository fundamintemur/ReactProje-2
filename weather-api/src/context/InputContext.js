import { createContext,useState,useEffect} from "react";
import cityData from "../assets/cityData.json";
const InputContext=createContext();
export const InputProvider=({children})=>{

    const [ city, setCity ] = useState("")
    const cities = [...cityData.filter( (item ) => item.name !== city )]
    
    const values = {
        city,
        setCity,
        cities
    }

  
    return <InputContext.Provider value={values}>{children}</InputContext.Provider>
};
export default InputContext;