import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';

const App = () => {   
 
const[theme, toggleTheme] = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>

      <button onClick={toggleTheme}>Toggle</button><br />

      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
      
     <AppRouter/>

    </div>
  );
};

export default App;
