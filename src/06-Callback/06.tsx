import {HouseType} from "../02-Object/02-02";
//simple callback
// export const createMessage = (houses: Array<HouseType>) => {
//     let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}!`
//     let newArray = houses.map(callbackfn) //simple callback
//     return newArray
// }
//2
// const callback = () => {
//     alert("Hey")
//     return 12
// }
// window.setTimeout(callback, 1000)
//3
export const User = () => {
    const deleteUser = () => {
        alert("user deleted successfully")
    }
    const saveUser = () => {
        alert("user saved successfully")
    }

        return <div>
            <div>Dimych</div>
            <button onClick={deleteUser}>Delete User</button>
            <button onClick={saveUser}>Save User</button>
        </div>
    }