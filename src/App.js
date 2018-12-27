import React, { Component } from 'react';
import './App.css';
import fetch from 'unfetch';

class App extends Component {
  state = {
    loading: true,
    users: [],
  };
  componentDidMount() {
    fetch(process.env.REACT_APP_END_POINT + '/getUsers')
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ loading: false, users: res });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          'Loading...'
        ) : (
          <ul>
            {this.state.users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
