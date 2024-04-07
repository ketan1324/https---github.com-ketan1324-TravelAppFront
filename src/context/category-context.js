import React, {useContext,createContext, children,useState} from "react";


const MyContext = createContext("National Parks");

export function MyProvider  ( {children}){
    const [hotelData,setHotelData]=useState("National Parks");
  return (
    <MyContext.Provider value={{hotelData,setHotelData}}>
        {children}
    </MyContext.Provider>
  )
}
export function MyUseContext(){
    return useContext(MyContext);
}

