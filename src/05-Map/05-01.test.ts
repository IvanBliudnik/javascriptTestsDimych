import {createGreetingMessage, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, ManType} from "./05";
import {city} from "../02-Object/02.test";


let people: ManType[] = [];
beforeEach(()=> {
people = [
    {name: "Andrew Ivanov", age: 24},
    {name: "Alexander Petrov", age: 74},
    {name: "Dmitry Sidorov", age: 14},
]
})
test("Should get array message", () => {
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe(`Hello Andrew. Welcome to IT-Incubator`);
    expect(messages[1]).toBe(`Hello Alexander. Welcome to IT-Incubator`);
    expect(messages[2]).toBe(`Hello Dmitry. Welcome to IT-Incubator`);
})


// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Hogwarts street");
})