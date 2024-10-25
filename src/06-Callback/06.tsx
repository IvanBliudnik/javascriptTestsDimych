// import {HouseType} from "../02-Object/02-02";
import React, {ChangeEvent, MouseEvent} from "react";
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
    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
        // alert("user deleted successfully")
    }
    const saveUser = () => {
        alert("user saved successfully")
    }
    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + e.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
        return <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button onClick={deleteUser} name={"delete"} >Delete User</button>
            <div onClick={saveUser}>Save User</div>
        {/*    div тоже сработает на события*/}
        </div>
    }