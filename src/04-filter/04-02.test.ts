import {CityType} from "../02-Object/02-02";
import {getBuildingsWithStaffCountGreaterThen} from "./04";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}},
            },
            {
                buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}},
            },
            {
                buildedAt: 2020, repaired: false, address: {number: 200, street: {title: "Happy street"}},
            },
        ],
        governmentBuildings:[
            {type:"HOSPITAL", budget:200000, staffCount:200, address: {street:{title:"Central Str"}}},
            {type:"FIRE-STATION", budget:500000, staffCount:1000, address: {street:{title:"Souths park str"}}},
        ],
        citizenNumber:100000,
    }
})
// test("Houses should be destroyed", () => {
//     demolishHousesOnTheStreet(city, "Happy street");
//     expect(city.houses.length).toBe(1);
//     expect(city.houses[0].id).toBe(1);
// });

// test("list of streets titles of houses", () => {
//     let happyHouses = getHousesOnTheStreet(h.address.street,"Happy street");
//     let whiteHouses = getHousesOnTheStreet(city.houses, "White street");
//
//     expect(happyHouses.length).toBe(2);
//     expect(whiteHouses.length).toBe(1);
// });
//
test("buildings with correct staff count", () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThen(
            city.governmentBuildings,
            100);
    expect(buildings[0].type).toBe("HOSPITAL");
    expect(buildings[1].type).toBe("");
});