import React from 'react'
import {useEffect, useState} from 'react'
import UserItem from './UserItem'


function UserResults() {
   const[users, setuserData] = useState([]);
   const[loading, setLoading] = useState(true);

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

    if (!loading) {
        return (
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )
      } else {
        return <h3>abeg show ya seff</h3>
      }
  
}

export default UserResults     
    