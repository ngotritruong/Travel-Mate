const assert = require('assert');
const registerUser = require('./register');

describe('registerUser', () => {
  it('should return true if user is registered', () => {
    const result = registerUser('John', 'Doe');
    assert.equal(result, true);
  });
});