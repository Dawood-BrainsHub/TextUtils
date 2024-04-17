import { useState } from 'react'
import Header from './components/Header'
import TextUtils from './components/Textutils'

function App() {

  return (
    <>
    <Header appname="TextUtils App" />
    <TextUtils title="Enter Your Text Here" />
    </>
  )
}

export default App
