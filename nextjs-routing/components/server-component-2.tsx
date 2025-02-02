import React from 'react'
import fs from 'fs'

const ServerComponent2 = () => {
  fs.readFileSync(
    "/home/sarika/projects/NEXTJS/nextjs-boilerplate/nextjs-routing/components/server-component-2.tsx",
    "utf-8"
  );
  return (
    <div>ServerComponent2</div>
  )
}

export default ServerComponent2