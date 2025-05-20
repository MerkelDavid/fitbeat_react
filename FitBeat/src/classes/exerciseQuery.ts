export class ExerciseQuery {
    muscleGroups: number[];
    equipmentList: number[];

    constructor(muscleGroups?: number[], equipmentList?: number[]) {
        this.muscleGroups = muscleGroups || [];
        this.equipmentList = equipmentList || [];
    }
}