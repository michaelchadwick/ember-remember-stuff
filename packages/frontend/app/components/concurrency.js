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
    // console.log('countTask1.perform()');
    try {
      this.countTask1Count += 1;
      await forever;
    } catch (e) {
      if (!didCancel(e)) {
        // re-throw the non-cancelation error
        throw e;
      } else {
        console.log('countTask1 didCancel');
      }
    } finally {
      console.log('FINALLY countTask1');
      // finally blocks always get called,
      // even when the task is being canceled
      this.decrementProperty('countTask1Count');
      this.countTask1Count -= 1;
    }
  });

  @action
  performCountTask1() {
    let task = this.countTask1;
    let taskInstance = task.perform();
    console.log('performCountTask1() taskInstance', taskInstance);
    this.countTask1MostRecentInstance = taskInstance;
  }

  @action
  async cancelAllCountTask1Instances() {
    const myTask = this.countTask1;
    console.log('cancelAllTask1Instances() myTask', myTask);
    const myTaskCancelled = await myTask.cancelAll();
    // this.task1Count = 0;
    console.log('cancelAllTask1Instances() myTaskCancelled', myTaskCancelled);
  }

  @action
  cancelCountTask1MostRecentInstance() {
    const mostRecent = this.countTask1MostRecentInstance;
    console.log('cancelMostRecentCountTask1Instance()', mostRecent);
    mostRecent.cancel();
  }

  waitTask1 = task(async () => {
    this.waitTask1Status = 'Gimme one second...';
    await timeout(1000);
    this.waitTask1Status = 'Gimme one more second...';
    await timeout(1000);
    this.waitTask1Status = "OK, I'm done.";
    console.log('waitTask1(local) completed');
  });

  @action
  performWaitTask1() {
    let task = this.waitTask1;
    let taskInstance = task.perform();
    console.log('performWaitTask1(local) taskInstance', taskInstance);
  }

  waitTask2 = restartableTask(async () => {
    this.waitTask2Status = 'Gimme one second...';
    await timeout(1000);
    this.waitTask2Status = 'Gimme one more second...';
    await timeout(1000);
    this.waitTask2Status = "OK, I'm done.";
    console.log('waitTask2(local) completed');
  });

  @action
  performWaitTask2() {
    let task = this.waitTask2;
    let taskInstance = task.perform();
    console.log('performWaitTask2(local) taskInstance', taskInstance);
  }

  waitTask3 = task(async () => {
    this.waitTask3Status = 'Requesting from API...';
    this.waitTask3Json = null;

    const result = await fetch(this.remoteApi);
    console.log('waitTask3(remote) result', result);
    const json = await result.json();
    this.waitTask3Json = JSON.stringify(json.items, undefined, 2);
    this.waitTask3Status = "OK, I'm done.";
    console.log('waitTask3(remote) completed');
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
    console.log('waitTask4(remote) result', result);
    const json = await result.json();
    this.waitTask4Json = JSON.stringify(json.items, undefined, 2);
    this.waitTask4Status = "OK, I'm done.";
    console.log('waitTask4(remote) completed');
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
      console.log('waitTask5(remote) succeeded', result);
      const json = await result.json();
      this.waitTask5Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask5Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.log(`waitTask5(remote) canceled with reason: ${this.signal.reason}`);
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
      console.log('waitTask5(remote) completed');
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
      console.log('waitTask6 succeeded, result:', result);
      const json = await result.json();
      this.waitTask6Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask6Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.log(`waitTask6(remote) canceled with reason: ${this.signal.reason}`);
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
      console.log('waitTask6(remote) completed');
    }
  });

  @action
  performWaitTask6() {
    console.log('performWaitTask6');
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
      console.log('waitTask7 succeeded, result:', result);
      const json = await result.json();
      console.log('json', json);
      this.waitTask7Json = JSON.stringify(json.items, undefined, 2);
      this.waitTask7Status = 'OK, I succeeded!';
    } catch (e) {
      if (this.signal.aborted) {
        if (this.signal.reason) {
          console.log(`waitTask7(remote) canceled with reason: ${this.signal.reason}`);
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
      console.log('waitTask7(remote) completed');
    }
  });

  performWaitTask7 = task(async () => {
    console.log('performWaitTask7');
    if (this.waitTask7.isRunning) {
      this.controller.abort('running query canceled so new one could run');
    }
    this.controller = new AbortController();
    this.signal = this.controller.signal;

    await this.waitTask7.perform();
  });
}
