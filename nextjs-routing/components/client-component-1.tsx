"use client"

import React, { useState } from 'react'
import ClientComponent2 from './client-component-2';

const ClientComponent1 = ({children}: {children: React.ReactNode}) => {
  const [name, setName] = useState("Sarika")
  return (
    <div>
      <h1>ClientComponent1</h1>
      <p>HEreeeeeeeeeeeeee</p>
      {children}
      <ClientComponent2 />
    </div>
  );
}

export default ClientComponent1