import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

const robotsApi = [
  {id:1, name:'John', email: 'john@rangle.io'},
  {id:2, name:'Jane', email: 'jane@rangle.io'},
  {id:3, name:'Fred', email: 'fred@rangle.io'},
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: robotsApi,
      searchTerm: ''
    }

    // // old way
    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    const { robots, searchTerm } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
      <div>
        <div className="tc">
          <h1>RoboDex</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
