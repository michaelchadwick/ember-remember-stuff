import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class LoremIpsumService extends Service {
  @tracked envApp = ENV.APP;
  @tracked corpus = [
    [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Cras nec vehicula neque, et facilisis eros.',
      'Sed vestibulum est sapien, fringilla semper nisi tincidunt et.',
      'Donec a ornare metus.',
      'Phasellus ornare mollis nisi, in vulputate eros accumsan id.',
      'Nullam auctor vel ante in euismod.',
      'Morbi condimentum lectus ante, ac ultrices leo laoreet at.',
      'Aliquam vel ex augue.',
      'Pellentesque gravida, ex a suscipit egestas, felis mi laoreet felis, quis pharetra augue lorem eu felis.',
    ],
    [
      'Quisque euismod mi quis arcu volutpat, eu varius leo commodo.',
      'Nam tempor nunc justo, eget posuere ipsum tristique at.',
      'Nullam convallis nisl justo, non lobortis tortor faucibus a.',
      'Morbi egestas ante erat, eget volutpat justo molestie vel.',
      'Sed luctus turpis nisl, a semper lacus commodo nec.',
      'Integer nec feugiat tortor.',
      'Ut commodo eros lacinia ex tempor iaculis.',
      'Integer ullamcorper nibh nisi, eget viverra augue viverra non.',
      'In semper auctor metus, et imperdiet mauris posuere id.',
      'Mauris egestas nulla justo.',
    ],
    [
      'Mauris id vulputate est.',
      'Curabitur eget libero in leo blandit mattis eget a erat.',
      'Nullam convallis vel dui dapibus elementum.',
      'Duis viverra, urna tincidunt interdum finibus, ex purus accumsan leo, et tincidunt nulla nibh ac sem.',
      'Pellentesque metus neque, sagittis tempor tincidunt at, accumsan eu leo.',
      'Curabitur erat urna, auctor nec massa a, suscipit tristique risus.',
      'Sed luctus, velit id dapibus convallis, arcu turpis auctor metus, ut vulputate eros mauris quis ex.',
      'Pellentesque mollis quam vel turpis mattis malesuada.',
    ],
    [
      'Curabitur neque dolor, vestibulum quis imperdiet et, egestas ut velit.',
      'Sed molestie ipsum in finibus euismod.',
      'Integer placerat nulla vel ullamcorper consequat.',
      'Vestibulum lobortis eros vel ante cursus imperdiet.',
      'Donec blandit varius turpis a tempor.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Nam aliquam, eros nec interdum egestas, sem lacus convallis arcu, nec dictum nulla magna ac dui.',
      'In ornare ex facilisis tortor scelerisque pharetra.',
      'Pellentesque dignissim tellus vitae aliquam lacinia.',
    ],
    [
      'Vivamus ornare libero orci, vel mollis massa malesuada sed.',
      'Aliquam erat est, bibendum quis faucibus quis, interdum ac risus.',
      'Cras accumsan massa ac mattis venenatis.',
      'Quisque efficitur non lorem et ullamcorper.',
      'Vivamus molestie pulvinar est ac facilisis.',
      'Morbi tempus ornare dui et elementum.',
      'Nam eget lobortis nisl.',
      'Etiam venenatis sem at lorem porttitor, vel auctor nibh luctus.',
      'Pellentesque id consequat augue, at rutrum orci.',
      'Donec gravida convallis tincidunt.',
      'Aenean maximus, urna id vehicula ullamcorper, dui purus aliquam velit, at tincidunt enim purus vitae sapien.',
      'Quisque pretium lorem vel sapien mollis, eu lacinia lacus volutpat.',
    ],
  ];

  async requestText(paragraphCount, sentenceCount) {
    let text = this.corpus.slice(0, paragraphCount);
    text.forEach((para, index) => {
      text[index] = para.slice(0, sentenceCount);
    });
    text.forEach((para, index) => {
      text[index] = `<p>${para.join(' ')}</p>`;
    });

    console.log('text', text);

    return text.join('');
  }
}
