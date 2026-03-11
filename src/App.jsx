import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from './components/Header'
import { Set } from './components/Set'

function App() {
  return (
    <div className='App'>
      <Header />
      <Set />
    </div>
  )
}

export default App;