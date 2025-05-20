import { InputLabel, Select, Card, CardContent, CardActions, Button, MenuItem } from '@mui/material'
import { getEquipment, getExercises, getMuscleGroups } from '../services/wger';
import { ExerciseQuery } from '../classes/exerciseQuery';
import { useEffect, useState} from 'react';
const Routine = () => {


  const [muscleGroupList, setMuscleGroupList] = useState<any[]>([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('');
  const [equipmentList, setEquipmentList] = useState<any[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string>(''); 
  const [exerciseList, setExerciseList] = useState<any[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('');

  //pulling initial data from the API 
  useEffect(() => {
    Promise.all([
      getMuscleGroups(), getEquipment(), getExercises(new ExerciseQuery([], []))
    ]).then(([muscleGroupList, equipmentList, exerciseList]) => {
      setMuscleGroupList(muscleGroupList.results);
      console.log('Muscle Group List:', muscleGroupList);
      setEquipmentList(equipmentList.results);
      console.log('Equipment List:', equipmentList);
      setExerciseList(mapResults(exerciseList));
      console.log('Exercise List:', exerciseList);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [])

  const mapResults = (data: any) => {
    data.results.forEach((exercise: any) => {
      exercise.translations.forEach((translation: any) => {
        if (translation.language === 2) {
          exercise.description = translation.description;
          exercise.name = translation.name;
        } 
      });
    });
    return data.results;
  }

  const search = (muscleGroup: string) => {
    const query: ExerciseQuery = new ExerciseQuery([], []);
    if (muscleGroup != null && muscleGroup != undefined && muscleGroup != '') {
      query.muscleGroups = [parseInt(muscleGroup)];
    }
    if (selectedEquipment != null && selectedEquipment != undefined && selectedEquipment != '') {
      query.equipmentList = [parseInt(selectedEquipment)];
    }
    getExercises(query).then((data) => {
      setExerciseList(mapResults(data.results));
      console.log('Exercise List:', exerciseList);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  return (
    <>
      <h1>Exercises</h1>
      <div className="flex mt-4 mb-4">
        <div className="flex-1">
          <InputLabel id="muscleGroupLabel">Muscle Groups</InputLabel>
          <Select
            labelId="muscleGroupLabel"
            id="muscleGroup"
            label="Muscle Groups"
            defaultValue=""
            value={selectedMuscleGroup}
            onChange={(e) => {
              setSelectedMuscleGroup(e.target.value);
              search(e.target.value);
            }}
          >
            {muscleGroupList.map((muscle) => (
              <MenuItem key={muscle.id} value={muscle}>
                {muscle.name_en || muscle.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex-1">
          <InputLabel id="equipmentLabel">Equiptment</InputLabel>
          <Select
            labelId="equipmentLabel"
            id="equipment"
            label="equipment"
            defaultValue=""
            value={selectedEquipment}
            onChange={(e) => {
              setSelectedEquipment(e.target.value);
              search(e.target.value);
            }}
          >
            {equipmentList.map((equipment) => (
              <MenuItem key={equipment.id} value={equipment}>
                {equipment.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>  
      {exerciseList.map((exercise) => (
        <Card key={exercise.id} className="mb-4">
          <CardContent>
            <h2>{exercise.name}</h2>
            <p dangerouslySetInnerHTML={{__html: exercise.description}}></p>
            <p>Muscle Groups: {exercise.muscles.map((muscle: any) => muscle.name).join(', ')}</p>
            <p>Equipment: {exercise.equipment.map((equipment: any) => equipment.name).join(', ')}</p>

            <CardActions> <Button variant="contained">Get Started</Button></CardActions>
          </CardContent>
        </Card>

      ))}
    </>
  )
}

export default Routine