export type ManType = {
    name: string,
    age: number
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 24},
    {name: "Alexander Petrov", age: 74},
    {name: "Dmitry Sidorov", age: 14},
]

const dimychTransformator = (man: ManType) =>
    ({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})


const devs1 = [{
    stack: ["css", "html", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov",
},
    {
        stack: ["css", "html", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css", "html", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov",
    }]
console.log(devs1)


const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]
console.log(devs2)

const devs3 = people.map(dimychTransformator)
console.log(devs3)
const devs4 = people.map((man => ({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})))
console.log(devs4)