import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    // this works thanks to Radium
    const style = {
        "@media(min-width: 500px)": {
            width: "450px"
        }
    };
    return (
        <div className="Person" style={style}>
            <h4 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default Radium(person);