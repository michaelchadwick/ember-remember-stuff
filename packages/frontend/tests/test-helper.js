import Application from 'frontend/app';
import config from 'frontend/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { setupEmberOnerrorValidation } from 'ember-qunit';
import { forceModulesToBeLoaded, sendCoverage } from 'ember-cli-code-coverage/test-support';
import DefaultAdapter from 'ember-cli-page-object/adapters/rfc268';
import { setAdapter } from 'ember-cli-page-object/adapters';
import {
  setRunOptions,
  setupGlobalA11yHooks,
  setupQUnitA11yAuditToggle,
  setupConsoleLogger,
} from 'ember-a11y-testing/test-support';

import start from 'ember-exam/test-support/start';
// import './helpers/intersection-observing';
import './helpers/percy-snapshot-name';

setupConsoleLogger();
setRunOptions({
  preload: false,
});
setupGlobalA11yHooks(() => true);
setupQUnitA11yAuditToggle(QUnit);

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
const displayCustomNotification = () => {
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
  if (typeof QUnit !== 'undefined') {
    // until Testem is patched, this will fail to POST coverage in CI mode (running tests with -s or --server as an argument)
    // Ref: https://github.com/testem/testem/issues/1577
    QUnit.done(async function (details) {
      forceModulesToBeLoaded();
      await sendCoverage();

      displayTestStats(details);
      displayCustomNotification();
    });
  }
} else {
  if (typeof Testem !== 'undefined') {
    //eslint-disable-next-line no-undef
    Testem.afterTests(function (config, data, callback) {
      forceModulesToBeLoaded();
      sendCoverage(callback);
    });
  }
}

setAdapter(new DefaultAdapter());
setApplication(Application.create(config.APP));

setup(QUnit.assert);
setupEmberOnerrorValidation();
start();

console.info('INFO: starting QUnit...');
