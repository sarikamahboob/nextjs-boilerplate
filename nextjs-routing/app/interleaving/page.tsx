import ClientComponent1 from '@/components/client-component-1';
import ServerComponent1 from '@/components/server-component-1';
import React from 'react'

const InterleavingPage = () => {
  return (
    <div>
      <h1>InterleavingPage</h1>
      <ClientComponent1>
        <ServerComponent1 />
      </ClientComponent1>
    </div>
  );
}

export default InterleavingPage