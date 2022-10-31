import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Goals from '../Components/Goals'
import Message from '../Components/Message'
import Services from '../Components/Services'
import Sliders from '../Components/Sliders'

const Home = () => {
  return (
    <>
  <div className=''>
    {/* slider  section*/}
    <Sliders/>
    {/* about section */}
  <About/>

  {/* goals section */}
  <Goals/>

{/* message sevtion */}
<Message/>
  {/* services section */}
  <Services/>

 


  {/* contact section */}
  <Contact/>
  </div>
    </>
  )
}

export default Home