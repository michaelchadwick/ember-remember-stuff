import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { didCancel, restartableTask, task, timeout, forever } from 'ember-concurrency';

export default class ConcurrencyComponent extends Component {
  @tracked countTask1Count = 0;
  @tracked countTask1MostRecentInstance = null;
  @tracked waitTask1Status = null;
  @tracked waitTask2Status = null;
  @tracked waitTask3Status = 'Ready to request';
  @tracked waitTask3Json = null;
  @tracked waitTask4Status = 'Ready to request';
  @tracked waitTask4Json = null;
  @tracked waitTask5Status = 'Ready to request';
  @tracked waitTask5Json = null;
  @tracked waitTask6Status = 'Ready to request';
  @tracked waitTask6Json = null;
  @tracked waitTask7Status = 'Ready to request';
  @tracked waitTask7Json = null;

  remoteApi = 'https://dave.neb.host?json&size=100';
  controller = new AbortController();
  signal = this.controller.signal;

  countTask1 = task(async () => {
    // console.info('countTask1.perform()');
    try {
      this.countTask1Count += 1;
      await forever;
    } catch (e) {
      if (!didCancel(e)) {
        // re-throw the non-cancelation error
        throw e;
      } else {
        console.info('countTask1 didCancel');
      }
    } finally {
      console.info('FINALLY countTask1');
      // finally blocks always get called,
      // even when the task is being canceled
      this.countTask1Count -= 1;
    }
  });

  @action
  performCountTask1() {
    let task = this.countTask1;
    let taskInstance = task.perform();
    console.info('performCountTask1() taskInstance', taskInstance);
    this.countTask1MostRecentInstance = taskInstance;
  }

  @action
  async cancelAllCountTask1Instances() {
    const myTask = this.countTask1;
    console.info('cancelAllTask1Instances() myTask', myTask);
    const myTaskCancelled = await myTask.cancelAll();
    // this.task1Count = 0;
    console.info('cancelAllTask1Instances() myTaskCancelled', myTaskCancelled);
  }

  @action
  cancelCountTask1MostRecentInstance() {
    const mostRecent = this.countTask1MostRecentInstance;
    console.info('cancelMostRecentCountTask1Instance()', mostRecent);
    mostRecent.cancel();
  }

  waitTask1 = task(async () => {
    this.waitTask1Status = 'Gimme one second...';
    await timeout(1000);
    this.waitTask1Status = 'Gimme one more second...';
    await timeout(1000);
    this.waitTask1Status = "OK, I'm done.";
    console.info('waitTask1(local) completed');
  });

  @action
  performWaitTask1() {
    let task = this.waitTask1;
    let taskInstance = task.perform();
    console.info('performWaitTask1(local) taskInstance', taskInstance);
  }

  waitTask2 = restartableTask(async () => {
    this.waitTask2Status = 'Gimme one second...';
    await timeout(1000);
    this.waitTask2Status = 'Gimme one more second...';
    await timeout(1000);
    this.waitTask2Status = "OK, I'm done.";
    console.info('waitTask2(local) completed');
  });

  @action
  performWaitTask2() {
    let task = this.waitTask2;
    let taskInstance = task.perform();
    console.info('performWaitTask2(local) taskInstance', taskInstance);
  }

  waitTask3 = task(async () => {
    this.waitTask3Status = 'Requesting from API...';
    this.waitTask3Json = null;

    const result = await fetch(this.remoteApi);
    console.info('waitTask3(remote) result', result);
    const json = await result.json();
    this.waitTask3Json = JSON.stringify(json.items, undefined, 2);
    this.waitTask3Status = "OK, I'm done.";
    console.info('waitTask3(remote) completed');
  });

  @action
  performWaitTask3() {
    let task = this.waitTask3;
    task.perform();
  }

