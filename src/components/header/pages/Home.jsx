import React from 'react'
import Header from '../Header'
import About from './About'
import Eduaction from './Eduaction'

function Home() {
  return (
    <div className='container-fluid p-0'>
       <Header/>
      <div className='d-flex align-items-center justify-content-around home'>
      <div className="left">
        <h1 className='heading'>HELLO,<br /><span>
        I'm  Annapoorneshwari M 
        </span>
        </h1>
        <p className='subtitle'>Frontend Developer</p>
        <button className="btn btn">Contact</button>
       </div>
       <div className="right">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png" alt="profile" width='700px'/>
       </div>
      </div>
      <About/>
      <Eduaction/>
    </div>
  )
}

export default Home