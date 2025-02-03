import React from 'react'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

const UsersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log({users})
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user: any) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage