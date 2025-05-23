import { Button, CardActions, CardContent, Card } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
        <section className="App-content">
            <Card className="mb-4">
              <CardContent>
                <h2>Welcome to FitBeat!</h2>
                <p>Create an account to track your workouts and create playlists</p>
                <CardActions> <NavLink to="/createAccount"><Button variant="contained">Get Started</Button></NavLink></CardActions>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent>
                <h2>My routines</h2>
                <p>You currently have no routines</p>
                <CardActions> <Button variant="contained">Get Started</Button></CardActions>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="mb-4">
                <h2>My Music</h2>
                <p>We dont know your music tastes</p>
                <CardActions> <Button variant="contained">Get Started</Button></CardActions>
              </CardContent>
            </Card>
        </section>
  )
}

export default Home