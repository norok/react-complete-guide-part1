import React, { Component } from 'react';
import './App.css';
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
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px"
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle}
                onClick={this.togglePersonshandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
