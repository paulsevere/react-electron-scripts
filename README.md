# react-scripts for electron apps



This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).  It is a fork of the official react-scripts package aimed at bringing the convenience of "create-react-app" to desktop app development with electron.  


[Repository](https://github.com/paulsevere/react-electron-scripts)


#### Use
```bash
create-react-app <my_app> --scripts-version react-electron-scripts
```
<span style="color:rgb(146, 222, 170)"> NOTE:  </span>   This package uses a globally installed electron version (Using the electron binary from a locally installed was causing problems for some reason).  If you have not yet installed electron, you will be prompted.

<span style="color:rgb(146, 222, 170)"> NOTE:  </span>   running npm/yarn start will run the webpack dev server and start the electron app.  Changes to the code run by the renderer process will cause a hot reload.  To restart the main process, close the spawned application (you will be prompted to restart).  To run the main process indepentent of the webpack dev server, run:
```bash
electron .
```

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.

#### App source Structure
* src/
  * Contains React app skeleton including a react component implementing the close, minimize and fullscreen buttons in a MacOS style (replacing the native buttons).
* main_process/
  * __main.js__
    * Main electron process.
* index.js
  * Kicks off main process.


#### TODO
- [ ] Create scripts for building and bundling electron app.
