import Home from './components/home';
import Routine from './components/routine';
import Music from './components/music';
import Profile from './components/profile';
import App from './App';

export const routes = 
  [
    {
      path: "/", 
      Component: App,
      children:[
        {index: true, Component: Home},
        {path: "routine", Component: Routine},
        {path: "music", Component: Music},
        {path: "profile", Component: Profile},
      ]
    },
  ]
