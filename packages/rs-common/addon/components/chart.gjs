import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { restartableTask, timeout } from 'ember-concurrency';
import perform from 'ember-concurrency/helpers/perform';
import SimpleChart from 'ember-simple-charts/components/simple-chart';
import getElement from 'rs-common/modifiers/get-element';

export default class ChartComponent extends Component {
  @tracked tooltipContent = null;
  @tracked tooltipTitle = null;

  get donutData() {
    return (
      this.args.data ?? [
        {
          data: 180,
          description: '<strong>Super cool</strong> things!',
          label: '18%',
          meta: {
            id: 10,
          },
          percentage: '18',
          textBackground: 'rgb(195, 238, 255)',
          textForeground: 'rgb(6, 91, 125)',
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
          textBackground: 'rgb(195, 255, 200)',
          textForeground: 'rgb(6, 125, 16)',
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
          textBackground: 'rgb(255, 231, 195)',
          textForeground: 'rgb(125, 79, 6)',
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
          textBackground: 'rgb(255, 195, 195)',
          textForeground: 'rgb(125, 6, 6)',
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
          textBackground: 'rgb(247, 195, 255)',
          textForeground: 'rgb(117, 6, 125)',
          title: 'Kinda Neat Things',
        },
      ]
    );
  }

  donutHover = restartableTask(async (obj) => {
    await timeout(100);
    if (this.args.isIcon || !obj || obj.empty) {
      this.tooltipTitle = null;
      this.tooltipContent = null;
    }

    this.tooltipTitle = htmlSafe(obj.title);
    this.tooltipContent = htmlSafe(obj.description);
  });

  @action
  logRootElement(element) {
    console.info('ChartComponent root element', element);
  }
  <template>
    <div
      class="chart{{unless @isIcon ' not-icon'}}"
      {{getElement this.logRootElement}}
      data-test-chart
      ...attributes
    >
      <SimpleChart
        @name={{@name}}
        @isIcon={{@isIcon}}
        @data={{this.donutData}}
        @hover={{perform this.donutHover}}
        @leave={{perform this.donutHover}}
        as |chart|
      >
        {{#if this.tooltipContent}}
          <chart.tooltip @title={{this.tooltipTitle}}>
            {{this.tooltipContent}}
          </chart.tooltip>
        {{/if}}
      </SimpleChart>
    </div>
  </template>
}
