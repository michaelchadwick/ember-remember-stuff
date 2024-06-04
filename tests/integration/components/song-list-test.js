import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | song-list', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    const songs = await this.owner.lookup('service:store').findAll('song');

    this.set('songs', songs);

    await render(hbs`<SongList @songs={{this.songs}}/>`);

    assert.dom('.song-list').exists();
  });
});
