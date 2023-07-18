import React, { Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'helpers/classNames/className';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';

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
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
