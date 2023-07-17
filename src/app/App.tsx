import React, { Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'helpers/classNames/className';

const App = () => {
 
const[theme, toggleTheme] = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>

      <button onClick={toggleTheme}>Toggle</button><br />

      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
