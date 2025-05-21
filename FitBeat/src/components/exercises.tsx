import {  Card, CardContent, Button, Autocomplete, TextField, Pagination } from '@mui/material'
import { getEquipment, getExercises, getMuscleGroups } from '../services/wger';
import { ExerciseQuery } from '../classes/exerciseQuery';
import { useEffect, useState} from 'react';

const Exercises = () => {

  const [muscleGroupList, setMuscleGroupList] = useState<any[]>([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<number>(0);
  const [equipmentList, setEquipmentList] = useState<any[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<number>(0); 
  const [exerciseList, setExerciseList] = useState<any[]>([]);
  // const [selectedExercise, setSelectedExercise] = useState<string>('');

  //pulling initial data from the API 
  useEffect(() => {
    Promise.all([
      getMuscleGroups(), getEquipment(), getExercises(new ExerciseQuery([], []))
    ]).then(([muscleGroupList, equipmentList, exerciseList]) => {
      setMuscleGroupList(muscleGroupList.results);
      setEquipmentList(equipmentList.results);
      setExerciseList(mapResults(exerciseList));
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [])

  const mapResults = (data) => {
    data.results.forEach((exercise) => {
      exercise.translations.forEach((translation) => {
        if (translation.language === 2) {
          exercise.description = translation.description;
          exercise.name = translation.name;
        } 
      });
    });
    return data.results;
  }

    const search = (muscleGroup: number, equipment: number) => {
      const query: ExerciseQuery = new ExerciseQuery([], []);
      if (muscleGroup != null && muscleGroup != undefined && muscleGroup != 0) {
        query.muscleGroups = [muscleGroup];
      }
      if (equipment != null && equipment != undefined && equipment != 0) {
        query.equipmentList = [equipment];
      }
      getExercises(query).then((data) => {
        setExerciseList(mapResults(data));
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
    }

  return (
    <>
      <h1>Exercises</h1>
      <div className="flex mt-4 mb-4">
        <div className="flex-1">
          <Autocomplete
            id="muscle-group-select"
            sx={{ width: 300 }}
            options={muscleGroupList}
            autoHighlight
            onChange={(event, value) => {
              setSelectedMuscleGroup(value.id);
              search(value.id, selectedEquipment);
            }}
            getOptionLabel={(option) => option.name_en || option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a muscle group"
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: 'new-password', 
                  },
                }}
              />
            )}
          />
        </div>
        <div className="flex-1">
          <Autocomplete
            id="equipment-select"
            sx={{ width: 300}}
            options={equipmentList}
            autoHighlight
            onChange={(event, value) => {
              setSelectedEquipment( value.id);
              search(selectedMuscleGroup, value.id);
            }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose equipment"
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: 'new-password', 
                  },
                }}
              />
            )}
          />
        </div>
      </div>  
      {exerciseList.map((exercise) => (
        <Card key={exercise.id} className="mb-4">
          <CardContent>
            <div className="flex justify-between">
              <div className="flex-1">
                <h1>{exercise.name}</h1>
                <p dangerouslySetInnerHTML={{__html: exercise.description}}></p>
              </div>
              <div className="flex-1">
                <p>Muscle Groups: {exercise.muscles.map((muscle) => muscle.name).join(', ')}</p>
                <p>Equipment: {exercise.equipment.map((equipment) => equipment.name).join(', ')}</p>
              </div>
            </div>
            
            <div className="flex justify-between mt-4">
              <div className="flex-1">
                <Button variant="contained">Add to Routine</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Pagination count={10} color="primary" />
    </>
  )
}

export default Exercises