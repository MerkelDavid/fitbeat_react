import { Button, Card, CardContent } from "@mui/material"
import { Routine } from "../classes/routine";
import { useState } from "react";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";

const Routines = () => {

    //eventual pull this from db
    const [routine, setRoutine] = useState<Routine>(new Routine(dayjs()));
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [routinesExist, setRoutinesExist] = useState<boolean>(false);
    //used for testing eventually we will check to see if the user has any routines

    return (
        <>
        <h1>Routine</h1>
        {routinesExist ?
            <Card className="mt-4 mb-4">
                <CardContent>
                    <h2>Routine</h2>
                    <p>Here you can create your own routine.</p>
                    <p>Click on the button below to add exercises to your routine.</p>
                    <Button variant="contained" className="mt-4" onClick={() =>setRoutinesExist(!routinesExist)}>Create Routine</Button>
                </CardContent>  
            </Card>
            :
            <>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker format= 'DD/MM/YYYY' value={selectedDate} onChange= {(value) => setSelectedDate(value)}/>
                </LocalizationProvider>
                <Card className="mt-4 mb-4">    
                    <CardContent>
                        <h1>Routine for {selectedDate.format('DD/MM/YYYY')}</h1>
                        <p>You currently do not have a routine for the selected date</p>
                        <Button variant="contained" className="mt-4">Create Routine</Button>
                    </CardContent>
                </Card>
            </>
        }
        </>
    )
}

export default Routines