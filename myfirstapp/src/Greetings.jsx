import React from 'react';

export default function Greetings(props){
    return (
        <div>
            <h3>Hello, {props.fn}! , Your age is {props.age}</h3>
            <h3>Your favourite color is {props.favcolor}</h3>
        </div>
    )
}


