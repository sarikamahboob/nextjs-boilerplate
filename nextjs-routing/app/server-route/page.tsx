import React from 'react'
import { serverSideFunctions } from '../_lib/server-utils'
import { clientSideFunction } from '../_lib/client-utils';

const ServerPage = () => {
  const result = serverSideFunctions()
  const result2 = clientSideFunction();
  console.log({result})
  return (
    <div>
      ServerPage
      <p>{result}</p>
      <p>{result2}</p>
    </div>
  );
}

export default ServerPage