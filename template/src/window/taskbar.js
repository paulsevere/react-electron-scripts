import React from 'react';
import './taskbar.css';
const { remote } = require('electron');
class TaskBar extends React.Component {
  constructor(props) {
    super(props);
    window.taskbar = this;
    this.state = {
      fullscreen: remote.getCurrentWindow().isFullScreen()
    };
  }
  componentDidMount() {
    this.appWindow = remote.getCurrentWindow();
  }
  toggleFullScreen = () => {
    let { fullscreen } = this.state;
    this.appWindow.setFullScreen(!fullscreen);
    this.setState({ fullscreen: !fullscreen });
  };
  minimize = () => {
    this.appWindow.minimize();
  };
  close = () => {
    this.appWindow.close();
  };
  render() {
    return (
      <div className="titlebar">
        <div className="titlebar-stoplight">
          <div onClick={this.close} className="titlebar-close">
            <svg x="0px" y="0px" viewBox="0 0 6.4 6.4">
              <polygon
                fill="#4d0000"
                points="6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2"
              />
            </svg>
          </div>
          {this.state.fullscreen
            ? null
            : <div onClick={this.minimize} className="titlebar-minimize">
                <svg x="0px" y="0px" viewBox="0 0 8 1.1">
                  <rect fill="#995700" width="8" height="1.1" />
                </svg>
              </div>}

          <div onClick={this.toggleFullScreen} className="titlebar-fullscreen">
            <svg className="fullscreen-svg" x="0px" y="0px" viewBox="0 0 6 5.9">
              <path
                fill="#006400"
                d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"
              />
              <path
                fill="#006400"
                d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"
              />
            </svg>
            <svg className="maximize-svg" x="0px" y="0px" viewBox="0 0 7.9 7.9">
              <polygon
                fill="#006400"
                points="7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskBar;
