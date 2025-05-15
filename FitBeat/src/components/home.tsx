import React from 'react'
import { Button, CardActions, CardContent, Card } from '@mui/material';
const Home = () => {

  return (
        <section className="App-content">
            <Card className="mb-4">
              <CardContent>
                <h2>Track Your Workouts</h2>
                <p>Log your workouts and monitor your progress.</p>
                <CardActions> <Button variant="contained">Get Started</Button></CardActions>
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