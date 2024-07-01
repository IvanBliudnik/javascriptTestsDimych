import exp from "constants";
import {governmentBuildingsType, HouseType} from "../02-Object/02-02";

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



const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]


const devs3 = people.map(dimychTransformator)

const devs4 = people.map((man => ({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})))


export const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
export const createGreetingMessage = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}

export const getStreetsTitlesOfGovernmentBuildings = ( buildings: governmentBuildingsType[] ) => {
return buildings.map(b => b.address.street.title)
}
export const getStreetsTitlesOfHouses = ( houses: HouseType[] ) => {
return houses.map(h => h.address.street.title)
}