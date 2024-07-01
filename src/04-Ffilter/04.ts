import {CityType, governmentBuildingsType} from "../02-Object/02-02";
//
// const ages = [10, 20, 22, 1, 100, 90, 14];
// const predicate = (age: number) => age > 90;
// const oldAges = [100];
//
// export type CourseType = {
//     title: string,
//     price: number
// }
//
//
// const cheapPredicate = (courses: CourseType) => {
//     return courses.price < 160
// }
// const cheapCourses = [
//     {title: "CSS", price: 110},
//     {title: "React", price: 150},
// ]
// export function demolishHousesOnTheStreet(city: CityType,street: string) {
//     city.houses = city.houses.filter(h => h.address.street.title !== street)// адресс домы не равна той улице на которой он стоит
// }
// export function getHousesOnTheStreet(city: CityType,street: string) {
//     city.houses.filter(h => h.address.street.title === street)// адресс домы не равна той улице на которой он стоит
// }
export function getBuildingsWithStaffCountGreaterThen(buildings: governmentBuildingsType[], number: number) {
    return (
        buildings.filter(b => b.staffCount > number)
    )
}
