import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container w-full text-center font-semibold'>
      <h1 className=' font-bold text-center m-5'>Welcome to Home Page of Learing ReactJs</h1>

     <ol className=''>
        <li><Link to={`map`} className=' font-sans text-5xl  m-3 p-5'>1. Map</Link></li>
        <li><Link to={`filter`} className=' font-sans text-5xl m-3 p-5'>2. Filter</Link></li>
        <li><Link to={`state`} className=' font-sans text-5xl m-3 p-5'>3. States</Link></li>
        <li><Link to={`props`} className=' font-sans text-5xl m-3 p-5'>4. Props</Link></li>
        <li><Link to={`forms`} className=' font-sans text-5xl m-3 p-5'>5. Forms</Link></li>
     </ol>
    </div>
  )
}

export default Home
