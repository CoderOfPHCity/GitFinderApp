import React, {createContext, useReducer} from 'react'
import Reducer from '../UseReducer/Reducer';

const GitContext = createContext();
export const Gitprovider=({children}) => {

    const initialData =
        {
           users:[], 
           user: {},
           repos: [],
           loading: false 
        }
       
    const [ state, dispatch] = useReducer(Reducer, initialData);


    
    const clearUsers = () => dispatch({
        type: 'CLEAR_LOADING'
    })
    const setLoading = () => dispatch({
        type: 'SET_LOADING' 
    })


  return (
        <GitContext.Provider value={{
            ...state,
            dispatch, 
            setLoading,
            clearUsers
        }}>
            {children} 
        </GitContext.Provider>
  )
}

export default GitContext;