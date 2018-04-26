import React, { Component } from 'react';
import styles from './App.css'; // this transforms CSS code into an object
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "qwre", name: "Norok",  age: 35 },
      { id: "asdf", name: "Nickale",  age: 28 },
      { id: "zxcv", name: "John",  age: 89 }
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // ES6 method (spread)
    // Copying the state before changing, then replacing it is the best practice
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonshandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersons={this.togglePersonshandler} />
        {persons}
      </div>
    );
  }
}

export default App;
