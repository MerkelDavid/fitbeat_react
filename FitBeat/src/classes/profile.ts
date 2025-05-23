import { Routine } from './routine';
export class Profile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  height: string;
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
        height: string,
        weight: number,
        routines: Routine[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.Routines = routines;
    }
}