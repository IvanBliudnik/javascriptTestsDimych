export const usersObject = {
    "0" : "Dimych",
    "1" : "Natasha",
    "2" : "Valera",
    "3" : "Katya"
}
type UsersType = {
    [key: string]: { id: number; name: string },
}
export const users:UsersType = {
    "101" : {id: 101, name: "Dimych"},
    "2010" : {id: 2010, name: "Natasha"},
    "1231" : {id: 1231, name: "Valera"},
    "1" : {id: 1, name: "Katya"}
}
//тут сразу в ассоциативном массиве быстро нашли эл. нашли по id
// users[1]
let user = {id: 1000012, name: "Igor"};
users[user.id.toString()] = user
//добавили пользователя в массив users
delete users[user.id]
//удалили user по id из массива


//Обычный массив
export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 2010, name: "Natasha"},
    {id: 1231, name: "Valera"},
    {id: 1, name: "Katya"}
]
//не знаем порядковый номер, поэтому надо пробежаться
// usersArray.find(user => user.id === 1) //сложно
// let usersArrayCopy =  [...usersArray, user] //сложно добавили user в массив
// let usersArray =  usersArray.filter(u => u.id !== user.id)
// пропусти чуваков u у которых u.id не равна user.id (чувак который нужно удалить)
//сложно удалили user из массива
