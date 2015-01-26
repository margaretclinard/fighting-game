/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Game   = require(process.cwd() + '/lib/Game'),
    Weapon = require(process.cwd() + '/lib/Weapon'),
    Player = require(process.cwd() + '/lib/Player');

describe('Player', function () {
  describe('constructor for name with no argument', function () {
    it('should have a default name', function () {
      var player = new Player();
      expect(player.name).to.equal('Player');
    });
  });
   describe('constructor for name with argument', function () {
    it('should have the argument name', function () {
      var player = new Player({name: 'Mario'});
      expect(player.name).to.equal('Mario');
    });
  });
});

describe('Weapon', function () {
  describe('constructor for weapon', function () {
    it('should accept an argument', function () {
      var weapon = new Weapon({name: 'Sword', damage: 0.06});
      expect(weapon.name).to.equal('Sword');
      expect(weapon.ammo).to.equal(0);
      expect(weapon.accuracy).to.equal(0.94);
    });
  });
});
