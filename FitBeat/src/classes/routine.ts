import { Dayjs } from "dayjs";

export interface Exercise {
    //reference to the exercise in wger
    id: number;
    name: string;
    sets: number;
    reps: number;
}

export class Routine {
    private exercises: Exercise[] = [];
    private date: Dayjs;

    constructor(date: Dayjs = new Dayjs()) {
        this.date = date;
    }

    addExercise(exercise: Exercise): void {
        this.exercises.push(exercise);
    }

    getExercises(): Exercise[] {
        return this.exercises;
    }

    getDate(): Dayjs {
        return this.date;
    }

    removeExercise(name: string): void {
        this.exercises = this.exercises.filter(ex => ex.name !== name);
    }

    clearExercises(): void {
        this.exercises = [];
    }
}