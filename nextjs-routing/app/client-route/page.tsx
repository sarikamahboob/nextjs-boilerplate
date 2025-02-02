"use client"

import React from 'react'
import { serverSideFunctions } from '../_lib/server-utils'
import { useTheme } from '@/components/ThemeProvider'
import { clientSideFunction } from '../_lib/client-utils'


const ClientPage = () => {
  const result = clientSideFunction()
  const theme = useTheme()
  console.log({result})
  return (
    <div
      // style={{ color: theme.colors.primary }}
    >
      ClientPage
      <p>{result}</p>
    </div>
  );
}

export default ClientPage