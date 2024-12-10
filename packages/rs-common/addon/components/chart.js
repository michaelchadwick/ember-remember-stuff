import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { restartableTask, timeout } from 'ember-concurrency';

export default class ChartComponent extends Component {
  @tracked tooltipContent = null;
  @tracked tooltipTitle = null;

  donutData = [
    {
      data: 180,
      description: '<strong>Super cool</strong> things!',
      label: '18%',
      meta: {
        id: 10,
      },
      percentage: '18',
      title: 'Super Cool Things',
    },
    {
      data: 280,
      description: 'Uh, moderately fine things, I suppose.',
      label: '28%',
      meta: {
        id: 20,
      },
      percentage: '28',
      title: 'Moderately Fine Things',
    },
    {
      data: 220,
      description: 'Very awesome things, man.',
      label: '22%',
      meta: {
        id: 30,
      },
      percentage: '22',
      title: 'Very Awesome Things',
    },
    {
      data: 200,
      description: 'Well, these are sufficient things.',
      label: '20%',
      meta: {
        id: 40,
      },
      percentage: '20',
      title: 'Sufficient Things',
    },
    {
      data: 120,
      description: 'Look, these things are just kinda neat, I guess.',
      label: '12%',
      meta: {
        id: 50,
      },
      percentage: '12',
      title: 'Kinda Neat Things',
    },
  ];

  donutHover = restartableTask(async (obj) => {
    console.log('donutHover', obj);
    console.log('isIcon?', this.args.isIcon ? 'icon' : 'not icon');

    await timeout(0);

    if (this.args.isIcon || !obj || obj.empty) {
      this.tooltipTitle = null;
      this.tooltipContent = null;
    }

    this.tooltipTitle = htmlSafe(obj.title);
    this.tooltipContent = htmlSafe(obj.description);
  });
}
