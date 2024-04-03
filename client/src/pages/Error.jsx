import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
  const error = useRouteError()
  console.error(error)  
  return (
    <div>404 page not found</div>
  
  )
}

export default Error