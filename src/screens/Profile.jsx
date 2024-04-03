import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const params = useParams();
    console.log(params);

  return (
    <div>Profile : {params.userId}</div>
  )
}

export default Profile