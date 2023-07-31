import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';




const App = () => {


  const [theme] = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>

        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
