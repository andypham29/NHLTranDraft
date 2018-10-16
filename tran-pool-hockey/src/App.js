import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player';


class App extends Component {
    state = {
        response: '',
        players: [
            {name: 'Kotkaniemi', position: 'Center'},
            {name: 'Suzuki', position: 'Center'},
            {name: 'Poehling', position: 'Center'}
        ]
    };


    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    switchNameHandler = () => {
      this.setState({
          players:[
              { name: 'Primeau', position: 'Goalie'},
              { name: 'Fleury', position: 'Defense'},
              { name: 'Brooke', position: 'Defense'}
          ]
      })
    };
  render() {
    return (
      <div className="App">
          <h1>Hello World</h1>
          <button onClick = {this.switchNameHandler}>Switch</button>
          {this.state.response}
          <Player name={this.state.players[0].name} position={this.state.players[0].position}> 3rd overall, 2018 draft</Player>
          <Player name={this.state.players[1].name} position={this.state.players[1].position}> 3rd overall, 2018 draft</Player>
          <Player name={this.state.players[2].name} position={this.state.players[2].position}> 3rd overall, 2018 draft</Player>
      </div>
    );
    // actual code compiled in the background
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World !!!"));
  }
}

export default App;