  waitTask4 = restartableTask(async () => {
    this.waitTask4Status = 'Requesting from API...';
    this.waitTask4Json = null;

    const result = await fetch(this.remoteApi);
    console.info('waitTask4(remote) result', result);
    const json = await result.json();
    this.waitTask4Json = JSON.stringify(json.items, undefined, 2);
    this.waitTask4Status = "OK, I'm done.";
    console.info('waitTask4(remote) completed');
  });

  @action
  performWaitTask4() {
    let task = this.waitTask4;
    task.perform();
  }

  waitTask5 = restartableTask(async () => {
    this.waitTask5Status = 'Requesting from API...';
    this.waitTask5Json = null;

    try {
      const result = await fetch(this.remoteApi, {
        method: 'get',
        signal: this.signal,
      });
      console.info('waitTask5(remote) succeeded', result);
      const json = await result.json();
      this.waitTask5Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask5Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.info(`waitTask5(remote) canceled with reason: ${this.signal.reason}`);
          this.waitTask5Status = `I was canceled (${this.signal.reason}), so no payload.`;
        } else {
          console.warn('waitTask5(remote) canceled but no reason was given.');
          this.waitTask5Status = 'I was canceled with no reason, so no payload.';
        }
      } else {
        console.error('waitTask5(remote) failed due to unknown error', e);
        this.waitTask5Status = "I was canceled, but I don't know why.";
      }
    } finally {
      console.info('waitTask5(remote) completed');
    }
  });

  @action
  performWaitTask5() {
    let task = this.waitTask5;
    task.perform();
  }

  @action
  cancelWaitTask5() {
    this.controller.abort('manually stopped by button');
  }

  waitTask6 = restartableTask(async () => {
    this.waitTask6Status = 'Requesting from API...';
    this.waitTask6Json = null;

    try {
      const result = await fetch(this.remoteApi, {
        method: 'get',
        signal: this.signal,
      });
      console.info('waitTask6 succeeded, result:', result);
      const json = await result.json();
      this.waitTask6Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask6Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.info(`waitTask6(remote) canceled with reason: ${this.signal.reason}`);
          this.waitTask6Status = `I was canceled (${this.signal.reason}), so no payload.`;
        } else {
          console.warn('waitTask6(remote) canceled but no reason was given.');
          this.waitTask6Status = 'I was canceled with no reason, so no payload.';
        }
      } else {
        console.error('waitTask6(remote) failed due to unknown error', e);
        this.waitTask6Status = "I was canceled, but I don't know why.";
      }
    } finally {
      console.info('waitTask6(remote) completed');
    }
  });

  @action
  performWaitTask6() {
    console.info('performWaitTask6');
    if (this.waitTask6.isRunning) {
      this.controller.abort('running query canceled so new one could run');
    }
    this.controller = new AbortController();
    this.signal = this.controller.signal;

    let task = this.waitTask6;
    task.perform();
  }

  waitTask7 = task(async () => {
    this.waitTask7Status = 'Requesting from API...';
    this.waitTask7Json = null;

    try {
      const result = await fetch(this.remoteApi, {
        method: 'get',
        signal: this.signal,
      });
      console.info('waitTask7 succeeded, result:', result);
      const json = await result.json();
      console.info('json', json);
      this.waitTask7Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask7Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.info(`waitTask7(remote) canceled with reason: ${this.signal.reason}`);
          this.waitTask7Status = `I was canceled (${this.signal.reason}), so no payload.`;
        } else {
          console.warn('waitTask7(remote) canceled but no reason was given.');
          this.waitTask7Status = 'I was canceled with no reason, so no payload.';
        }
      } else {
        console.error('waitTask7(remote) failed due to unknown error', e);
        this.waitTask7Status = "I was canceled, but I don't know why.";
      }
    } finally {
      console.info('waitTask7(remote) completed');
    }
  });

  performWaitTask7 = task(async () => {
    console.info('performWaitTask7');
    if (this.waitTask7.isRunning) {
      this.controller.abort('running query canceled so new one could run');
    }
    this.controller = new AbortController();
    this.signal = this.controller.signal;

    await this.waitTask7.perform();
  });
}
