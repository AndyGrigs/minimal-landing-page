import React, {Suspense, useState} from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {


    const[theme, setTheme] = useState<Theme>(Theme.LIGHT)
    
    const toogleTheme = () =>{
      setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }


  return (
    <div className= {`app ${theme}`}>
      <button onClick={toogleTheme}>toogle</button>
      <Link to='/about'>About</Link><br />
      <Link to='/'>Home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>}/>
          <Route path='/' element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App