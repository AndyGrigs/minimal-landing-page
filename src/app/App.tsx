import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';

const App = () => {   
 
const[theme] = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/> 
     <AppRouter/>
    </div>
  );
};

export default App;
