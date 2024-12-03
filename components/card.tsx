import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    backgroundColor: 'lightgray',
    padding: '100px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return <div style={{ ...cardStyle }}>{children}</div>;
}

export default Card