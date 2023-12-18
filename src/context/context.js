import React, { useState } from 'react';

export const ContextAPI = React.createContext();

export function ContextComponent({ children }) {
    // Barcha kerakli state va funksiyalar
    const [data, setData] = useState("ma'lumot");
    let abc = 'alphabet'

    return (
        <ContextAPI.Provider value={{
            data,
            abc
        }}>
            {children}
        </ContextAPI.Provider>
    )
};