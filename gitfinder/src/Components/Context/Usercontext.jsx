import React from 'react'
import {createContext, useState} from 'react'

const GitContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const Gitprovider=({children}) => {
    const[users, setuserData] = useState([]);
    const[loading, setLoading] = useState(true);

    const fetchUser = async() => {
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            },
        })

        const data = await res.json()

        setuserData(data)
        setLoading(false)
    }
  return (
        <GitContext.Provider value={{
            users,
            loading,
            fetchUser
        }}>
            {children} 
        </GitContext.Provider>
  )
}

export default GitContext;