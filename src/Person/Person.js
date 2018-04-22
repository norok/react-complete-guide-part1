import React from 'react';
import styles from './Person.css';

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={styles.Person}>
            <h4 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default person;