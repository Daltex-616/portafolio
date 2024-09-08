import { useState } from 'react'
import { Navbar } from './navbar/Navbar'
import { Profile } from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar/>
      <Profile/>
      </>
  )
}

export default App
