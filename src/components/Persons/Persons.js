import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

// This for arrow functions means a direct return statement
const persons = (props) =>
    props.persons.map((person, index) => {
        return (
            <ErrorBoundary key={person.id}>
                <Person
                    key={person.id}
                    click={() => {props.clicked(index)}}
                    name={person.name}
                    age={person.age}
                    change={(event) => {props.changed(event, person.id)}} />
            </ErrorBoundary>
        );
    });

export default persons;