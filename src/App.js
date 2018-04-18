import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Norok",  age: 35 },
      { name: "Nickale",  age: 28 },
      { name: "John",  age: 89 }      
    ]
  }

  switchNameHandler = (newName, newAge) => {
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: "Nickale Yaang", age: 28 },
        { name: "John XS", age: 91 } 
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Norokao", age: 31 },
        { name: event.target.value, age: 28 },
        { name: "Johnzão", age: 91 } 
      ]
    });
  }

  render() {
    // this is ugly D: but useful!
    const buttonStyle = {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle}
                onClick={() => this.switchNameHandler("Norok Qantoqen", 33)}>Switch Name</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "Norokin", 34)}>My hobby is killing targets.
        </Person>
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                change={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
