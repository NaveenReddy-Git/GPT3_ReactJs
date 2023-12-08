import React from 'react'

import {Article, Brand, CTA, Navbar} from './Components';

import {Footer, Blog, Posibility, Features, Header, WhatGPT3} from './containers';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App