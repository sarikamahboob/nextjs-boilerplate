'use client'

import React, { useEffect } from 'react'

const ErrorPage = ({error}: {error: Error}) => {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div>Error Fetching Users Data</div>
  )
}

export default ErrorPage