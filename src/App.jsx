import React from 'react'
import Hero from './Components/Hero';
import Services from './Components/Services';
import MyWork from './Components/MyWork';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-[black]'>
      <Hero />
      <Services />
      <MyWork />
      <Footer />
    </div>
  )
}

export default App; 