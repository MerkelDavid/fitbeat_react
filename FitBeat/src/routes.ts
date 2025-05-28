import Home from './components/home';
import Routines from './components/routines';
import Music from './components/music';
import Profile from './components/profile';
import App from './App';
import Exercises from './components/exercises';
import CreateAccount from './components/createAccount';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';

export const routes = 
  [
    {
      path: "/", 
      Component: App,
      children:[
        {index: true, Component: Home},
        {path: "routine", Component: Routines},
        {path: "music", Component: Music},
        {path: "profile", Component: Profile},
        {path: "exercises", Component: Exercises},
        {path: "createAccount", Component: CreateAccount},
        {path: "login", Component: Login},
        {path: "passwordReset", Component: ForgotPassword}
      ]
    },
  ]
