import Application from 'frontend/app';
import config from 'frontend/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { forceModulesToBeLoaded, sendCoverage } from 'ember-cli-code-coverage/test-support';
import './helpers/intersection-observing';
import './helpers/percy-snapshot-name';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

// document.addEventListener('DOMContentLoaded', function () {
//   if (Notification.permission !== 'granted') {
//     Notification.requestPermission();
//   }
// });

QUnit.done(async function (details) {
  console.log(
    'Total: ' +
      details.total +
      ' Failed: ' +
      details.failed +
      ' Passed: ' +
      details.passed +
      ' Runtime: ' +
      details.runtime / 1000 +
      's',
  );

  forceModulesToBeLoaded();
  await sendCoverage();

  // if (Notification.permission === 'granted') {
  //   new Notification('Test Suite Finished');
  // }

  // let audio = new Audio('../job_done.mp3');
  // audio.play().catch((error) => {
  //   console.error('Failed to play notification sound:', error);
  // });

  // const { exec } = require('child_process');
  // const cmd = `../test-done-alert.php`;

  // process.exec(cmd, (error, stderr) => {
  //   if (error) {
  //     console.log(`error: ${error.message}`);
  //   }
  //   if (stderr) {
  //     console.log(`stderr: ${stderr}`);
  //   }
  // });
});

start();
