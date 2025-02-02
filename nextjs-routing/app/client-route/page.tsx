"use client"

import React from 'react'
import { serverSideFunctions } from '../_lib/server-utils'

const ClientPage = () => {
  const result = serverSideFunctions()
  console.log({result})
  return (
    <div>
      ClientPage
      <p>{result}</p>
    </div>

  )
}

export default ClientPage