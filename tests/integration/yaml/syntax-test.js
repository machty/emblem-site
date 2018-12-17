import docs from 'emblem-site/docs/syntax';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';

module('integration - docs - syntax', function(hooks) {
  setupRenderingTest(hooks);

  docs.forEach(group => {
    test(`group: ${ group.title }`, async function(assert) {
      this.code = group.emblem;

      await render(hbs`
        {{ emblem-preview code=code showingEditor=false }}
      `);

      assert.equal(this.$('div.error').length, 0, 'Nothing exploded!');
    });
  });
});
