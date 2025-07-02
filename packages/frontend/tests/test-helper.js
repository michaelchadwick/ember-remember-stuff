import Application from 'frontend/app';
import config from 'frontend/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import DefaultAdapter from 'ember-cli-page-object/adapters/rfc268';
import { setAdapter } from 'ember-cli-page-object/adapters';
import { setRunOptions } from 'ember-a11y-testing/test-support';
import './helpers/intersection-observing';
import './helpers/percy-snapshot-name';
import { forceModulesToBeLoaded, sendCoverage } from 'ember-cli-code-coverage/test-support';

setRunOptions({
  preload: false,
});

// document.addEventListener('DOMContentLoaded', function () {
//   if (Notification.permission !== 'granted') {
//     Notification.requestPermission();
//   }
// });

const displayTestStats = (details) => {
  // console some helpful stats
  console.info(
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
};
const notify = () => {
  console.info('notify() TODO');
  //   if (Notification.permission === 'granted') {
  //     new Notification('Test Suite Finished');
  //   }
  //   let audio = new Audio('../job_done.mp3');
  //   audio.play().catch((error) => {
  //     console.error('Failed to play notification sound:', error);
  //   });
  //   const { exec } = require('child_process');
  //   const cmd = `../test-done-alert.php`;
  //   process.exec(cmd, (error, stderr) => {
  //     if (error) {
  //       console.log(`error: ${error.message}`);
  //     }
  //     if (stderr) {
  //       console.log(`stderr: ${stderr}`);
  //     }
  //   });
};

//Needed for: https://github.com/testem/testem/issues/1577
//See: https://github.com/ember-cli-code-coverage/ember-cli-code-coverage/issues/420
if (config.APP.isRunningWithServerArgs) {
  // until Testem is patched, this will fail to POST coverage in CI mode (running tests with -s or --server as an argument)
  // Ref: https://github.com/testem/testem/issues/1577
  QUnit.done(async function (details) {
    forceModulesToBeLoaded();
    await sendCoverage();

    displayTestStats(details);
    notify();

    console.info('config.APP.isRunningWithServerArgs: TRUE');
  });
} else {
  //eslint-disable-next-line no-undef
  Testem.afterTests(function (config, data, callback) {
    forceModulesToBeLoaded();
    sendCoverage(callback);

    console.info('config.APP.isRunningWithServerArgs: FALSE');
  });
}

setAdapter(new DefaultAdapter());
setApplication(Application.create(config.APP));

setup(QUnit.assert);

console.info('INFO: starting QUnit...');

start();
