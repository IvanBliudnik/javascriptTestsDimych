import {StudentType} from "../02-Object/02";
import {addSkill, doesStudentLivesIN, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Ivan",
        age: 33,
        isActive: false,
        adress: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus",
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    };
})
test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    expect(student.adress.city.title).toBe('Minsk')
    const result1 = doesStudentLivesIN(student, 'Moscow')
    const result2 = doesStudentLivesIN(student, 'Minsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})


//

//
