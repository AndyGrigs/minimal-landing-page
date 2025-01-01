import React from 'react';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';




const App = () => {


  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className='content-page'>

        <Sidebar />
        {/* <AppRouter /> */}
      </div>
    </div>
  );
};

export default App;
