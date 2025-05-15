import React from 'react'

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

const BottomNav = () => {
  return (
        <section className="bottomNav">
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels >
              <BottomNavigationAction label="Routine" icon={<FitnessCenterIcon />} />
              <BottomNavigationAction label="Music" icon={<MusicNoteIcon />} />
              <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
            </BottomNavigation>
          </Paper>
        </section>
  )
}

export default BottomNav