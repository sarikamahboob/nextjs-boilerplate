import React from 'react'
import fs from 'fs'
import ServerComponent2 from './server-component-2';
import ClientComponent1 from './client-component-1';

const ServerComponent1 = () => {
  fs.readFileSync(
    "/home/sarika/projects/NEXTJS/nextjs-boilerplate/nextjs-routing/components/server-component-1.tsx",
    "utf-8"
  );
  return (
    <div>
      <h1>ServerComponent1</h1>
      <ServerComponent2 />
      <ClientComponent1 />
    </div>
  );
}

export default ServerComponent1