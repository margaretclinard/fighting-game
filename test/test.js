/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Game   = require(process.cwd() + '/lib/Game');

describe('Game', function () {
  describe('constructor', function () {
    it('should have a default name', function() {
      var player = new Player();
      expect(player.name).to.equal('Player 1');
    });
  });
});
