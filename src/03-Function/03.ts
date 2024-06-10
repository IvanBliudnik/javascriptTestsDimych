//
// export const sum = (a:number,b:number) => {
//     return a + b
// }
// export function sum(a:number,b:number) {
//     return a + b
// }
//одно и тоже
// const res = sum( sum(1,2), sum(1,3)) //7


import {student, StudentType} from "../02-Object/02";
import { governmentBuildingsType, HouseType} from "../02-Object/02-02";

export const addSkill = (st: StudentType, skill:string) => {
    st.technologies.push({id: new Date().getTime(),title:skill})
}
// export function addSkill(st: StudentType, skill:string) {
//     st.technologies.push({id: new Date().getTime(),title:skill})
// }
//одно и тоже
export function makeStudentActive(st:StudentType) {
    st.isActive = true;
};
export const doesStudentLivesIN = (st:StudentType, cityName: string) => {
    return st.adress.city.title === cityName;
}
export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget;
}
export function repairHouse(houseType: HouseType) {
    houseType.repaired = true;
}
export function toFireStaff(building: governmentBuildingsType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}
export function toHireStaff(building: governmentBuildingsType, staffCountToFire: number) {
    building.staffCount += staffCountToFire;
}
