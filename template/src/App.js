import React from 'react';
import TaskBar from './window/taskbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TaskBar />
        <div className="App-header">
          <h1>
            Welcome to your {' '}
            <span className="r-text">
              {'Electron '}
            </span>
            App
          </h1>
        </div>

      </div>
    );
  }
}

export default App;
