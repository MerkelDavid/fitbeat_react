import { Routine } from './routine';
export class Profile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  heightFt: number;
  heightIn: number;
  gender: string;
  // in lbs
  weight: number;
  Routines: Routine[];

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        age: number,
        heightFt: number,
        heightIn: number,
        weight: number,
        gender: string,
        routines: Routine[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.heightFt = heightFt;
        this.heightIn = heightIn;
        this.weight = weight;
        this.gender = gender;
        this.Routines = routines;
    }
}