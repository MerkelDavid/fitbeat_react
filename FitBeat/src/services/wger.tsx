import type { ExerciseQuery } from "../classes/exerciseQuery";
import axios from "axios";

const API_BASE_URL = 'https://wger.de/api/v2/';
export const getExercises = async (query: ExerciseQuery)=> {
    console.log('Query:', query);
    try {
      let url = API_BASE_URL + 'exerciseinfo/?format=json';
      if( query && query.muscleGroups && query.muscleGroups.length > 0) {
        url += '&muscles=' + query.muscleGroups;
      } 
      if(query && query.equipmentList && query.equipmentList.length > 0) {
        url += '&equipment=' + query.equipmentList;
      }
      console.log('Fetching exercises from URL:', url);
      const response = await axios.get(url);
      console.log('Response:', response.data);
      if (!response || !response.data || response.data.length === 0) {
        // this.es.showError('No exercises found for the selected criteria.');
        throw new Error('No exercises found for the selected criteria.');
      } else {
        return response.data;
      } 
    }
    catch (err){
      console.error('Error fetching exercises:', err);
      //   this.es.showError('Error fetching exercises. Please try again later.');
      throw err;
    }
}

export const getMuscleGroups= async ()=> {
    try {
        const response = await axios.get(API_BASE_URL + 'muscle/?format=json');
      if (!response || !response.data || response.data.length === 0) {
        // this.es.showError('No exercises found for the selected criteria.');
        throw new Error('No exercises found for the selected criteria.');
      } else {
        return response.data;
      } 
    }
    catch (err){
      console.error('Error fetching exercises:', err);
    //   this.es.showError('Error fetching exercises. Please try again later.');
      throw err;
    }
}

export const getEquipment= async ()=> {
    try {
        const response = await axios.get(API_BASE_URL + 'equipment/?format=json')
      if (!response || !response.data || response.data.length === 0) {
        // this.es.showError('No exercises found for the selected criteria.');
        throw new Error('No exercises found for the selected criteria.');
      } else {
        return response.data;
      } 
    }
    catch (err){
      console.error('Error fetching exercises:', err);
    //   this.es.showError('Error fetching exercises. Please try again later.');
      throw err;
    }
}