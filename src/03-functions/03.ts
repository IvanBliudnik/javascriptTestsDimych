// const sum = (a:number, b:number) => {
//     return a + b
// }
// const res = sum(sum(1,2), sum(1,3))

import {CityType, governmentBuildingsType, HouseType} from "../02-Object/02-02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}
export function makeStudentActive(s: StudentType) {
    s.isActive = true
}
export const changeStudentLive = (s:StudentType, cityName: string) => {
    return s.adress.city.title === cityName
}
export const changeBudget = (building:governmentBuildingsType, budget: number) => {
    building.budget += budget
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}
export const toFireStaff = (buildings: governmentBuildingsType, staffCountToFire: number) => {
    buildings.staffCount -= staffCountToFire
}
export const toHireStaff = (buildings: governmentBuildingsType, staffCountToHire: number) => {
    buildings.staffCount += staffCountToHire
}
export const createGreetingMessage = (city: CityType) => {
    return "Hello " + city.title + " citizens. I wish you be happy for all " + city.citizenNumber
}
