import React from 'react'
import {useContext} from 'react'
import GitContext from '../Context/Usercontext'
import UserItem from './UserItem'



function UserResults() {
  const {users, loading} = useContext(GitContext)

   

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
    