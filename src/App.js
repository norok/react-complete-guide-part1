import React, { Component } from 'react';
import styles from './App.css'; // this transforms CSS code into an object
import Person from './Person/Person';

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
    // this is ugly D: but useful!
    const buttonStyle = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      transition: "all 200ms ease-out 0s",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => {this.deletePersonHandler(index)}}
                name={person.name}
                age={person.age}
                change={(event) => {this.nameChangedHandler(event, person.id)}} />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={buttonStyle}
                onClick={this.togglePersonshandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
