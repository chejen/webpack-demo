var code = require("../tmp/code.js");
var assert = require('chai').assert;
describe('code', function() {
  describe('sum', function () {
    it('should return 5', function () {
      assert.equal(5, code.sum(2, 3));
    });
  });
});
