import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/home';
import Routine from './components/routine';
import Music from './components/music';
import Profile from './components/profile';
import Loader from './components/loader';
import BottomNav from './components/bottomNav';

function App() {

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <main className="p-4">
      <div className="App">
        {isLoading ? <span className="flex flex-col items-center justify-center h-full"><Loader/></span> :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="routine" element={<Routine />} />
                <Route path="music" element={<Music />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        }
        <BottomNav />
      </div>
    </main>

  )
}

export default App
