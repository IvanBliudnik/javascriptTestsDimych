export type StreetType = {
    title:string,
}

export type AdressType = {
    number?:number,
    street: StreetType,
}

export type HouseType = {
    id?: number
    buildedAt:number,
    repaired:boolean,
    address:AdressType,
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION", //можно сделать так если знаем что придёт в props
    budget: number,
    staffCount: number,
    address: AdressType, //потому что по свойствам подходит по запросу как в Test 01
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<governmentBuildingsType>,
    citizenNumber: number,
}