import React, {useState} from 'react';
import {ManType} from "../05-Map/05";

type PropsType = {
    title: string;
    man:ManType,
    food: Array<string>,
    car: {model:string}
}
//object
export const ManComponentObject:React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man} = props
    //можно сразу запихнуть значения которые ждём в пропс

    const [message, setMessage] = useState<string>("hello")
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            {/*rest props */}
            <div>{props.food}</div>
            <div>{props.car.model}</div>
        </div>
    );
};

//array
function useDimychState(m:string) {
    return [m, function (){}]
}
export const ManComponentArray:React.FC<PropsType> = ({title, man, ...props}) => {
    const [m, setMessage] = useDimychState("hello")
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            {/*rest props */}
            <div>{props.food}</div>
            <div>{props.car.model}</div>
        </div>
    );
};
