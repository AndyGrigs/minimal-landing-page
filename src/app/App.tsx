import React, { useState } from 'react';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';




const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={classNames('app', {}, [])}>
      <Navbar onBurgerClick={toggleSidebar} />
      <div className='content-page'>

        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
        {/* <AppRouter /> */}
      </div>
    </div>
  );
};

export default App;
