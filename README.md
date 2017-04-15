# react-scripts for electron apps

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.

#### Use
```bash
create-react-app <my_app> --scripts-version react-electron-scripts
```
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
