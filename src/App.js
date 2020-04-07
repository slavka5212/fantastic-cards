import React, {Component} from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons: users }));
  }

  render() {
    const { persons, searchText } = this.state;
    const filteredPersons = persons.filter(person => 
      person.name.toLowerCase().includes(searchText.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Fantastic kitties</h1>
        <SearchBox 
          placeholder="Search kitties"
          onChange={e => this.setState({ searchText: e.target.value})} 
         />
        <CardList persons={filteredPersons} />

      </div>
    );
  }
}

export default App;
