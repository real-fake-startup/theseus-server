const assert = require('assert');
const app = require('../../src/app');

describe('\'todonts\' service', () => {
  it('registered the service', () => {
    const service = app.service('todonts');

    assert.ok(service, 'Registered the service');
  });
});
