// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';

import { PageSelectSet } from './components/PageSelectSet';

import './App.css'

// import { Header } from './components/Header'
// import { Set } from './components/Set'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} />
        <Route path="*" element={<PageCreateSet/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;