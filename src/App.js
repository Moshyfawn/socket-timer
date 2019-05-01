import React, { PureComponent } from 'react';
import { subscribeToTimer } from './api';

import './App.css';

class App extends PureComponent {

  state = { timestamp: 'no timestamp yet' };

  componentDidMount = () => {
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    )
  }
}

export default App;
