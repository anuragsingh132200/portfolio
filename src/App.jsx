import React from 'react'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Roller from './components/roller'
import About from './components/about'
import Project from "./components/projects"
function App() {
  return (
    <div className='w-full h-screen  text-white'>
      <Navbar />
      <Landing />
      <Roller />
      <About />
      <Project />
    </div>
  )
}
export default App