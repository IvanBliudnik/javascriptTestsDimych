export type StreetType = {
    title:string,
}

export type AdressType = {
    number?:number,
    street: StreetType,
}

export type HouseType = {
    buildedAt:number,
    repaired:false,
    address:AdressType,
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION", //можно сделать так если знаем что придёт в props
    budget: number,
    staffCount: number,
    address: AdressType, //потому что по свойствам подходит по запросу
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<governmentBuildingsType>,
    citizenNumber: number,
}