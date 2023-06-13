import { Person } from './person';

//create a person class
class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;

    // create a constructor that takes a person
    constructor(person: Person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }


    // create a function that takes a person and returns a string
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
export {Student};


// // instantiate a new student
// let s1: IPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25
// };

// let student = new Student(s1);
// console.log(student.getFullName());




