import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = "";
    let classes = [];
    if (props.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
      classes.push(styles.bold);
    }

    if (props.showPersons) {
        btnClass = styles.red;
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.togglePersons}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;