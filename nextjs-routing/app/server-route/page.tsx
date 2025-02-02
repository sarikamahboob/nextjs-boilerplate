import React from 'react'
import { serverSideFunctions } from '../_lib/server-utils'

const ServerPage = () => {
  const result = serverSideFunctions()
  console.log({result})
  return (
    <div>
      ServerPage
      <p>{result}</p>
    </div>
  )
}

export default ServerPage