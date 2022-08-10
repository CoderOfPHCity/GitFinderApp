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


  return (
        <GitContext.Provider value={{
            ...state,
            dispatch, 
        }}>
            {children} 
        </GitContext.Provider>
  )
}

export default GitContext;