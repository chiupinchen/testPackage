import { Person } from '../src/person';
import { Student } from '../src/student';


describe('testing index file', () => {
    test('test github_chiupin_iac.Student.getFullName', () => {
        
        let person: Person = {firstName: "John", lastName: "Doe", age: 25};
        let s1 = new Student({firstName: "John", lastName: "Doe", age: 25});

        expect(s1.getFullName()).toBe('John Doe');
      });
});