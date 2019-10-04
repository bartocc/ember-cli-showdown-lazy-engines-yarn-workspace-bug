import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('[my-engine] Acceptance', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /my-engine', async function(assert) {
    const uri = '/my-engine';
    await visit(uri);
    assert.equal(currentURL(), uri);
  });
});
