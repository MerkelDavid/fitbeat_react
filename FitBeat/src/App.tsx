import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import Loader from './components/loader';
import BottomNav from './components/bottomNav';

function App() {

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <main className="p-4">
      <div className="App">
        {isLoading ? <span className="flex flex-col items-center justify-center h-full"><Loader/></span> :
          <Outlet />
        }
        <BottomNav />
      </div>
    </main>

  )
}

export default App
