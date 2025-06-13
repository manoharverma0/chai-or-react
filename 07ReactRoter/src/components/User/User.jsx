import React from 'react'

import { useParams } from 'react-router'

function User() {
    const {id}= useParams()
  return (
      <div className='text-center text-4xl'>User:{id }</div>
  )
}

export default User