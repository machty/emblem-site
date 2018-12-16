import Parser from 'js-yaml';
import Yaml from 'emblem-site/yaml/glimmer';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';

const parsed = Parser.load(Yaml);

module('integration - yaml - glimmer', function(hooks) {
  setupRenderingTest(hooks);

  parsed.forEach(group => {
    test(`group: ${ group.title }`, async function(assert) {
      this.code = group.emblem;

      await render(hbs`
        {{ emblem-preview code=code showingEditor=false }}
      `);

      assert.equal(this.$('div.error').length, 0, 'Nothing exploded!');
    });
  });
});
