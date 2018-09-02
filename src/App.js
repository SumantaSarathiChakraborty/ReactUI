import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Rich', age: 32},
      {name: 'John', age: 42}
    ]
  }

  reactNameHandler = (newName) => {
    //console.log('was clicked');    
    this.setState( {
      persons: [
        {name: newName, age: 32},
        {name: 'John', age: 4}
      ]
    } )
  }

  render() {
     return (
      <div className="App">
        <h1>Hi my name is Debayan Paul</h1>
        <button onClick={() => this.reactNameHandler('Riyan!!')}>Switc Names</button>
        <Person />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.reactNameHandler.bind(this, 'Rich!')}/>
        <Person name="max" age="28" />
        <Person name="max" age="28">My hobbe is Racing</Person>
      </div>
    );

    //return React.createElement('div', null, 'h1', 'Hi my name is Debayan Paul')
    //return React.createElement('div', null, React.createElement('h1', null, 'Hi my name is Debayan Paul')); 
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi my name is Debayan Paul')); 
  }
}

export default App;
