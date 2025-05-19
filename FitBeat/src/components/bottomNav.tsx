
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
const BottomNav = () => {


  return (
        <section className="bottomNav">
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels value={useLocation().pathname}>
              <BottomNavigationAction component={Link} to="/" value="/" label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction component={Link} to="/routine" value="/routine" label="Routine" icon={<FitnessCenterIcon />} />
              <BottomNavigationAction component={Link} to="/music" value="/music" label="Music" icon={<MusicNoteIcon />} /> 
              <BottomNavigationAction component={Link} to="/profile" value="/profile" label="Profile" icon={<AccountBoxIcon />} />
            </BottomNavigation>
          </Paper>
        </section>
  )
}

export default BottomNav