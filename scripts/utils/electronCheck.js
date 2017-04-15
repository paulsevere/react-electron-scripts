'use strict';

const { exec, execSync } = require('child_process');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const prompt = require('react-dev-utils/prompt');

function handlePromptForInstall(resolve, reject) {
  return function(ans) {
    if (ans) {
      try {
        if (useYarn) {
          spawn.sync(cli, ['global', 'add', 'electron'], { stdio: 'inherit' });
        } else {
          spawn.sync(cli, ['install', '-g', 'electron'], { stdio: 'inherit' });
        }
      } catch (err) {
        reject(err);
      }
      resolve();
    } else {
      console.log("Install on your own with 'npm i -g electron'");
      reject(null);
    }
  };
}

function electronCheck() {
  return new Promise((resolve, reject) => {
    if (!elec) {
      console.log(chalk.red('Electron must be installed globally'));
      prompt(chalk.green('Install now?'), true).then(
        handlePromptForInstall(resolve, reject)
      );
    } else {
      resolve();
    }
  });
}

module.exports = electronCheck;
