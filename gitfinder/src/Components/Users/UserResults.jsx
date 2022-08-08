import React from 'react'
import {useEffect, useState} from 'react'


function UserResults() {
   const[userData, setuserData] = useState([]);
   const[Loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async() => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers:{
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await res.json()
        setuserData(data)
        setLoading(false)
    }

    if(Loading){
        return(
             <h3>Loading......</h3>
        )
       
    }
    else{
        return (
    <div className='grid grid-cols-1 gap-8 
            xl:grid-cols-4 
            lg:grid-cols-3 
            md:grid-cols-2'>

    {userData.map((user) =>(
        <h2>{user.login}</h2>

    ))}
            
    </div>
  )
    }
  
}

export default UserResults