import React, { createContext, useReducer } from 'react'
import AlertReducer from './AlertsReducer'

const AlertContext = createContext()

export const Alertsprovider =({children}) =>{
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = ( msg, type) =>{
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => dispatch({
            type: "RMV"
        }), 3000);
    }


    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}>
 
        {children}

    </AlertContext.Provider>


}
export default AlertContext;
