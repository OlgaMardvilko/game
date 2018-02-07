(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _states = require('./states');

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(1000, 480, Phaser.AUTO);

Object.keys(states).forEach(function (state) {
  return GAME.state.add(state, states[state]);
});

GAME.state.start('Menu');

},{"./states":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = function (_Phaser$State) {
    _inherits(GameOver, _Phaser$State);

    function GameOver() {
        _classCallCheck(this, GameOver);

        return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).apply(this, arguments));
    }

    _createClass(GameOver, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#eee';
            this.game.load.image('gameover', './assets/images/gameover.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.add.button(200, 15, 'Play again', this.startGame, this);

            this.game.add.text(235, 350, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center" });
            this.game.add.text(350, 348, score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.state.start('Game');
        }
    }]);

    return GameOver;
}(Phaser.State);

exports.default = GameOver;
;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('./menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _preload = require('./preload');

Object.defineProperty(exports, 'Preload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preload).default;
  }
});

var _play = require('./play');

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _gameOver = require('./game-over');

Object.defineProperty(exports, 'GameOver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gameOver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./game-over":2,"./menu":4,"./play":5,"./preload":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'preload',
        value: function preload() {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.stage.backgroundColor = '#eee';
            this.game.load.image('menu', './img/menu.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.add.button(200, 15, 'menu', this.startGame, this);
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.state.start('Preload');
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;
;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var player1 = void 0;
var player2 = void 0;
var bullets1 = void 0;
var bullets2 = void 0;
var fireButton1 = void 0;
var fireButton2 = void 0;
var cursors = void 0;
var leftWASD = void 0;
var rightWASD = void 0;
var lives1 = void 0;
var lives2 = void 0;
var stateText = void 0;
var explosions = void 0;
var flay1 = void 0;
var flay2 = void 0;
var background = void 0;
var firingTimer = 0;
var bulletTime1 = 0;
var bulletTime2 = 0;
var bulletInterval = 700;

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
    }

    _createClass(Play, [{
        key: 'create',
        value: function create() {
            this.music = this.game.add.audio('playMusic');
            this.bulletHitSound = this.add.sound('bulletHit');
            this.enemyExplosionSound = this.add.sound('enemyExplosion');
            this.playerExplosionSound = this.add.sound('playerExplosion');
            this.gameOverSound = this.add.sound('gameOver');
            this.music.loopFull();

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            background = this.game.add.tileSprite(0, 0, 1000, 600, 'background');

            // Add player1
            player1 = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - 56, 'player1');
            player1.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(player1, Phaser.Physics.ARCADE);
            player1.body.collideWorldBounds = true;
            // Add animation player1
            flay1 = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - 0, 'flay1');
            flay1.animations.add('fly', [1, 2, 3, 4, 5, 6, 7, 8], 40);
            flay1.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(flay1, Phaser.Physics.ARCADE);
            flay1.body.collideWorldBounds = true;

            // Add player2
            player2 = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - (this.game.world.height - 75), 'player2');
            player2.anchor.setTo(0.5, 0.5);
            player2.angle = 180;
            this.game.physics.enable(player2, Phaser.Physics.ARCADE);
            player2.body.collideWorldBounds = true;
            // Add animation player2
            flay2 = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - (this.game.world.height - 25), 'flay2');
            flay2.animations.add('fly2', [1, 2, 3, 4, 5, 6, 7, 8], 40);
            flay2.anchor.setTo(0.5, 0.5);
            flay2.angle = 180;
            this.game.physics.enable(flay2, Phaser.Physics.ARCADE);
            flay2.body.collideWorldBounds = true;

            // Add player1 bullets
            bullets1 = this.game.add.group();
            bullets1.enableBody = true;
            bullets1.physicsBodyType = Phaser.Physics.ARCADE;
            bullets1.createMultiple(30, 'bullet1');
            bullets1.setAll('anchor.x', 0.5);
            bullets1.setAll('anchor.y', 3);
            bullets1.setAll('outOfBoundsKill', true);
            bullets1.setAll('checkWorldBounds', true);

            // Add player2 bullets
            bullets2 = this.game.add.group();
            bullets2.enableBody = true;
            bullets2.physicsBodyType = Phaser.Physics.ARCADE;
            bullets2.createMultiple(30, 'bullet2');
            bullets2.setAll('anchor.x', 0.5);
            bullets2.setAll('anchor.y', 3);
            bullets2.setAll('outOfBoundsKill', true);
            bullets2.setAll('checkWorldBounds', true);

            //  Lives player1
            lives1 = this.game.add.group();
            this.game.add.text(this.game.world.width - 80, this.game.world.height * 0.5 + 120, 'Player 1', { font: '20px Arial', fill: '#1d9ba9' });
            // lives icons
            for (var i = 0; i < 5; i++) {
                var ship1 = lives1.create(this.game.world.width - 40, this.game.world.height - 300 + 40 * i, 'ship1');
                ship1.anchor.setTo(0.5, 0.5);
                ship1.angle = 90;
                ship1.alpha = 0.6;
            }

            //  Lives player2
            lives2 = this.game.add.group();
            this.game.add.text(this.game.world.width - this.game.world.width + 15, this.game.world.height * 0.5 - 134, 'Player 2', { font: '20px Arial', fill: '#da1100' });
            // lives icons
            for (var j = 0; j < 5; j++) {
                var ship2 = lives2.create(this.game.world.width - this.game.world.width + 40, this.game.world.height * 0.5 - 90 + 40 * j, 'ship2');
                ship2.anchor.setTo(0.5, 0.5);
                ship2.angle = 90;
                ship2.alpha = 0.6;
            }

            // Add text when player1 or player2 game over
            stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '30px Arial', fill: '#fff' });
            stateText.anchor.setTo(0.5, 0.5);
            stateText.visible = false;

            //  An explosion pool
            explosions = this.game.add.group();
            explosions.createMultiple(30, 'kaboom');
            explosions.forEach(this.setupInvader, this);

            //  And some controls to play the game with
            cursors = this.game.input.keyboard.createCursorKeys();
            fireButton1 = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            leftWASD = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
            rightWASD = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
            fireButton2 = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        }
    }, {
        key: 'update',
        value: function update() {

            flay1.animations.play('fly');
            flay2.animations.play('fly2');

            background.tilePosition.y += 2;

            if (player1.alive) {
                //  Reset the player, then check for movement keys
                player1.body.velocity.setTo(0, 0);
                flay1.body.velocity.setTo(0, 0);

                if (cursors.left.isDown) {
                    player1.body.velocity.x = -200;
                    flay1.body.velocity.x = -200;
                } else if (cursors.right.isDown) {
                    player1.body.velocity.x = 200;
                    flay1.body.velocity.x = 200;
                }

                //  Firing
                if (fireButton1.isDown) {
                    this.fireBullet1();
                }
                // Run collision
                this.game.physics.arcade.overlap(bullets2, player1, this.player2HitsPlayer1, null, this);
            }

            if (player2.alive) {
                //  Reset the player, then check for movement keys
                player2.body.velocity.setTo(0, 0);
                flay2.body.velocity.setTo(0, 0);

                if (leftWASD.isDown) {
                    player2.body.velocity.x = -200;
                    flay2.body.velocity.x = -200;
                } else if (rightWASD.isDown) {
                    player2.body.velocity.x = 200;
                    flay2.body.velocity.x = 200;
                }

                //  Firing
                if (fireButton2.isDown) {
                    this.fireBullet2();
                }
                // Run collision
                this.game.physics.arcade.overlap(bullets1, player2, this.player1HitsPlayer2, null, this);
            }
        }
    }, {
        key: 'player2HitsPlayer1',
        value: function player2HitsPlayer1() {

            this.bullet2.kill();

            var live = lives1.getFirstAlive();

            if (live) {
                live.kill();
                // this.enemyExplosionSound.play("", 0, 0.5);
                this.playerExplosionSound.play();
            }

            //  And create an explosion
            var explosion = explosions.getFirstExists(false);
            explosion.reset(player1.body.x, player1.body.y);
            explosion.play('kaboom', 30, false, true);

            // When the player dies
            if (lives1.countLiving() < 1) {
                player1.kill();
                flay1.kill();
                bullets2.callAll('kill');

                stateText.text = " Player 2 won \n GAME OVER \n Click to restart";
                stateText.visible = true;
                this.music.stop();
                this.gameOverSound.play();
                //the "click to restart" handler
                this.game.input.onTap.addOnce(this.restart, this);
            }
        }
    }, {
        key: 'player1HitsPlayer2',
        value: function player1HitsPlayer2() {

            this.bullet1.kill();

            var live = lives2.getFirstAlive();

            if (live) {
                live.kill();
                // this.enemyExplosionSound.play("", 0, 0.5);
                this.playerExplosionSound.play();
            }

            //  And create an explosion 
            var explosion = explosions.getFirstExists(false);
            explosion.reset(player2.body.x, player2.body.y);
            explosion.play('kaboom', 30, false, true);

            // When the player dies
            if (lives2.countLiving() < 1) {
                player2.kill();
                flay2.kill();
                bullets1.callAll('kill');

                stateText.text = " Player 1 won \n GAME OVER \n Click to restart";
                stateText.visible = true;
                this.music.stop();
                this.gameOverSound.play();
                //the "click to restart" handler
                this.game.input.onTap.addOnce(this.restart, this);
            }
        }
    }, {
        key: 'fireBullet1',
        value: function fireBullet1() {
            //  To avoid them being allowed to fire too fast we set a time limit
            if (this.game.time.now > bulletTime1) {
                //  Grab the first bullet we can from the pool
                this.bullet1 = bullets1.getFirstExists(false);
                this.bulletHitSound.play("", 0, 0.5);
                if (this.bullet1) {
                    //  And fire it
                    this.bullet1.reset(player1.x, player1.y + 2);
                    this.bullet1.body.velocity.y = -800;
                    bulletTime1 = this.game.time.now + bulletInterval;
                }
            }
        }
    }, {
        key: 'fireBullet2',
        value: function fireBullet2() {
            //  To avoid them being allowed to fire too fast we set a time limit
            if (this.game.time.now > bulletTime2) {
                //  Grab the first bullet we can from the pool
                this.bullet2 = bullets2.getFirstExists(false);
                this.bulletHitSound.play("", 0, 0.5);
                if (this.bullet2) {
                    //  And fire it
                    this.bullet2.reset(player2.x, player2.y + 98);
                    this.bullet2.body.velocity.y = 800;
                    bulletTime2 = this.game.time.now + bulletInterval;
                }
            }
        }
    }, {
        key: 'setupInvader',
        value: function setupInvader(invader) {
            invader.anchor.x = 0.1;
            invader.anchor.y = 0.2;
            invader.animations.add('kaboom');
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.music.loopFull();
            //resets the life count
            lives1.callAll('revive');
            lives2.callAll('revive');
            //revives the player
            player1.revive();
            flay1.revive();
            player2.revive();
            flay2.revive();
            //hides the text
            stateText.visible = false;
        }
    }]);

    return Play;
}(Phaser.State);

exports.default = Play;
;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {
            this.game.load.image('player1', './img/player1.png');
            this.game.load.spritesheet('flay1', './img/play1-28-40.png', 100, 40);
            this.game.load.image('player2', './img/player2.png');
            this.game.load.spritesheet('flay2', './img/play2-100-32.png', 100, 32);
            this.game.load.image('bullet1', './img/bullet_blue.png');
            this.game.load.image('bullet2', './img/bullet_red.png');
            this.game.load.spritesheet('kaboom', './img/explode.png', 128, 128);
            this.game.load.image('background', './img/background.png');
            this.game.load.image('ship1', './img/player1-leves.png');
            this.game.load.image('ship2', './img/player2-leves.png');
            this.load.audio('playMusic', ['audio/music/play.mp3']);
            this.load.audio('bulletHit', ['audio/sound/bullet-hit.mp3']);
            this.load.audio('enemyShot', ['audio/sound/enemy-shot.mp3']);
            this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.mp3']);
            this.load.audio('playerShot', ['audio/sound/player-shot.mp3']);
            this.load.audio('playerExplosion', ['audio/sound/player-explosion.mp3']);
            this.load.audio('gameOver', ['audio/sound/game-over.mp3']);
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Play');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZ2FtZS5qcyIsInNyYy9qcy9zdGF0ZXMvZ2FtZS1vdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9pbmRleC5qcyIsInNyYy9qcy9zdGF0ZXMvbWVudS5qcyIsInNyYy9qcy9zdGF0ZXMvcGxheS5qcyIsInNyYy9qcy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0lBQVksTTs7OztBQUVaLElBQU0sT0FBTyxJQUFJLE9BQU8sSUFBWCxDQUFnQixJQUFoQixFQUFzQixHQUF0QixFQUEyQixPQUFPLElBQWxDLENBQWI7O0FBRUEsT0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixPQUFwQixDQUE0QjtBQUFBLFNBQVMsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEtBQWYsRUFBc0IsT0FBTyxLQUFQLENBQXRCLENBQVQ7QUFBQSxDQUE1Qjs7QUFFQSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCOzs7Ozs7Ozs7Ozs7Ozs7OztJQ05xQixROzs7Ozs7Ozs7OztrQ0FFUDtBQUNOLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGVBQWhCLEdBQWtDLE1BQWxDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLFVBQXJCLEVBQWlDLDhCQUFqQztBQUNIOzs7aUNBRVE7QUFDTCxpQkFBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QixZQUF6QixFQUF1QyxLQUFLLFNBQTVDLEVBQXVELElBQXZEOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixZQUE3QixFQUEyQyxFQUFFLE1BQU0sc0JBQVIsRUFBZ0MsTUFBTSxTQUF0QyxFQUFpRCxPQUFPLFFBQXhELEVBQTNDO0FBQ0EsaUJBQUssSUFBTCxD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SyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixFQUE2QixDQUFDLHNCQUFELENBQTdCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsRUFBNkIsQ0FBQyw0QkFBRCxDQUE3QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEVBQTZCLENBQUMsNEJBQUQsQ0FBN0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixnQkFBaEIsRUFBa0MsQ0FBQyxpQ0FBRCxDQUFsQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFlBQWhCLEVBQThCLENBQUMsNkJBQUQsQ0FBOUI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixpQkFBaEIsRUFBbUMsQ0FBQyxrQ0FBRCxDQUFuQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFVBQWhCLEVBQTRCLENBQUMsMkJBQUQsQ0FBNUI7QUFDSDs7O2lDQUVRO0FBQ0wsaUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7QUFDSDs7OztFQXhCZ0MsT0FBTyxLOztrQkFBdkIsTyIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgKiBhcyBzdGF0ZXMgZnJvbSAnLi9zdGF0ZXMnO1xuXG5jb25zdCBHQU1FID0gbmV3IFBoYXNlci5HYW1lKDEwMDAsIDQ4MCwgUGhhc2VyLkFVVE8pO1xuXG5PYmplY3Qua2V5cyhzdGF0ZXMpLmZvckVhY2goc3RhdGUgPT4gR0FNRS5zdGF0ZS5hZGQoc3RhdGUsIHN0YXRlc1tzdGF0ZV0pKTtcblxuR0FNRS5zdGF0ZS5zdGFydCgnTWVudScpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2dhbWVvdmVyJywgJy4vYXNzZXRzL2ltYWdlcy9nYW1lb3Zlci5wbmcnKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFkZC5idXR0b24oMjAwLCAxNSwgJ1BsYXkgYWdhaW4nLCB0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDIzNSwgMzUwLCBcIkxBU1QgU0NPUkVcIiwgeyBmb250OiBcImJvbGQgMTZweCBzYW5zLXNlcmlmXCIsIGZpbGw6IFwiIzQ2YzBmOVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9KTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDM1MCwgMzQ4LCBzY29yZS50b1N0cmluZygpLCB7IGZvbnQ6IFwiYm9sZCAyMHB4IHNhbnMtc2VyaWZcIiwgZmlsbDogXCIjZmZmXCIsIGFsaWduOiBcImNlbnRlclwiIH0pO1xuICAgIH07XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWUnKTtcbiAgICB9XG59O1xuIiwiLy8gZXhwb3J0IHtkZWZhdWx0IGFzIEJvb3R9IGZyb20gJy4vYm9vdCc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBNZW51fSBmcm9tICcuL21lbnUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFByZWxvYWR9IGZyb20gJy4vcHJlbG9hZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgUGxheX0gZnJvbSAnLi9wbGF5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBHYW1lT3Zlcn0gZnJvbSAnLi9nYW1lLW92ZXInO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgcHJlbG9hZCgpIHsgICBcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdtZW51JywgJy4uL2ltZy9tZW51LnBuZycpO1xuICAgIH07XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFkZC5idXR0b24oMjAwLCAxNSwgJ21lbnUnLCB0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfTtcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgICB9XG59O1xuIiwiXG5sZXQgcGxheWVyMTtcbmxldCBwbGF5ZXIyO1xubGV0IGJ1bGxldHMxO1xubGV0IGJ1bGxldHMyO1xubGV0IGZpcmVCdXR0b24xO1xubGV0IGZpcmVCdXR0b24yO1xubGV0IGN1cnNvcnM7XG5sZXQgbGVmdFdBU0Q7XG5sZXQgcmlnaHRXQVNEO1xubGV0IGxpdmVzMTtcbmxldCBsaXZlczI7XG5sZXQgc3RhdGVUZXh0O1xubGV0IGV4cGxvc2lvbnM7XG5sZXQgZmxheTE7XG5sZXQgZmxheTI7XG5sZXQgYmFja2dyb3VuZDtcbmxldCBmaXJpbmdUaW1lciA9IDA7XG5sZXQgYnVsbGV0VGltZTEgPSAwO1xubGV0IGJ1bGxldFRpbWUyID0gMDtcbmNvbnN0IGJ1bGxldEludGVydmFsID0gNzAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBQaGFzZXIuU3RhdGUgeyBcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tdXNpYyA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oJ3BsYXlNdXNpYycpO1xuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2J1bGxldEhpdCcpO1xuICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnZW5lbXlFeHBsb3Npb24nKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdwbGF5ZXJFeHBsb3Npb24nKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2dhbWVPdmVyJyk7XG4gICAgICAgIHRoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG5cbiAgICAgICAgYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSgwLCAwLCAxMDAwLCA2MDAsICdiYWNrZ3JvdW5kJyk7XG5cbiAgICAgICAgLy8gQWRkIHBsYXllcjFcbiAgICAgICAgcGxheWVyMSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC53aWR0aCowLjUsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQtNTYsICdwbGF5ZXIxJyk7XG4gICAgICAgIHBsYXllcjEuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHBsYXllcjEsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHBsYXllcjEuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlOyBcbiAgICAgICAgLy8gQWRkIGFuaW1hdGlvbiBwbGF5ZXIxXG4gICAgICAgIGZsYXkxID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLndpZHRoKjAuNSwgdGhpcy5nYW1lLndvcmxkLmhlaWdodC0wLCAnZmxheTEnKTtcbiAgICAgICAgZmxheTEuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFsxLDIsMyw0LDUsNiw3LDhdLCA0MCk7XG4gICAgICAgIGZsYXkxLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShmbGF5MSwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgZmxheTEuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlOyBcblxuICAgICAgICAvLyBBZGQgcGxheWVyMlxuICAgICAgICBwbGF5ZXIyID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLndpZHRoKjAuNSwgdGhpcy5nYW1lLndvcmxkLmhlaWdodC0odGhpcy5nYW1lLndvcmxkLmhlaWdodC03NSksICdwbGF5ZXIyJyk7XG4gICAgICAgIHBsYXllcjIuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgcGxheWVyMi5hbmdsZSA9IDE4MDtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHBsYXllcjIsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHBsYXllcjIuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlOyBcbiAgICAgICAgLy8gQWRkIGFuaW1hdGlvbiBwbGF5ZXIyXG4gICAgICAgIGZsYXkyID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLndpZHRoKjAuNSwgdGhpcy5nYW1lLndvcmxkLmhlaWdodC0odGhpcy5nYW1lLndvcmxkLmhlaWdodC0yNSksICdmbGF5MicpO1xuICAgICAgICBmbGF5Mi5hbmltYXRpb25zLmFkZCgnZmx5MicsIFsxLDIsMyw0LDUsNiw3LDhdLCA0MCk7XG4gICAgICAgIGZsYXkyLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIGZsYXkyLmFuZ2xlID0gMTgwO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoZmxheTIsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIGZsYXkyLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTsgXG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgcGxheWVyMSBidWxsZXRzXG4gICAgICAgIGJ1bGxldHMxID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICBidWxsZXRzMS5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgYnVsbGV0czEucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgICAgICBidWxsZXRzMS5jcmVhdGVNdWx0aXBsZSgzMCwgJ2J1bGxldDEnKTtcbiAgICAgICAgYnVsbGV0czEuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgICAgIGJ1bGxldHMxLnNldEFsbCgnYW5jaG9yLnknLCAzKTtcbiAgICAgICAgYnVsbGV0czEuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICAgICAgYnVsbGV0czEuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICAgICAgLy8gQWRkIHBsYXllcjIgYnVsbGV0c1xuICAgICAgICBidWxsZXRzMiA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgYnVsbGV0czIuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGJ1bGxldHMyLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICAgICAgYnVsbGV0czIuY3JlYXRlTXVsdGlwbGUoMzAsICdidWxsZXQyJyk7XG4gICAgICAgIGJ1bGxldHMyLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgICAgICBidWxsZXRzMi5zZXRBbGwoJ2FuY2hvci55JywgMyk7XG4gICAgICAgIGJ1bGxldHMyLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgICAgIGJ1bGxldHMyLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuICAgIFxuICAgICAgICAvLyAgTGl2ZXMgcGxheWVyMVxuICAgICAgICBsaXZlczEgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQud2lkdGggLSA4MCwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjUrMTIwLCAnUGxheWVyIDEnLCB7IGZvbnQ6ICcyMHB4IEFyaWFsJywgZmlsbDogJyMxZDliYTknIH0pO1xuICAgICAgICAvLyBsaXZlcyBpY29uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykgeyAgICBcbiAgICAgICAgICAgIGxldCBzaGlwMSA9IGxpdmVzMS5jcmVhdGUodGhpcy5nYW1lLndvcmxkLndpZHRoLTQwLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LTMwMCArICg0MCAqIGkpLCAnc2hpcDEnKTtcbiAgICAgICAgICAgIHNoaXAxLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICBzaGlwMS5hbmdsZSA9IDkwO1xuICAgICAgICAgICAgc2hpcDEuYWxwaGEgPSAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgTGl2ZXMgcGxheWVyMlxuICAgICAgICBsaXZlczIgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmdhbWUud29ybGQud2lkdGgrMTUsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC41LTEzNCwgJ1BsYXllciAyJywgeyBmb250OiAnMjBweCBBcmlhbCcsIGZpbGw6ICcjZGExMTAwJyB9KTtcbiAgICAgICAgLy8gbGl2ZXMgaWNvbnNcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHsgICAgIFxuICAgICAgICAgICAgbGV0IHNoaXAyID0gbGl2ZXMyLmNyZWF0ZSh0aGlzLmdhbWUud29ybGQud2lkdGgtdGhpcy5nYW1lLndvcmxkLndpZHRoKzQwLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuNS05MCArICg0MCAqIGopLCAnc2hpcDInKTtcbiAgICAgICAgICAgIHNoaXAyLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICBzaGlwMi5hbmdsZSA9IDkwO1xuICAgICAgICAgICAgc2hpcDIuYWxwaGEgPSAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGV4dCB3aGVuIHBsYXllcjEgb3IgcGxheWVyMiBnYW1lIG92ZXJcbiAgICAgICAgc3RhdGVUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCcgJywgeyBmb250OiAnMzBweCBBcmlhbCcsIGZpbGw6ICcjZmZmJyB9KTtcbiAgICAgICAgc3RhdGVUZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHN0YXRlVGV4dC52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gIEFuIGV4cGxvc2lvbiBwb29sXG4gICAgICAgIGV4cGxvc2lvbnMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIGV4cGxvc2lvbnMuY3JlYXRlTXVsdGlwbGUoMzAsICdrYWJvb20nKTtcbiAgICAgICAgZXhwbG9zaW9ucy5mb3JFYWNoKHRoaXMuc2V0dXBJbnZhZGVyLCB0aGlzKTtcblxuICAgICAgICAvLyAgQW5kIHNvbWUgY29udHJvbHMgdG8gcGxheSB0aGUgZ2FtZSB3aXRoXG4gICAgICAgIGN1cnNvcnMgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgICAgICBmaXJlQnV0dG9uMSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLlVQKTtcbiAgICAgICAgbGVmdFdBU0QgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5BKTtcbiAgICAgICAgcmlnaHRXQVNEID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuRCk7XG4gICAgICAgIGZpcmVCdXR0b24yID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuUyk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGZsYXkxLmFuaW1hdGlvbnMucGxheSgnZmx5Jyk7XG4gICAgICAgIGZsYXkyLmFuaW1hdGlvbnMucGxheSgnZmx5MicpO1xuXG4gICAgICAgIGJhY2tncm91bmQudGlsZVBvc2l0aW9uLnkgKz0gMjtcblxuICAgICAgICBpZiAocGxheWVyMS5hbGl2ZSkge1xuICAgICAgICAgICAgLy8gIFJlc2V0IHRoZSBwbGF5ZXIsIHRoZW4gY2hlY2sgZm9yIG1vdmVtZW50IGtleXNcbiAgICAgICAgICAgIHBsYXllcjEuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcbiAgICAgICAgICAgIGZsYXkxLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChjdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ib2R5LnZlbG9jaXR5LnggPSAtMjAwO1xuICAgICAgICAgICAgICAgIGZsYXkxLmJvZHkudmVsb2NpdHkueCA9IC0yMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ib2R5LnZlbG9jaXR5LnggPSAyMDA7XG4gICAgICAgICAgICAgICAgZmxheTEuYm9keS52ZWxvY2l0eS54ID0gMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgRmlyaW5nXG4gICAgICAgICAgICBpZiAoZmlyZUJ1dHRvbjEuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlQnVsbGV0MSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUnVuIGNvbGxpc2lvblxuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoYnVsbGV0czIsIHBsYXllcjEsIHRoaXMucGxheWVyMkhpdHNQbGF5ZXIxLCBudWxsLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIyLmFsaXZlKSB7XG4gICAgICAgICAgICAvLyAgUmVzZXQgdGhlIHBsYXllciwgdGhlbiBjaGVjayBmb3IgbW92ZW1lbnQga2V5c1xuICAgICAgICAgICAgcGxheWVyMi5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xuICAgICAgICAgICAgZmxheTIuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRXQVNELmlzRG93bikge1xuICAgICAgICAgICAgICAgIHBsYXllcjIuYm9keS52ZWxvY2l0eS54ID0gLTIwMDtcbiAgICAgICAgICAgICAgICBmbGF5Mi5ib2R5LnZlbG9jaXR5LnggPSAtMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyaWdodFdBU0QuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5ib2R5LnZlbG9jaXR5LnggPSAyMDA7XG4gICAgICAgICAgICAgICAgZmxheTIuYm9keS52ZWxvY2l0eS54ID0gMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgRmlyaW5nXG4gICAgICAgICAgICBpZiAoZmlyZUJ1dHRvbjIuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlQnVsbGV0MigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUnVuIGNvbGxpc2lvblxuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoYnVsbGV0czEsIHBsYXllcjIsIHRoaXMuIHBsYXllcjFIaXRzUGxheWVyMiwgbnVsbCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHBsYXllcjJIaXRzUGxheWVyMSgpIHtcblxuICAgICAgICB0aGlzLmJ1bGxldDIua2lsbCgpO1xuXG4gICAgICAgIGxldCBsaXZlID0gbGl2ZXMxLmdldEZpcnN0QWxpdmUoKTtcblxuICAgICAgICBpZiAobGl2ZSkge1xuICAgICAgICAgICAgbGl2ZS5raWxsKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLCAwLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgQW5kIGNyZWF0ZSBhbiBleHBsb3Npb25cbiAgICAgICAgdmFyIGV4cGxvc2lvbiA9IGV4cGxvc2lvbnMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBleHBsb3Npb24ucmVzZXQocGxheWVyMS5ib2R5LngsIHBsYXllcjEuYm9keS55KTtcbiAgICAgICAgZXhwbG9zaW9uLnBsYXkoJ2thYm9vbScsIDMwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgcGxheWVyIGRpZXNcbiAgICAgICAgaWYgKGxpdmVzMS5jb3VudExpdmluZygpIDwgMSkge1xuICAgICAgICAgICAgcGxheWVyMS5raWxsKCk7XG4gICAgICAgICAgICBmbGF5MS5raWxsKCk7XG4gICAgICAgICAgICBidWxsZXRzMi5jYWxsQWxsKCdraWxsJyk7XG5cbiAgICAgICAgICAgIHN0YXRlVGV4dC50ZXh0ID0gXCIgUGxheWVyIDIgd29uIFxcbiBHQU1FIE9WRVIgXFxuIENsaWNrIHRvIHJlc3RhcnRcIjtcbiAgICAgICAgICAgIHN0YXRlVGV4dC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIC8vdGhlIFwiY2xpY2sgdG8gcmVzdGFydFwiIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblRhcC5hZGRPbmNlKHRoaXMucmVzdGFydCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcGxheWVyMUhpdHNQbGF5ZXIyKCkge1xuXG4gICAgICAgIHRoaXMuYnVsbGV0MS5raWxsKCk7XG4gICAgICAgXG4gICAgICAgIGxldCBsaXZlID0gbGl2ZXMyLmdldEZpcnN0QWxpdmUoKTtcblxuICAgICAgICBpZiAobGl2ZSkge1xuICAgICAgICAgICAgbGl2ZS5raWxsKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLCAwLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgQW5kIGNyZWF0ZSBhbiBleHBsb3Npb24gXG4gICAgICAgIHZhciBleHBsb3Npb24gPSBleHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgZXhwbG9zaW9uLnJlc2V0KHBsYXllcjIuYm9keS54LCBwbGF5ZXIyLmJvZHkueSk7XG4gICAgICAgIGV4cGxvc2lvbi5wbGF5KCdrYWJvb20nLCAzMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHBsYXllciBkaWVzXG4gICAgICAgIGlmIChsaXZlczIuY291bnRMaXZpbmcoKSA8IDEpIHtcbiAgICAgICAgICAgIHBsYXllcjIua2lsbCgpO1xuICAgICAgICAgICAgZmxheTIua2lsbCgpO1xuICAgICAgICAgICAgYnVsbGV0czEuY2FsbEFsbCgna2lsbCcpO1xuXG4gICAgICAgICAgICBzdGF0ZVRleHQudGV4dCA9IFwiIFBsYXllciAxIHdvbiBcXG4gR0FNRSBPVkVSIFxcbiBDbGljayB0byByZXN0YXJ0XCI7XG4gICAgICAgICAgICBzdGF0ZVRleHQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAvL3RoZSBcImNsaWNrIHRvIHJlc3RhcnRcIiBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25UYXAuYWRkT25jZSh0aGlzLnJlc3RhcnQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZpcmVCdWxsZXQxKCkge1xuICAgICAgICAvLyAgVG8gYXZvaWQgdGhlbSBiZWluZyBhbGxvd2VkIHRvIGZpcmUgdG9vIGZhc3Qgd2Ugc2V0IGEgdGltZSBsaW1pdFxuICAgICAgICBpZiAodGhpcy5nYW1lLnRpbWUubm93ID4gYnVsbGV0VGltZTEpIHtcbiAgICAgICAgICAgIC8vICBHcmFiIHRoZSBmaXJzdCBidWxsZXQgd2UgY2FuIGZyb20gdGhlIHBvb2xcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0MSA9IGJ1bGxldHMxLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLCAwLCAwLjUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0MSkge1xuICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0MS5yZXNldChwbGF5ZXIxLngsIHBsYXllcjEueSArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0MS5ib2R5LnZlbG9jaXR5LnkgPSAtODAwO1xuICAgICAgICAgICAgICAgIGJ1bGxldFRpbWUxID0gdGhpcy5nYW1lLnRpbWUubm93ICsgYnVsbGV0SW50ZXJ2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlyZUJ1bGxldDIoKSB7XG4gICAgICAgIC8vICBUbyBhdm9pZCB0aGVtIGJlaW5nIGFsbG93ZWQgdG8gZmlyZSB0b28gZmFzdCB3ZSBzZXQgYSB0aW1lIGxpbWl0XG4gICAgICAgIGlmICh0aGlzLmdhbWUudGltZS5ub3cgPiBidWxsZXRUaW1lMikge1xuICAgICAgICAgICAgLy8gIEdyYWIgdGhlIGZpcnN0IGJ1bGxldCB3ZSBjYW4gZnJvbSB0aGUgcG9vbFxuICAgICAgICAgICAgdGhpcy5idWxsZXQyID0gYnVsbGV0czIuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsIDAsIDAuNSk7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXQyKSB7XG4gICAgICAgICAgICAgICAgLy8gIEFuZCBmaXJlIGl0XG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXQyLnJlc2V0KHBsYXllcjIueCwgcGxheWVyMi55ICsgOTgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0Mi5ib2R5LnZlbG9jaXR5LnkgPSA4MDA7XG4gICAgICAgICAgICAgICAgYnVsbGV0VGltZTIgPSB0aGlzLmdhbWUudGltZS5ub3cgKyBidWxsZXRJbnRlcnZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZXR1cEludmFkZXIoaW52YWRlcikgeyBcbiAgICAgICAgaW52YWRlci5hbmNob3IueCA9IDAuMTtcbiAgICAgICAgaW52YWRlci5hbmNob3IueSA9IDAuMjtcbiAgICAgICAgaW52YWRlci5hbmltYXRpb25zLmFkZCgna2Fib29tJyk7XG4gICAgfTtcblxuICAgIHJlc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm11c2ljLmxvb3BGdWxsKCk7XG4gICAgICAgIC8vcmVzZXRzIHRoZSBsaWZlIGNvdW50XG4gICAgICAgIGxpdmVzMS5jYWxsQWxsKCdyZXZpdmUnKTtcbiAgICAgICAgbGl2ZXMyLmNhbGxBbGwoJ3Jldml2ZScpO1xuICAgICAgICAvL3Jldml2ZXMgdGhlIHBsYXllclxuICAgICAgICBwbGF5ZXIxLnJldml2ZSgpO1xuICAgICAgICBmbGF5MS5yZXZpdmUoKTtcbiAgICAgICAgcGxheWVyMi5yZXZpdmUoKTtcbiAgICAgICAgZmxheTIucmV2aXZlKCk7XG4gICAgICAgIC8vaGlkZXMgdGhlIHRleHRcbiAgICAgICAgc3RhdGVUZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3BsYXllcjEnLCAnLi9pbWcvcGxheWVyMS5wbmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2ZsYXkxJywgJy4vaW1nL3BsYXkxLTI4LTQwLnBuZycsIDEwMCwgNDApO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncGxheWVyMicsICcuL2ltZy9wbGF5ZXIyLnBuZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZmxheTInLCAnLi9pbWcvcGxheTItMTAwLTMyLnBuZycsIDEwMCwgMzIpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYnVsbGV0MScsICcuL2ltZy9idWxsZXRfYmx1ZS5wbmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2J1bGxldDInLCAnLi9pbWcvYnVsbGV0X3JlZC5wbmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2thYm9vbScsICcuL2ltZy9leHBsb2RlLnBuZycsIDEyOCwgMTI4KTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCAnLi9pbWcvYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3NoaXAxJywgJy4vaW1nL3BsYXllcjEtbGV2ZXMucG5nJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzaGlwMicsICcuL2ltZy9wbGF5ZXIyLWxldmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXlNdXNpYycsIFsnYXVkaW8vbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnYnVsbGV0SGl0JywgWydhdWRpby9zb3VuZC9idWxsZXQtaGl0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdlbmVteVNob3QnLCBbJ2F1ZGlvL3NvdW5kL2VuZW15LXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15RXhwbG9zaW9uJywgWydhdWRpby9zb3VuZC9lbmVteS1leHBsb3Npb24ubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllclNob3QnLCBbJ2F1ZGlvL3NvdW5kL3BsYXllci1zaG90Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJFeHBsb3Npb24nLCBbJ2F1ZGlvL3NvdW5kL3BsYXllci1leHBsb3Npb24ubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2dhbWVPdmVyJywgWydhdWRpby9zb3VuZC9nYW1lLW92ZXIubXAzJ10pO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuICAgIH1cbn1cbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKemNtTXZhbk12WjJGdFpTNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZaMkZ0WlMxdmRtVnlMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTlwYm1SbGVDNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZiV1Z1ZFM1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmNHeGhlUzVxY3lJc0luTnlZeTlxY3k5emRHRjBaWE12Y0hKbGJHOWhaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPMEZEUVVFN08wbEJRVmtzVFRzN096dEJRVVZhTEVsQlFVMHNUMEZCVHl4SlFVRkpMRTlCUVU4c1NVRkJXQ3hEUVVGblFpeEpRVUZvUWl4RlFVRnpRaXhIUVVGMFFpeEZRVUV5UWl4UFFVRlBMRWxCUVd4RExFTkJRV0k3TzBGQlJVRXNUMEZCVHl4SlFVRlFMRU5CUVZrc1RVRkJXaXhGUVVGdlFpeFBRVUZ3UWl4RFFVRTBRanRCUVVGQkxGTkJRVk1zUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRmxMRXRCUVdZc1JVRkJjMElzVDBGQlR5eExRVUZRTEVOQlFYUkNMRU5CUVZRN1FVRkJRU3hEUVVFMVFqczdRVUZGUVN4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPenM3T3pzN096czdPenM3T3pzN096dEpRMDV4UWl4Uk96czdPenM3T3pzN096dHJRMEZGVUR0QlFVTk9MR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMR1ZCUVdoQ0xFZEJRV3RETEUxQlFXeERPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4TFFVRm1MRU5CUVhGQ0xGVkJRWEpDTEVWQlFXbERMRGhDUVVGcVF6dEJRVU5JT3pzN2FVTkJSVkU3UVVGRFRDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1RVRkJWQ3hEUVVGblFpeEhRVUZvUWl4RlFVRnhRaXhGUVVGeVFpeEZRVUY1UWl4WlFVRjZRaXhGUVVGMVF5eExRVUZMTEZOQlFUVkRMRVZCUVhWRUxFbEJRWFpFT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTVUZCWkN4RFFVRnRRaXhIUVVGdVFpeEZRVUYzUWl4SFFVRjRRaXhGUVVFMlFpeFpRVUUzUWl4RlFVRXlReXhGUVVGRkxFMUJRVTBzYzBKQlFWSXNSVUZCWjBNc1RVRkJUU3hUUVVGMFF5eEZRVUZwUkN4UFFVRlBMRkZCUVhoRUxFVkJRVE5ETzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eEpRVUZrTEVOQlFXMUNMRWRCUVc1Q0xFVkJRWGRDTEVkQlFYaENMRVZCUVRaQ0xFMUJRVTBzVVVGQlRpeEZRVUUzUWl4RlFVRXJReXhGUVVGRkxFMUJRVTBzYzBKQlFWSXNSVUZCWjBNc1RVRkJUU3hOUVVGMFF5eEZRVUU0UXl4UFFVRlBMRkZCUVhKRUxFVkJRUzlETzBGQlEwZzdPenR2UTBGRlZ6dEJRVU5TTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnN096czdSVUZvUW1sRExFOUJRVThzU3pzN2EwSkJRWGhDTEZFN1FVRnBRbkJDT3pzN096czdPenM3T3pzN096dDVRME5tVHl4UE96czdPenM3T3pzN05FTkJRMEVzVHpzN096czdPenM3TzNsRFFVTkJMRTg3T3pzN096czdPenMyUTBGRFFTeFBPenM3T3pzN096czdPenM3T3pzN096czdPenM3U1VOTVlTeEpPenM3T3pzN096czdPenRyUTBGRFVEdEJRVU5PTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZOQlFXaENMRWRCUVRSQ0xFOUJRVThzV1VGQlVDeERRVUZ2UWl4UlFVRm9SRHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xIRkNRVUZvUWl4SFFVRjNReXhKUVVGNFF6dEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEcxQ1FVRm9RaXhIUVVGelF5eEpRVUYwUXp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMR1ZCUVdoQ0xFZEJRV3RETEUxQlFXeERPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4TFFVRm1MRU5CUVhGQ0xFMUJRWEpDTEVWQlFUWkNMR2xDUVVFM1FqdEJRVU5JT3pzN2FVTkJRMUU3UVVGRFRDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1RVRkJWQ3hEUVVGblFpeEhRVUZvUWl4RlFVRnhRaXhGUVVGeVFpeEZRVUY1UWl4TlFVRjZRaXhGUVVGcFF5eExRVUZMTEZOQlFYUkRMRVZCUVdsRUxFbEJRV3BFTzBGQlEwZzdPenR2UTBGRFZ6dEJRVU5TTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZOQlFXcENPMEZCUTBnN096czdSVUZpTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1R0QlFXTndRanM3T3pzN096czdPenM3T3pzN096czdRVU5pUkN4SlFVRkpMR2RDUVVGS08wRkJRMEVzU1VGQlNTeG5Ra0ZCU2p0QlFVTkJMRWxCUVVrc2FVSkJRVW83UVVGRFFTeEpRVUZKTEdsQ1FVRktPMEZCUTBFc1NVRkJTU3h2UWtGQlNqdEJRVU5CTEVsQlFVa3NiMEpCUVVvN1FVRkRRU3hKUVVGSkxHZENRVUZLTzBGQlEwRXNTVUZCU1N4cFFrRkJTanRCUVVOQkxFbEJRVWtzYTBKQlFVbzdRVUZEUVN4SlFVRkpMR1ZCUVVvN1FVRkRRU3hKUVVGSkxHVkJRVW83UVVGRFFTeEpRVUZKTEd0Q1FVRktPMEZCUTBFc1NVRkJTU3h0UWtGQlNqdEJRVU5CTEVsQlFVa3NZMEZCU2p0QlFVTkJMRWxCUVVrc1kwRkJTanRCUVVOQkxFbEJRVWtzYlVKQlFVbzdRVUZEUVN4SlFVRkpMR05CUVdNc1EwRkJiRUk3UVVGRFFTeEpRVUZKTEdOQlFXTXNRMEZCYkVJN1FVRkRRU3hKUVVGSkxHTkJRV01zUTBGQmJFSTdRVUZEUVN4SlFVRk5MR2xDUVVGcFFpeEhRVUYyUWpzN1NVRkhjVUlzU1RzN096czdPenM3T3pzN2FVTkJSVkk3UVVGRFRDeHBRa0ZCU3l4TFFVRk1MRWRCUVdFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNRMEZCYjBJc1YwRkJjRUlzUTBGQllqdEJRVU5CTEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRmRCUVdZc1EwRkJkRUk3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1owSkJRV1lzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXh2UWtGQlRDeEhRVUUwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzYVVKQlFXWXNRMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYSkNPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZzdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1YwRkJiRUlzUTBGQk9FSXNUMEZCVHl4UFFVRlFMRU5CUVdVc1RVRkJOME03TzBGQlJVRXNlVUpCUVdFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEZWQlFXUXNRMEZCZVVJc1EwRkJla0lzUlVGQk5FSXNRMEZCTlVJc1JVRkJLMElzU1VGQkwwSXNSVUZCY1VNc1IwRkJja01zUlVGQk1FTXNXVUZCTVVNc1EwRkJZanM3UVVGRlFUdEJRVU5CTEhOQ1FVRlZMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eE5RVUZrTEVOQlFYRkNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1IwRkJjMElzUjBGQk0wTXNSVUZCWjBRc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRm9RaXhIUVVGMVFpeEZRVUYyUlN4RlFVRXlSU3hUUVVFelJTeERRVUZXTzBGQlEwRXNiMEpCUVZFc1RVRkJVaXhEUVVGbExFdEJRV1lzUTBGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVDBGQlZpeERRVUZyUWl4TlFVRnNRaXhEUVVGNVFpeFBRVUY2UWl4RlFVRnJReXhQUVVGUExFOUJRVkFzUTBGQlpTeE5RVUZxUkR0QlFVTkJMRzlDUVVGUkxFbEJRVklzUTBGQllTeHJRa0ZCWWl4SFFVRnJReXhKUVVGc1F6dEJRVU5CTzBGQlEwRXNiMEpCUVZFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEUxQlFXUXNRMEZCY1VJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRm9RaXhIUVVGelFpeEhRVUV6UXl4RlFVRm5SQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTFCUVdoQ0xFZEJRWFZDTEVOQlFYWkZMRVZCUVRCRkxFOUJRVEZGTEVOQlFWSTdRVUZEUVN4clFrRkJUU3hWUVVGT0xFTkJRV2xDTEVkQlFXcENMRU5CUVhGQ0xFdEJRWEpDTEVWQlFUUkNMRU5CUVVNc1EwRkJSQ3hGUVVGSExFTkJRVWdzUlVGQlN5eERRVUZNTEVWQlFVOHNRMEZCVUN4RlFVRlRMRU5CUVZRc1JVRkJWeXhEUVVGWUxFVkJRV0VzUTBGQllpeEZRVUZsTEVOQlFXWXNRMEZCTlVJc1JVRkJLME1zUlVGQkwwTTdRVUZEUVN4clFrRkJUU3hOUVVGT0xFTkJRV0VzUzBGQllpeERRVUZ0UWl4SFFVRnVRaXhGUVVGM1FpeEhRVUY0UWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEV0QlFYcENMRVZCUVdkRExFOUJRVThzVDBGQlVDeERRVUZsTEUxQlFTOURPMEZCUTBFc2EwSkJRVTBzU1VGQlRpeERRVUZYTEd0Q1FVRllMRWRCUVdkRExFbEJRV2hET3p0QlFVVkJPMEZCUTBFc2MwSkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRTFCUVdRc1EwRkJjVUlzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVGb1FpeEhRVUZ6UWl4SFFVRXpReXhGUVVGblJDeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFMUJRV2hDTEVsQlFYZENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUVUZCYUVJc1IwRkJkVUlzUlVGQkwwTXNRMEZCYUVRc1JVRkJiMGNzVTBGQmNFY3NRMEZCVmp0QlFVTkJMRzlDUVVGUkxFMUJRVklzUTBGQlpTeExRVUZtTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNPMEZCUTBFc2IwSkJRVkVzUzBGQlVpeEhRVUZuUWl4SFFVRm9RanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFVkJRV3RETEU5QlFVOHNUMEZCVUN4RFFVRmxMRTFCUVdwRU8wRkJRMEVzYjBKQlFWRXNTVUZCVWl4RFFVRmhMR3RDUVVGaUxFZEJRV3RETEVsQlFXeERPMEZCUTBFN1FVRkRRU3h2UWtGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVkQlFYTkNMRWRCUVRORExFVkJRV2RFTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVFVGQmFFSXNTVUZCZDBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRm9RaXhIUVVGMVFpeEZRVUV2UXl4RFFVRm9SQ3hGUVVGdlJ5eFBRVUZ3Unl4RFFVRlNPMEZCUTBFc2EwSkJRVTBzVlVGQlRpeERRVUZwUWl4SFFVRnFRaXhEUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaXhEUVVGRExFTkJRVVFzUlVGQlJ5eERRVUZJTEVWQlFVc3NRMEZCVEN4RlFVRlBMRU5CUVZBc1JVRkJVeXhEUVVGVUxFVkJRVmNzUTBGQldDeEZRVUZoTEVOQlFXSXNSVUZCWlN4RFFVRm1MRU5CUVRkQ0xFVkJRV2RFTEVWQlFXaEVPMEZCUTBFc2EwSkJRVTBzVFVGQlRpeERRVUZoTEV0QlFXSXNRMEZCYlVJc1IwRkJia0lzUlVGQmQwSXNSMEZCZUVJN1FVRkRRU3hyUWtGQlRTeExRVUZPTEVkQlFXTXNSMEZCWkR0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEV0QlFYcENMRVZCUVdkRExFOUJRVThzVDBGQlVDeERRVUZsTEUxQlFTOURPMEZCUTBFc2EwSkJRVTBzU1VGQlRpeERRVUZYTEd0Q1FVRllMRWRCUVdkRExFbEJRV2hET3p0QlFVVkJPMEZCUTBFc2RVSkJRVmNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1JVRkJXRHRCUVVOQkxIRkNRVUZUTEZWQlFWUXNSMEZCYzBJc1NVRkJkRUk3UVVGRFFTeHhRa0ZCVXl4bFFVRlVMRWRCUVRKQ0xFOUJRVThzVDBGQlVDeERRVUZsTEUxQlFURkRPMEZCUTBFc2NVSkJRVk1zWTBGQlZDeERRVUYzUWl4RlFVRjRRaXhGUVVFMFFpeFRRVUUxUWp0QlFVTkJMSEZDUVVGVExFMUJRVlFzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzUjBGQk5VSTdRVUZEUVN4eFFrRkJVeXhOUVVGVUxFTkJRV2RDTEZWQlFXaENMRVZCUVRSQ0xFTkJRVFZDTzBGQlEwRXNjVUpCUVZNc1RVRkJWQ3hEUVVGblFpeHBRa0ZCYUVJc1JVRkJiVU1zU1VGQmJrTTdRVUZEUVN4eFFrRkJVeXhOUVVGVUxFTkJRV2RDTEd0Q1FVRm9RaXhGUVVGdlF5eEpRVUZ3UXpzN1FVRkZRVHRCUVVOQkxIVkNRVUZYTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhMUVVGa0xFVkJRVmc3UVVGRFFTeHhRa0ZCVXl4VlFVRlVMRWRCUVhOQ0xFbEJRWFJDTzBGQlEwRXNjVUpCUVZNc1pVRkJWQ3hIUVVFeVFpeFBRVUZQTEU5QlFWQXNRMEZCWlN4TlFVRXhRenRCUVVOQkxIRkNRVUZUTEdOQlFWUXNRMEZCZDBJc1JVRkJlRUlzUlVGQk5FSXNVMEZCTlVJN1FVRkRRU3h4UWtGQlV5eE5RVUZVTEVOQlFXZENMRlZCUVdoQ0xFVkJRVFJDTEVkQlFUVkNPMEZCUTBFc2NVSkJRVk1zVFVGQlZDeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeERRVUUxUWp0QlFVTkJMSEZDUVVGVExFMUJRVlFzUTBGQlowSXNhVUpCUVdoQ0xFVkJRVzFETEVsQlFXNURPMEZCUTBFc2NVSkJRVk1zVFVGQlZDeERRVUZuUWl4clFrRkJhRUlzUlVGQmIwTXNTVUZCY0VNN08wRkJSVUU3UVVGRFFTeHhRa0ZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zUzBGQlpDeEZRVUZVTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eEpRVUZrTEVOQlFXMUNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1IwRkJkMElzUlVGQk0wTXNSVUZCSzBNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRm9RaXhIUVVGMVFpeEhRVUYyUWl4SFFVRXlRaXhIUVVFeFJTeEZRVUVyUlN4VlFVRXZSU3hGUVVFeVJpeEZRVUZGTEUxQlFVMHNXVUZCVWl4RlFVRnpRaXhOUVVGTkxGTkJRVFZDTEVWQlFUTkdPMEZCUTBFN1FVRkRRU3hwUWtGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxFTkJRWEJDTEVWQlFYVkNMRWRCUVhaQ0xFVkJRVFJDTzBGQlEzaENMRzlDUVVGSkxGRkJRVkVzVDBGQlR5eE5RVUZRTEVOQlFXTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUZvUWl4SFFVRnpRaXhGUVVGd1F5eEZRVUYzUXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEUxQlFXaENMRWRCUVhWQ0xFZEJRWFpDTEVkQlFUaENMRXRCUVVzc1EwRkJNMFVzUlVGQkswVXNUMEZCTDBVc1EwRkJXanRCUVVOQkxITkNRVUZOTEUxQlFVNHNRMEZCWVN4TFFVRmlMRU5CUVcxQ0xFZEJRVzVDTEVWQlFYZENMRWRCUVhoQ08wRkJRMEVzYzBKQlFVMHNTMEZCVGl4SFFVRmpMRVZCUVdRN1FVRkRRU3h6UWtGQlRTeExRVUZPTEVkQlFXTXNSMEZCWkR0QlFVTklPenRCUVVWRU8wRkJRMEVzY1VKQlFWTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUlVGQlZEdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zU1VGQlpDeERRVUZ0UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFXaENMRWRCUVhkQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJlRU1zUjBGQk9FTXNSVUZCYWtVc1JVRkJjVVVzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVGb1FpeEhRVUYxUWl4SFFVRjJRaXhIUVVFeVFpeEhRVUZvUnl4RlFVRnhSeXhWUVVGeVJ5eEZRVUZwU0N4RlFVRkZMRTFCUVUwc1dVRkJVaXhGUVVGelFpeE5RVUZOTEZOQlFUVkNMRVZCUVdwSU8wRkJRMEU3UVVGRFFTeHBRa0ZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEVOQlFYQkNMRVZCUVhWQ0xFZEJRWFpDTEVWQlFUUkNPMEZCUTNoQ0xHOUNRVUZKTEZGQlFWRXNUMEZCVHl4TlFVRlFMRU5CUVdNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRm9RaXhIUVVGelFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRWFJETEVkQlFUUkRMRVZCUVRGRUxFVkJRVGhFTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVFVGQmFFSXNSMEZCZFVJc1IwRkJka0lzUjBGQk1rSXNSVUZCTTBJc1IwRkJhVU1zUzBGQlN5eERRVUZ3Unl4RlFVRjNSeXhQUVVGNFJ5eERRVUZhTzBGQlEwRXNjMEpCUVUwc1RVRkJUaXhEUVVGaExFdEJRV0lzUTBGQmJVSXNSMEZCYmtJc1JVRkJkMElzUjBGQmVFSTdRVUZEUVN4elFrRkJUU3hMUVVGT0xFZEJRV01zUlVGQlpEdEJRVU5CTEhOQ1FVRk5MRXRCUVU0c1IwRkJZeXhIUVVGa08wRkJRMGc3TzBGQlJVUTdRVUZEUVN4M1FrRkJXU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVc1RExFVkJRVEpETEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQk0wUXNSVUZCYlVVc1IwRkJia1VzUlVGQmQwVXNSVUZCUlN4TlFVRk5MRmxCUVZJc1JVRkJjMElzVFVGQlRTeE5RVUUxUWl4RlFVRjRSU3hEUVVGYU8wRkJRMEVzYzBKQlFWVXNUVUZCVml4RFFVRnBRaXhMUVVGcVFpeERRVUYxUWl4SFFVRjJRaXhGUVVFMFFpeEhRVUUxUWp0QlFVTkJMSE5DUVVGVkxFOUJRVllzUjBGQmIwSXNTMEZCY0VJN08wRkJSVUU3UVVGRFFTeDVRa0ZCWVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zUzBGQlpDeEZRVUZpTzBGQlEwRXNkVUpCUVZjc1kwRkJXQ3hEUVVFd1FpeEZRVUV4UWl4RlFVRTRRaXhSUVVFNVFqdEJRVU5CTEhWQ1FVRlhMRTlCUVZnc1EwRkJiVUlzUzBGQlN5eFpRVUY0UWl4RlFVRnpReXhKUVVGMFF6czdRVUZGUVR0QlFVTkJMSE5DUVVGVkxFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1VVRkJhRUlzUTBGQmVVSXNaMEpCUVhwQ0xFVkJRVlk3UVVGRFFTd3dRa0ZCWXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEZRVUZvUkN4RFFVRmtPMEZCUTBFc2RVSkJRVmNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeERRVUY1UWl4TlFVRjZRaXhEUVVGblF5eFBRVUZQTEZGQlFWQXNRMEZCWjBJc1EwRkJhRVFzUTBGQldEdEJRVU5CTEhkQ1FVRlpMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNVVUZCYUVJc1EwRkJlVUlzVFVGQmVrSXNRMEZCWjBNc1QwRkJUeXhSUVVGUUxFTkJRV2RDTEVOQlFXaEVMRU5CUVZvN1FVRkRRU3d3UWtGQll5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVOQlFYbENMRTFCUVhwQ0xFTkJRV2RETEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhEUVVGb1JDeERRVUZrTzBGQlEwZzdPenRwUTBGRlVUczdRVUZGVEN4clFrRkJUU3hWUVVGT0xFTkJRV2xDTEVsQlFXcENMRU5CUVhOQ0xFdEJRWFJDTzBGQlEwRXNhMEpCUVUwc1ZVRkJUaXhEUVVGcFFpeEpRVUZxUWl4RFFVRnpRaXhOUVVGMFFqczdRVUZGUVN4MVFrRkJWeXhaUVVGWUxFTkJRWGRDTEVOQlFYaENMRWxCUVRaQ0xFTkJRVGRDT3p0QlFVVkJMR2RDUVVGSkxGRkJRVkVzUzBGQldpeEZRVUZ0UWp0QlFVTm1PMEZCUTBFc2QwSkJRVkVzU1VGQlVpeERRVUZoTEZGQlFXSXNRMEZCYzBJc1MwRkJkRUlzUTBGQk5FSXNRMEZCTlVJc1JVRkJLMElzUTBGQkwwSTdRVUZEUVN4elFrRkJUU3hKUVVGT0xFTkJRVmNzVVVGQldDeERRVUZ2UWl4TFFVRndRaXhEUVVFd1FpeERRVUV4UWl4RlFVRTJRaXhEUVVFM1FqczdRVUZGUVN4dlFrRkJTU3hSUVVGUkxFbEJRVklzUTBGQllTeE5RVUZxUWl4RlFVRjVRanRCUVVOeVFpdzBRa0ZCVVN4SlFVRlNMRU5CUVdFc1VVRkJZaXhEUVVGelFpeERRVUYwUWl4SFFVRXdRaXhEUVVGRExFZEJRVE5DTzBGQlEwRXNNRUpCUVUwc1NVRkJUaXhEUVVGWExGRkJRVmdzUTBGQmIwSXNRMEZCY0VJc1IwRkJkMElzUTBGQlF5eEhRVUY2UWp0QlFVTklMR2xDUVVoRUxFMUJSMDhzU1VGQlNTeFJRVUZSTEV0QlFWSXNRMEZCWXl4TlFVRnNRaXhGUVVFd1FqdEJRVU0zUWl3MFFrRkJVU3hKUVVGU0xFTkJRV0VzVVVGQllpeERRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeEhRVUV4UWp0QlFVTkJMREJDUVVGTkxFbEJRVTRzUTBGQlZ5eFJRVUZZTEVOQlFXOUNMRU5CUVhCQ0xFZEJRWGRDTEVkQlFYaENPMEZCUTBnN08wRkJSVVE3UVVGRFFTeHZRa0ZCU1N4WlFVRlpMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMSGxDUVVGTExGZEJRVXc3UVVGRFNEdEJRVU5FTzBGQlEwRXNjVUpCUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1VVRkJha01zUlVGQk1rTXNUMEZCTTBNc1JVRkJiMFFzUzBGQlN5eHJRa0ZCZWtRc1JVRkJOa1VzU1VGQk4wVXNSVUZCYlVZc1NVRkJia1k3UVVGRFNEczdRVUZGUkN4blFrRkJTU3hSUVVGUkxFdEJRVm9zUlVGQmJVSTdRVUZEWmp0QlFVTkJMSGRDUVVGUkxFbEJRVklzUTBGQllTeFJRVUZpTEVOQlFYTkNMRXRCUVhSQ0xFTkJRVFJDTEVOQlFUVkNMRVZCUVN0Q0xFTkJRUzlDTzBGQlEwRXNjMEpCUVUwc1NVRkJUaXhEUVVGWExGRkJRVmdzUTBGQmIwSXNTMEZCY0VJc1EwRkJNRUlzUTBGQk1VSXNSVUZCTmtJc1EwRkJOMEk3TzBGQlJVRXNiMEpCUVVrc1UwRkJVeXhOUVVGaUxFVkJRWEZDTzBGQlEycENMRFJDUVVGUkxFbEJRVklzUTBGQllTeFJRVUZpTEVOQlFYTkNMRU5CUVhSQ0xFZEJRVEJDTEVOQlFVTXNSMEZCTTBJN1FVRkRRU3d3UWtGQlRTeEpRVUZPTEVOQlFWY3NVVUZCV0N4RFFVRnZRaXhEUVVGd1FpeEhRVUYzUWl4RFFVRkRMRWRCUVhwQ08wRkJRMGdzYVVKQlNFUXNUVUZIVHl4SlFVRkpMRlZCUVZVc1RVRkJaQ3hGUVVGelFqdEJRVU42UWl3MFFrRkJVU3hKUVVGU0xFTkJRV0VzVVVGQllpeERRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeEhRVUV4UWp0QlFVTkJMREJDUVVGTkxFbEJRVTRzUTBGQlZ5eFJRVUZZTEVOQlFXOUNMRU5CUVhCQ0xFZEJRWGRDTEVkQlFYaENPMEZCUTBnN08wRkJSVVE3UVVGRFFTeHZRa0ZCU1N4WlFVRlpMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMSGxDUVVGTExGZEJRVXc3UVVGRFNEdEJRVU5FTzBGQlEwRXNjVUpCUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1VVRkJha01zUlVGQk1rTXNUMEZCTTBNc1JVRkJiMFFzUzBGQlRTeHJRa0ZCTVVRc1JVRkJPRVVzU1VGQk9VVXNSVUZCYjBZc1NVRkJjRVk3UVVGRFNEdEJRVU5LT3pzN05rTkJSVzlDT3p0QlFVVnFRaXhwUWtGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWpzN1FVRkZRU3huUWtGQlNTeFBRVUZQTEU5QlFVOHNZVUZCVUN4RlFVRllPenRCUVVWQkxHZENRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MSEZDUVVGTExFbEJRVXc3UVVGRFFUdEJRVU5CTEhGQ1FVRkxMRzlDUVVGTUxFTkJRVEJDTEVsQlFURkNPMEZCUTBnN08wRkJSVVE3UVVGRFFTeG5Ra0ZCU1N4WlFVRlpMRmRCUVZjc1kwRkJXQ3hEUVVFd1FpeExRVUV4UWl4RFFVRm9RanRCUVVOQkxITkNRVUZWTEV0QlFWWXNRMEZCWjBJc1VVRkJVU3hKUVVGU0xFTkJRV0VzUTBGQk4wSXNSVUZCWjBNc1VVRkJVU3hKUVVGU0xFTkJRV0VzUTBGQk4wTTdRVUZEUVN4elFrRkJWU3hKUVVGV0xFTkJRV1VzVVVGQlppeEZRVUY1UWl4RlFVRjZRaXhGUVVFMlFpeExRVUUzUWl4RlFVRnZReXhKUVVGd1F6czdRVUZGUVR0QlFVTkJMR2RDUVVGSkxFOUJRVThzVjBGQlVDeExRVUYxUWl4RFFVRXpRaXhGUVVFNFFqdEJRVU14UWl4M1FrRkJVU3hKUVVGU08wRkJRMEVzYzBKQlFVMHNTVUZCVGp0QlFVTkJMSGxDUVVGVExFOUJRVlFzUTBGQmFVSXNUVUZCYWtJN08wRkJSVUVzTUVKQlFWVXNTVUZCVml4SFFVRnBRaXhuUkVGQmFrSTdRVUZEUVN3d1FrRkJWU3hQUVVGV0xFZEJRVzlDTEVsQlFYQkNPMEZCUTBFc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVsQlFWZzdRVUZEUVN4eFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVsQlFXNUNPMEZCUTBFN1FVRkRRU3h4UWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVGb1FpeERRVUZ6UWl4UFFVRjBRaXhEUVVFNFFpeExRVUZMTEU5QlFXNURMRVZCUVRSRExFbEJRVFZETzBGQlEwZzdRVUZEU2pzN096WkRRVVZ2UWpzN1FVRkZha0lzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRWxCUVdJN08wRkJSVUVzWjBKQlFVa3NUMEZCVHl4UFFVRlBMR0ZCUVZBc1JVRkJXRHM3UVVGRlFTeG5Ra0ZCU1N4SlFVRktMRVZCUVZVN1FVRkRUaXh4UWtGQlN5eEpRVUZNTzBGQlEwRTdRVUZEUVN4eFFrRkJTeXh2UWtGQlRDeERRVUV3UWl4SlFVRXhRanRCUVVOSU96dEJRVVZFTzBGQlEwRXNaMEpCUVVrc1dVRkJXU3hYUVVGWExHTkJRVmdzUTBGQk1FSXNTMEZCTVVJc1EwRkJhRUk3UVVGRFFTeHpRa0ZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRVkVzU1VGQlVpeERRVUZoTEVOQlFUZENMRVZCUVdkRExGRkJRVkVzU1VGQlVpeERRVUZoTEVOQlFUZERPMEZCUTBFc2MwSkJRVlVzU1VGQlZpeERRVUZsTEZGQlFXWXNSVUZCZVVJc1JVRkJla0lzUlVGQk5rSXNTMEZCTjBJc1JVRkJiME1zU1VGQmNFTTdPMEZCUlVFN1FVRkRRU3huUWtGQlNTeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1EwRkJNMElzUlVGQk9FSTdRVUZETVVJc2QwSkJRVkVzU1VGQlVqdEJRVU5CTEhOQ1FVRk5MRWxCUVU0N1FVRkRRU3g1UWtGQlV5eFBRVUZVTEVOQlFXbENMRTFCUVdwQ096dEJRVVZCTERCQ1FVRlZMRWxCUVZZc1IwRkJhVUlzWjBSQlFXcENPMEZCUTBFc01FSkJRVlVzVDBGQlZpeEhRVUZ2UWl4SlFVRndRanRCUVVOQkxIRkNRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRllPMEZCUTBFc2NVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SlFVRnVRanRCUVVOQk8wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmFFSXNRMEZCYzBJc1QwRkJkRUlzUTBGQk9FSXNTMEZCU3l4UFFVRnVReXhGUVVFMFF5eEpRVUUxUXp0QlFVTklPMEZCUTBvN096dHpRMEZGWVR0QlFVTldPMEZCUTBFc1owSkJRVWtzUzBGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRWRCUVdZc1IwRkJjVUlzVjBGQmVrSXNSVUZCYzBNN1FVRkRiRU03UVVGRFFTeHhRa0ZCU3l4UFFVRk1MRWRCUVdVc1UwRkJVeXhqUVVGVUxFTkJRWGRDTEV0QlFYaENMRU5CUVdZN1FVRkRRU3h4UWtGQlN5eGpRVUZNTEVOQlFXOUNMRWxCUVhCQ0xFTkJRWGxDTEVWQlFYcENMRVZCUVRaQ0xFTkJRVGRDTEVWQlFXZERMRWRCUVdoRE8wRkJRMEVzYjBKQlFVa3NTMEZCU3l4UFFVRlVMRVZCUVd0Q08wRkJRMlE3UVVGRFFTeDVRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhEUVVGdFFpeFJRVUZSTEVOQlFUTkNMRVZCUVRoQ0xGRkJRVkVzUTBGQlVpeEhRVUZaTEVOQlFURkRPMEZCUTBFc2VVSkJRVXNzVDBGQlRDeERRVUZoTEVsQlFXSXNRMEZCYTBJc1VVRkJiRUlzUTBGQk1rSXNRMEZCTTBJc1IwRkJLMElzUTBGQlF5eEhRVUZvUXp0QlFVTkJMR3REUVVGakxFdEJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4SFFVRm1MRWRCUVhGQ0xHTkJRVzVETzBGQlEwZzdRVUZEU2p0QlFVTktPenM3YzBOQlJXRTdRVUZEVmp0QlFVTkJMR2RDUVVGSkxFdEJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4SFFVRm1MRWRCUVhGQ0xGZEJRWHBDTEVWQlFYTkRPMEZCUTJ4RE8wRkJRMEVzY1VKQlFVc3NUMEZCVEN4SFFVRmxMRk5CUVZNc1kwRkJWQ3hEUVVGM1FpeExRVUY0UWl4RFFVRm1PMEZCUTBFc2NVSkJRVXNzWTBGQlRDeERRVUZ2UWl4SlFVRndRaXhEUVVGNVFpeEZRVUY2UWl4RlFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4SFFVRm9RenRCUVVOQkxHOUNRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRanRCUVVOa08wRkJRMEVzZVVKQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJiVUlzVVVGQlVTeERRVUV6UWl4RlFVRTRRaXhSUVVGUkxFTkJRVklzUjBGQldTeEZRVUV4UXp0QlFVTkJMSGxDUVVGTExFOUJRVXdzUTBGQllTeEpRVUZpTEVOQlFXdENMRkZCUVd4Q0xFTkJRVEpDTEVOQlFUTkNMRWRCUVN0Q0xFZEJRUzlDTzBGQlEwRXNhME5CUVdNc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEVkQlFXWXNSMEZCY1VJc1kwRkJia003UVVGRFNEdEJRVU5LTzBGQlEwbzdPenR4UTBGRldTeFBMRVZCUVZNN1FVRkRiRUlzYjBKQlFWRXNUVUZCVWl4RFFVRmxMRU5CUVdZc1IwRkJiVUlzUjBGQmJrSTdRVUZEUVN4dlFrRkJVU3hOUVVGU0xFTkJRV1VzUTBGQlppeEhRVUZ0UWl4SFFVRnVRanRCUVVOQkxHOUNRVUZSTEZWQlFWSXNRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNVVUZCZGtJN1FVRkRTRHM3TzJ0RFFVVlZPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZzdRVUZEUVR0QlFVTkJMRzFDUVVGUExFOUJRVkFzUTBGQlpTeFJRVUZtTzBGQlEwRXNiVUpCUVU4c1QwRkJVQ3hEUVVGbExGRkJRV1k3UVVGRFFUdEJRVU5CTEc5Q1FVRlJMRTFCUVZJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTzBGQlEwRXNiMEpCUVZFc1RVRkJVanRCUVVOQkxHdENRVUZOTEUxQlFVNDdRVUZEUVR0QlFVTkJMSE5DUVVGVkxFOUJRVllzUjBGQmIwSXNTMEZCY0VJN1FVRkRTRHM3T3p0RlFYUlJOa0lzVDBGQlR5eExPenRyUWtGQmNFSXNTVHRCUVhWUmNFSTdPenM3T3pzN096czdPenM3T3pzN08wbERPVkp2UWl4UE96czdPenM3T3pzN096dHJRMEZGVUR0QlFVTk9MR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNTMEZCWml4RFFVRnhRaXhUUVVGeVFpeEZRVUZuUXl4dFFrRkJhRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGZEJRV1lzUTBGQk1rSXNUMEZCTTBJc1JVRkJiME1zZFVKQlFYQkRMRVZCUVRaRUxFZEJRVGRFTEVWQlFXdEZMRVZCUVd4Rk8wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hMUVVGbUxFTkJRWEZDTEZOQlFYSkNMRVZCUVdkRExHMUNRVUZvUXp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWMEZCWml4RFFVRXlRaXhQUVVFelFpeEZRVUZ2UXl4M1FrRkJjRU1zUlVGQk9FUXNSMEZCT1VRc1JVRkJiVVVzUlVGQmJrVTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEV0QlFXWXNRMEZCY1VJc1UwRkJja0lzUlVGQlowTXNkVUpCUVdoRE8wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hMUVVGbUxFTkJRWEZDTEZOQlFYSkNMRVZCUVdkRExITkNRVUZvUXp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWMEZCWml4RFFVRXlRaXhSUVVFelFpeEZRVUZ4UXl4dFFrRkJja01zUlVGQk1FUXNSMEZCTVVRc1JVRkJLMFFzUjBGQkwwUTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEV0QlFXWXNRMEZCY1VJc1dVRkJja0lzUlVGQmJVTXNjMEpCUVc1RE8wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hMUVVGbUxFTkJRWEZDTEU5QlFYSkNMRVZCUVRoQ0xIbENRVUU1UWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNTMEZCWml4RFFVRnhRaXhQUVVGeVFpeEZRVUU0UWl4NVFrRkJPVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFhRVUZvUWl4RlFVRTJRaXhEUVVGRExITkNRVUZFTEVOQlFUZENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1YwRkJhRUlzUlVGQk5rSXNRMEZCUXl3MFFrRkJSQ3hEUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZkQlFXaENMRVZCUVRaQ0xFTkJRVU1zTkVKQlFVUXNRMEZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhuUWtGQmFFSXNSVUZCYTBNc1EwRkJReXhwUTBGQlJDeERRVUZzUXp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmxCUVdoQ0xFVkJRVGhDTEVOQlFVTXNOa0pCUVVRc1EwRkJPVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeHBRa0ZCYUVJc1JVRkJiVU1zUTBGQlF5eHJRMEZCUkN4RFFVRnVRenRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGVkJRV2hDTEVWQlFUUkNMRU5CUVVNc01rSkJRVVFzUTBGQk5VSTdRVUZEU0RzN08ybERRVVZSTzBGQlEwd3NhVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNUVUZCYWtJN1FVRkRTRHM3T3p0RlFYaENaME1zVDBGQlR5eExPenRyUWtGQmRrSXNUeUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlHVW9kQ3h1TEhJcGUyWjFibU4wYVc5dUlITW9ieXgxS1h0cFppZ2hibHR2WFNsN2FXWW9JWFJiYjEwcGUzWmhjaUJoUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN2FXWW9JWFVtSm1FcGNtVjBkWEp1SUdFb2J5d2hNQ2s3YVdZb2FTbHlaWFIxY200Z2FTaHZMQ0V3S1R0MllYSWdaajF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMjhyWENJblhDSXBPM1JvY205M0lHWXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeG1mWFpoY2lCc1BXNWJiMTA5ZTJWNGNHOXlkSE02ZTMxOU8zUmJiMTFiTUYwdVkyRnNiQ2hzTG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvWlNsN2RtRnlJRzQ5ZEZ0dlhWc3hYVnRsWFR0eVpYUjFjbTRnY3lodVAyNDZaU2w5TEd3c2JDNWxlSEJ2Y25SekxHVXNkQ3h1TEhJcGZYSmxkSFZ5YmlCdVcyOWRMbVY0Y0c5eWRITjlkbUZ5SUdrOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdG1iM0lvZG1GeUlHODlNRHR2UEhJdWJHVnVaM1JvTzI4ckt5bHpLSEpiYjEwcE8zSmxkSFZ5YmlCemZTa2lMQ0pwYlhCdmNuUWdLaUJoY3lCemRHRjBaWE1nWm5KdmJTQW5MaTl6ZEdGMFpYTW5PMXh1WEc1amIyNXpkQ0JIUVUxRklEMGdibVYzSUZCb1lYTmxjaTVIWVcxbEtERXdNREFzSURRNE1Dd2dVR2hoYzJWeUxrRlZWRThwTzF4dVhHNVBZbXBsWTNRdWEyVjVjeWh6ZEdGMFpYTXBMbVp2Y2tWaFkyZ29jM1JoZEdVZ1BUNGdSMEZOUlM1emRHRjBaUzVoWkdRb2MzUmhkR1VzSUhOMFlYUmxjMXR6ZEdGMFpWMHBLVHRjYmx4dVIwRk5SUzV6ZEdGMFpTNXpkR0Z5ZENnblRXVnVkU2NwTzF4dUlpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUjJGdFpVOTJaWElnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ2NISmxiRzloWkNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVdkbExtSmhZMnRuY205MWJtUkRiMnh2Y2lBOUlDY2paV1ZsSnp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExteHZZV1F1YVcxaFoyVW9KMmRoYldWdmRtVnlKeXdnSnk0dllYTnpaWFJ6TDJsdFlXZGxjeTluWVcxbGIzWmxjaTV3Ym1jbktUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ga1pDNWlkWFIwYjI0b01qQXdMQ0F4TlN3Z0oxQnNZWGtnWVdkaGFXNG5MQ0IwYUdsekxuTjBZWEowUjJGdFpTd2dkR2hwY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbUZrWkM1MFpYaDBLREl6TlN3Z016VXdMQ0JjSWt4QlUxUWdVME5QVWtWY0lpd2dleUJtYjI1ME9pQmNJbUp2YkdRZ01UWndlQ0J6WVc1ekxYTmxjbWxtWENJc0lHWnBiR3c2SUZ3aUl6UTJZekJtT1Z3aUxDQmhiR2xuYmpvZ1hDSmpaVzUwWlhKY0lpQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG1Ga1pDNTBaWGgwS0RNMU1Dd2dNelE0TENCelkyOXlaUzUwYjFOMGNtbHVaeWdwTENCN0lHWnZiblE2SUZ3aVltOXNaQ0F5TUhCNElITmhibk10YzJWeWFXWmNJaXdnWm1sc2JEb2dYQ0lqWm1abVhDSXNJR0ZzYVdkdU9pQmNJbU5sYm5SbGNsd2lJSDBwTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J6ZEdGeWRFZGhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owZGhiV1VuS1R0Y2JpQWdJQ0I5WEc1OU8xeHVJaXdpTHk4Z1pYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklFSnZiM1I5SUdaeWIyMGdKeTR2WW05dmRDYzdYRzVjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCTlpXNTFmU0JtY205dElDY3VMMjFsYm5Vbk8xeHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRkJ5Wld4dllXUjlJR1p5YjIwZ0p5NHZjSEpsYkc5aFpDYzdYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVUd4aGVYMGdabkp2YlNBbkxpOXdiR0Y1Snp0Y2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QkhZVzFsVDNabGNuMGdabkp2YlNBbkxpOW5ZVzFsTFc5MlpYSW5PMXh1SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUV1Z1ZFNCbGVIUmxibVJ6SUZCb1lYTmxjaTVUZEdGMFpTQjdYRzRnSUNBZ2NISmxiRzloWkNncElIc2dJQ0JjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5OallXeGxMbk5qWVd4bFRXOWtaU0E5SUZCb1lYTmxjaTVUWTJGc1pVMWhibUZuWlhJdVUwaFBWMTlCVEV3N1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpZMkZzWlM1d1lXZGxRV3hwWjI1SWIzSnBlbTl1ZEdGc2JIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjMk5oYkdVdWNHRm5aVUZzYVdkdVZtVnlkR2xqWVd4c2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbkkyVmxaU2M3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1c2IyRmtMbWx0WVdkbEtDZHRaVzUxSnl3Z0p5NHVMMmx0Wnk5dFpXNTFMbkJ1WnljcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkM1aWRYUjBiMjRvTWpBd0xDQXhOU3dnSjIxbGJuVW5MQ0IwYUdsekxuTjBZWEowUjJGdFpTd2dkR2hwY3lrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0J6ZEdGeWRFZGhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0oxQnlaV3h2WVdRbktUdGNiaUFnSUNCOVhHNTlPMXh1SWl3aVhHNXNaWFFnY0d4aGVXVnlNVHRjYm14bGRDQndiR0Y1WlhJeU8xeHViR1YwSUdKMWJHeGxkSE14TzF4dWJHVjBJR0oxYkd4bGRITXlPMXh1YkdWMElHWnBjbVZDZFhSMGIyNHhPMXh1YkdWMElHWnBjbVZDZFhSMGIyNHlPMXh1YkdWMElHTjFjbk52Y25NN1hHNXNaWFFnYkdWbWRGZEJVMFE3WEc1c1pYUWdjbWxuYUhSWFFWTkVPMXh1YkdWMElHeHBkbVZ6TVR0Y2JteGxkQ0JzYVhabGN6STdYRzVzWlhRZ2MzUmhkR1ZVWlhoME8xeHViR1YwSUdWNGNHeHZjMmx2Ym5NN1hHNXNaWFFnWm14aGVURTdYRzVzWlhRZ1pteGhlVEk3WEc1c1pYUWdZbUZqYTJkeWIzVnVaRHRjYm14bGRDQm1hWEpwYm1kVWFXMWxjaUE5SURBN1hHNXNaWFFnWW5Wc2JHVjBWR2x0WlRFZ1BTQXdPMXh1YkdWMElHSjFiR3hsZEZScGJXVXlJRDBnTUR0Y2JtTnZibk4wSUdKMWJHeGxkRWx1ZEdWeWRtRnNJRDBnTnpBd08xeHVYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnNZWGtnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2V5QmNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dGRYTnBZeUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVZWFZrYVc4b0ozQnNZWGxOZFhOcFl5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEVocGRGTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjJKMWJHeGxkRWhwZENjcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVSWGh3Ykc5emFXOXVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnblpXNWxiWGxGZUhCc2IzTnBiMjRuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSkZlSEJzYjNOcGIyNVRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0Nkd2JHRjVaWEpGZUhCc2IzTnBiMjRuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyZGhiV1ZQZG1WeUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJYVnphV011Ykc5dmNFWjFiR3dvS1R0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxuTjBZWEowVTNsemRHVnRLRkJvWVhObGNpNVFhSGx6YVdOekxrRlNRMEZFUlNrN1hHNWNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQ0E5SUhSb2FYTXVaMkZ0WlM1aFpHUXVkR2xzWlZOd2NtbDBaU2d3TENBd0xDQXhNREF3TENBMk1EQXNJQ2RpWVdOclozSnZkVzVrSnlrN1hHNWNiaUFnSUNBZ0lDQWdMeThnUVdSa0lIQnNZWGxsY2pGY2JpQWdJQ0FnSUNBZ2NHeGhlV1Z5TVNBOUlIUm9hWE11WjJGdFpTNWhaR1F1YzNCeWFYUmxLSFJvYVhNdVoyRnRaUzUzYjNKc1pDNTNhV1IwYUNvd0xqVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNW9aV2xuYUhRdE5UWXNJQ2R3YkdGNVpYSXhKeWs3WEc0Z0lDQWdJQ0FnSUhCc1lYbGxjakV1WVc1amFHOXlMbk5sZEZSdktEQXVOU3dnTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVaVzVoWW14bEtIQnNZWGxsY2pFc0lGQm9ZWE5sY2k1UWFIbHphV056TGtGU1EwRkVSU2s3WEc0Z0lDQWdJQ0FnSUhCc1lYbGxjakV1WW05a2VTNWpiMnhzYVdSbFYyOXliR1JDYjNWdVpITWdQU0IwY25WbE95QmNiaUFnSUNBZ0lDQWdMeThnUVdSa0lHRnVhVzFoZEdsdmJpQndiR0Y1WlhJeFhHNGdJQ0FnSUNBZ0lHWnNZWGt4SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS2pBdU5Td2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZEMwd0xDQW5abXhoZVRFbktUdGNiaUFnSUNBZ0lDQWdabXhoZVRFdVlXNXBiV0YwYVc5dWN5NWhaR1FvSjJac2VTY3NJRnN4TERJc015dzBMRFVzTml3M0xEaGRMQ0EwTUNrN1hHNGdJQ0FnSUNBZ0lHWnNZWGt4TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVzSURBdU5TazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbVZ1WVdKc1pTaG1iR0Y1TVN3Z1VHaGhjMlZ5TGxCb2VYTnBZM011UVZKRFFVUkZLVHRjYmlBZ0lDQWdJQ0FnWm14aGVURXVZbTlrZVM1amIyeHNhV1JsVjI5eWJHUkNiM1Z1WkhNZ1BTQjBjblZsT3lCY2JseHVJQ0FnSUNBZ0lDQXZMeUJCWkdRZ2NHeGhlV1Z5TWx4dUlDQWdJQ0FnSUNCd2JHRjVaWEl5SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS2pBdU5Td2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZEMwb2RHaHBjeTVuWVcxbExuZHZjbXhrTG1obGFXZG9kQzAzTlNrc0lDZHdiR0Y1WlhJeUp5azdYRzRnSUNBZ0lDQWdJSEJzWVhsbGNqSXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5Td2dNQzQxS1R0Y2JpQWdJQ0FnSUNBZ2NHeGhlV1Z5TWk1aGJtZHNaU0E5SURFNE1EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVaVzVoWW14bEtIQnNZWGxsY2pJc0lGQm9ZWE5sY2k1UWFIbHphV056TGtGU1EwRkVSU2s3WEc0Z0lDQWdJQ0FnSUhCc1lYbGxjakl1WW05a2VTNWpiMnhzYVdSbFYyOXliR1JDYjNWdVpITWdQU0IwY25WbE95QmNiaUFnSUNBZ0lDQWdMeThnUVdSa0lHRnVhVzFoZEdsdmJpQndiR0Y1WlhJeVhHNGdJQ0FnSUNBZ0lHWnNZWGt5SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS2pBdU5Td2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZEMwb2RHaHBjeTVuWVcxbExuZHZjbXhrTG1obGFXZG9kQzB5TlNrc0lDZG1iR0Y1TWljcE8xeHVJQ0FnSUNBZ0lDQm1iR0Y1TWk1aGJtbHRZWFJwYjI1ekxtRmtaQ2duWm14NU1pY3NJRnN4TERJc015dzBMRFVzTml3M0xEaGRMQ0EwTUNrN1hHNGdJQ0FnSUNBZ0lHWnNZWGt5TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVzSURBdU5TazdYRzRnSUNBZ0lDQWdJR1pzWVhreUxtRnVaMnhsSUQwZ01UZ3dPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVsYm1GaWJHVW9abXhoZVRJc0lGQm9ZWE5sY2k1UWFIbHphV056TGtGU1EwRkVSU2s3WEc0Z0lDQWdJQ0FnSUdac1lYa3lMbUp2WkhrdVkyOXNiR2xrWlZkdmNteGtRbTkxYm1SeklEMGdkSEoxWlRzZ1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJCWkdRZ2NHeGhlV1Z5TVNCaWRXeHNaWFJ6WEc0Z0lDQWdJQ0FnSUdKMWJHeGxkSE14SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVuY205MWNDZ3BPMXh1SUNBZ0lDQWdJQ0JpZFd4c1pYUnpNUzVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBjekV1Y0doNWMybGpjMEp2WkhsVWVYQmxJRDBnVUdoaGMyVnlMbEJvZVhOcFkzTXVRVkpEUVVSRk8xeHVJQ0FnSUNBZ0lDQmlkV3hzWlhSek1TNWpjbVZoZEdWTmRXeDBhWEJzWlNnek1Dd2dKMkoxYkd4bGRERW5LVHRjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBjekV1YzJWMFFXeHNLQ2RoYm1Ob2IzSXVlQ2NzSURBdU5TazdYRzRnSUNBZ0lDQWdJR0oxYkd4bGRITXhMbk5sZEVGc2JDZ25ZVzVqYUc5eUxua25MQ0F6S1R0Y2JpQWdJQ0FnSUNBZ1luVnNiR1YwY3pFdWMyVjBRV3hzS0NkdmRYUlBaa0p2ZFc1a2MwdHBiR3duTENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBjekV1YzJWMFFXeHNLQ2RqYUdWamExZHZjbXhrUW05MWJtUnpKeXdnZEhKMVpTazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1FXUmtJSEJzWVhsbGNqSWdZblZzYkdWMGMxeHVJQ0FnSUNBZ0lDQmlkV3hzWlhSek1pQTlJSFJvYVhNdVoyRnRaUzVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ1luVnNiR1YwY3pJdVpXNWhZbXhsUW05a2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHSjFiR3hsZEhNeUxuQm9lWE5wWTNOQ2IyUjVWSGx3WlNBOUlGQm9ZWE5sY2k1UWFIbHphV056TGtGU1EwRkVSVHRjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBjekl1WTNKbFlYUmxUWFZzZEdsd2JHVW9NekFzSUNkaWRXeHNaWFF5SnlrN1hHNGdJQ0FnSUNBZ0lHSjFiR3hsZEhNeUxuTmxkRUZzYkNnbllXNWphRzl5TG5nbkxDQXdMalVwTzF4dUlDQWdJQ0FnSUNCaWRXeHNaWFJ6TWk1elpYUkJiR3dvSjJGdVkyaHZjaTU1Snl3Z015azdYRzRnSUNBZ0lDQWdJR0oxYkd4bGRITXlMbk5sZEVGc2JDZ25iM1YwVDJaQ2IzVnVaSE5MYVd4c0p5d2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lHSjFiR3hsZEhNeUxuTmxkRUZzYkNnblkyaGxZMnRYYjNKc1pFSnZkVzVrY3ljc0lIUnlkV1VwTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0F2THlBZ1RHbDJaWE1nY0d4aGVXVnlNVnh1SUNBZ0lDQWdJQ0JzYVhabGN6RWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNWhaR1F1ZEdWNGRDaDBhR2x6TG1kaGJXVXVkMjl5YkdRdWQybGtkR2dnTFNBNE1Dd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZENvd0xqVXJNVEl3TENBblVHeGhlV1Z5SURFbkxDQjdJR1p2Ym5RNklDY3lNSEI0SUVGeWFXRnNKeXdnWm1sc2JEb2dKeU14WkRsaVlUa25JSDBwTzF4dUlDQWdJQ0FnSUNBdkx5QnNhWFpsY3lCcFkyOXVjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SURVN0lHa3JLeWtnZXlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnphR2x3TVNBOUlHeHBkbVZ6TVM1amNtVmhkR1VvZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0xUUXdMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVhR1ZwWjJoMExUTXdNQ0FySUNnME1DQXFJR2twTENBbmMyaHBjREVuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5vYVhBeExtRnVZMmh2Y2k1elpYUlVieWd3TGpVc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnphR2x3TVM1aGJtZHNaU0E5SURrd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJocGNERXVZV3h3YUdFZ1BTQXdMalk3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUFnVEdsMlpYTWdjR3hoZVdWeU1seHVJQ0FnSUNBZ0lDQnNhWFpsY3pJZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1aFpHUXVkR1Y0ZENoMGFHbHpMbWRoYldVdWQyOXliR1F1ZDJsa2RHZ2dMU0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdnck1UVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNW9aV2xuYUhRcU1DNDFMVEV6TkN3Z0oxQnNZWGxsY2lBeUp5d2dleUJtYjI1ME9pQW5NakJ3ZUNCQmNtbGhiQ2NzSUdacGJHdzZJQ2NqWkdFeE1UQXdKeUI5S1R0Y2JpQWdJQ0FnSUNBZ0x5OGdiR2wyWlhNZ2FXTnZibk5jYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYWlBOUlEQTdJR29nUENBMU95QnFLeXNwSUhzZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSE5vYVhBeUlEMGdiR2wyWlhNeUxtTnlaV0YwWlNoMGFHbHpMbWRoYldVdWQyOXliR1F1ZDJsa2RHZ3RkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS3pRd0xDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdWFHVnBaMmgwS2pBdU5TMDVNQ0FySUNnME1DQXFJR29wTENBbmMyaHBjREluS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5vYVhBeUxtRnVZMmh2Y2k1elpYUlVieWd3TGpVc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnphR2x3TWk1aGJtZHNaU0E5SURrd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJocGNESXVZV3h3YUdFZ1BTQXdMalk3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJCWkdRZ2RHVjRkQ0IzYUdWdUlIQnNZWGxsY2pFZ2IzSWdjR3hoZVdWeU1pQm5ZVzFsSUc5MlpYSmNiaUFnSUNBZ0lDQWdjM1JoZEdWVVpYaDBJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNTBaWGgwS0hSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxDY2dKeXdnZXlCbWIyNTBPaUFuTXpCd2VDQkJjbWxoYkNjc0lHWnBiR3c2SUNjalptWm1KeUI5S1R0Y2JpQWdJQ0FnSUNBZ2MzUmhkR1ZVWlhoMExtRnVZMmh2Y2k1elpYUlVieWd3TGpVc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUhOMFlYUmxWR1Y0ZEM1MmFYTnBZbXhsSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdJRUZ1SUdWNGNHeHZjMmx2YmlCd2IyOXNYRzRnSUNBZ0lDQWdJR1Y0Y0d4dmMybHZibk1nUFNCMGFHbHpMbWRoYldVdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJR1Y0Y0d4dmMybHZibk11WTNKbFlYUmxUWFZzZEdsd2JHVW9NekFzSUNkcllXSnZiMjBuS1R0Y2JpQWdJQ0FnSUNBZ1pYaHdiRzl6YVc5dWN5NW1iM0pGWVdOb0tIUm9hWE11YzJWMGRYQkpiblpoWkdWeUxDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUFnUVc1a0lITnZiV1VnWTI5dWRISnZiSE1nZEc4Z2NHeGhlU0IwYUdVZ1oyRnRaU0IzYVhSb1hHNGdJQ0FnSUNBZ0lHTjFjbk52Y25NZ1BTQjBhR2x6TG1kaGJXVXVhVzV3ZFhRdWEyVjVZbTloY21RdVkzSmxZWFJsUTNWeWMyOXlTMlY1Y3lncE8xeHVJQ0FnSUNBZ0lDQm1hWEpsUW5WMGRHOXVNU0E5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVoWkdSTFpYa29VR2hoYzJWeUxrdGxlV0p2WVhKa0xsVlFLVHRjYmlBZ0lDQWdJQ0FnYkdWbWRGZEJVMFFnUFNCMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1WVdSa1MyVjVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNUJLVHRjYmlBZ0lDQWdJQ0FnY21sbmFIUlhRVk5FSUQwZ2RHaHBjeTVuWVcxbExtbHVjSFYwTG10bGVXSnZZWEprTG1Ga1pFdGxlU2hRYUdGelpYSXVTMlY1WW05aGNtUXVSQ2s3WEc0Z0lDQWdJQ0FnSUdacGNtVkNkWFIwYjI0eUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtRmtaRXRsZVNoUWFHRnpaWEl1UzJWNVltOWhjbVF1VXlrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHWnNZWGt4TG1GdWFXMWhkR2x2Ym5NdWNHeGhlU2duWm14NUp5azdYRzRnSUNBZ0lDQWdJR1pzWVhreUxtRnVhVzFoZEdsdmJuTXVjR3hoZVNnblpteDVNaWNwTzF4dVhHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUXVkR2xzWlZCdmMybDBhVzl1TG5rZ0t6MGdNanRjYmx4dUlDQWdJQ0FnSUNCcFppQW9jR3hoZVdWeU1TNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lGSmxjMlYwSUhSb1pTQndiR0Y1WlhJc0lIUm9aVzRnWTJobFkyc2dabTl5SUcxdmRtVnRaVzUwSUd0bGVYTmNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbGxjakV1WW05a2VTNTJaV3h2WTJsMGVTNXpaWFJVYnlnd0xDQXdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnNZWGt4TG1KdlpIa3VkbVZzYjJOcGRIa3VjMlYwVkc4b01Dd2dNQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYSnpiM0p6TG14bFpuUXVhWE5FYjNkdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR3hoZVdWeU1TNWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQXRNakF3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdac1lYa3hMbUp2WkhrdWRtVnNiMk5wZEhrdWVDQTlJQzB5TURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOMWNuTnZjbk11Y21sbmFIUXVhWE5FYjNkdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR3hoZVdWeU1TNWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQXlNREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm14aGVURXVZbTlrZVM1MlpXeHZZMmwwZVM1NElEMGdNakF3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUFnUm1seWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9abWx5WlVKMWRIUnZiakV1YVhORWIzZHVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW1hWEpsUW5Wc2JHVjBNU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVblZ1SUdOdmJHeHBjMmx2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtOTJaWEpzWVhBb1luVnNiR1YwY3pJc0lIQnNZWGxsY2pFc0lIUm9hWE11Y0d4aGVXVnlNa2hwZEhOUWJHRjVaWEl4TENCdWRXeHNMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHdiR0Y1WlhJeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlBZ1VtVnpaWFFnZEdobElIQnNZWGxsY2l3Z2RHaGxiaUJqYUdWamF5Qm1iM0lnYlc5MlpXMWxiblFnYTJWNWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0d4aGVXVnlNaTVpYjJSNUxuWmxiRzlqYVhSNUxuTmxkRlJ2S0RBc0lEQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pteGhlVEl1WW05a2VTNTJaV3h2WTJsMGVTNXpaWFJVYnlnd0xDQXdLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0d4bFpuUlhRVk5FTG1selJHOTNiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCc1lYbGxjakl1WW05a2VTNTJaV3h2WTJsMGVTNTRJRDBnTFRJd01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iR0Y1TWk1aWIyUjVMblpsYkc5amFYUjVMbmdnUFNBdE1qQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHlhV2RvZEZkQlUwUXVhWE5FYjNkdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR3hoZVdWeU1pNWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQXlNREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm14aGVUSXVZbTlrZVM1MlpXeHZZMmwwZVM1NElEMGdNakF3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUFnUm1seWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9abWx5WlVKMWRIUnZiakl1YVhORWIzZHVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW1hWEpsUW5Wc2JHVjBNaWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVblZ1SUdOdmJHeHBjMmx2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtOTJaWEpzWVhBb1luVnNiR1YwY3pFc0lIQnNZWGxsY2pJc0lIUm9hWE11SUhCc1lYbGxjakZJYVhSelVHeGhlV1Z5TWl3Z2JuVnNiQ3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNBZ0lGeHVJQ0FnSUhCc1lYbGxjakpJYVhSelVHeGhlV1Z5TVNncElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZERJdWEybHNiQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JzYVhabElEMGdiR2wyWlhNeExtZGxkRVpwY25OMFFXeHBkbVVvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHbDJaUzVyYVd4c0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QjBhR2x6TG1WdVpXMTVSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2hjSWx3aUxDQXdMQ0F3TGpVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QWdRVzVrSUdOeVpXRjBaU0JoYmlCbGVIQnNiM05wYjI1Y2JpQWdJQ0FnSUNBZ2RtRnlJR1Y0Y0d4dmMybHZiaUE5SUdWNGNHeHZjMmx2Ym5NdVoyVjBSbWx5YzNSRmVHbHpkSE1vWm1Gc2MyVXBPMXh1SUNBZ0lDQWdJQ0JsZUhCc2IzTnBiMjR1Y21WelpYUW9jR3hoZVdWeU1TNWliMlI1TG5nc0lIQnNZWGxsY2pFdVltOWtlUzU1S1R0Y2JpQWdJQ0FnSUNBZ1pYaHdiRzl6YVc5dUxuQnNZWGtvSjJ0aFltOXZiU2NzSURNd0xDQm1ZV3h6WlN3Z2RISjFaU2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCMGFHVWdjR3hoZVdWeUlHUnBaWE5jYmlBZ0lDQWdJQ0FnYVdZZ0tHeHBkbVZ6TVM1amIzVnVkRXhwZG1sdVp5Z3BJRHdnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0d4aGVXVnlNUzVyYVd4c0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHRjVNUzVyYVd4c0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFJ6TWk1allXeHNRV3hzS0NkcmFXeHNKeWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVhSbFZHVjRkQzUwWlhoMElEMGdYQ0lnVUd4aGVXVnlJRElnZDI5dUlGeGNiaUJIUVUxRklFOVdSVklnWEZ4dUlFTnNhV05ySUhSdklISmxjM1JoY25SY0lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlYUmxWR1Y0ZEM1MmFYTnBZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YlhWemFXTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZkR2hsSUZ3aVkyeHBZMnNnZEc4Z2NtVnpkR0Z5ZEZ3aUlHaGhibVJzWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXZibFJoY0M1aFpHUlBibU5sS0hSb2FYTXVjbVZ6ZEdGeWRDd2dkR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NHeGhlV1Z5TVVocGRITlFiR0Y1WlhJeUtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWME1TNXJhV3hzS0NrN1hHNGdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHeGxkQ0JzYVhabElEMGdiR2wyWlhNeUxtZGxkRVpwY25OMFFXeHBkbVVvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHbDJaUzVyYVd4c0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QjBhR2x6TG1WdVpXMTVSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2hjSWx3aUxDQXdMQ0F3TGpVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QWdRVzVrSUdOeVpXRjBaU0JoYmlCbGVIQnNiM05wYjI0Z1hHNGdJQ0FnSUNBZ0lIWmhjaUJsZUhCc2IzTnBiMjRnUFNCbGVIQnNiM05wYjI1ekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmlBZ0lDQWdJQ0FnWlhod2JHOXphVzl1TG5KbGMyVjBLSEJzWVhsbGNqSXVZbTlrZVM1NExDQndiR0Y1WlhJeUxtSnZaSGt1ZVNrN1hHNGdJQ0FnSUNBZ0lHVjRjR3h2YzJsdmJpNXdiR0Y1S0NkcllXSnZiMjBuTENBek1Dd2dabUZzYzJVc0lIUnlkV1VwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2RHaGxJSEJzWVhsbGNpQmthV1Z6WEc0Z0lDQWdJQ0FnSUdsbUlDaHNhWFpsY3pJdVkyOTFiblJNYVhacGJtY29LU0E4SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbGxjakl1YTJsc2JDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pteGhlVEl1YTJsc2JDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwY3pFdVkyRnNiRUZzYkNnbmEybHNiQ2NwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGMFpWUmxlSFF1ZEdWNGRDQTlJRndpSUZCc1lYbGxjaUF4SUhkdmJpQmNYRzRnUjBGTlJTQlBWa1ZTSUZ4Y2JpQkRiR2xqYXlCMGJ5QnlaWE4wWVhKMFhDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHRjBaVlJsZUhRdWRtbHphV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlRiM1Z1WkM1d2JHRjVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvWlNCY0ltTnNhV05ySUhSdklISmxjM1JoY25SY0lpQm9ZVzVrYkdWeVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YVc1d2RYUXViMjVVWVhBdVlXUmtUMjVqWlNoMGFHbHpMbkpsYzNSaGNuUXNJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHWnBjbVZDZFd4c1pYUXhLQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QWdWRzhnWVhadmFXUWdkR2hsYlNCaVpXbHVaeUJoYkd4dmQyVmtJSFJ2SUdacGNtVWdkRzl2SUdaaGMzUWdkMlVnYzJWMElHRWdkR2x0WlNCc2FXMXBkRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVuWVcxbExuUnBiV1V1Ym05M0lENGdZblZzYkdWMFZHbHRaVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUNCSGNtRmlJSFJvWlNCbWFYSnpkQ0JpZFd4c1pYUWdkMlVnWTJGdUlHWnliMjBnZEdobElIQnZiMnhjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBNU0E5SUdKMWJHeGxkSE14TG1kbGRFWnBjbk4wUlhocGMzUnpLR1poYkhObEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFNHbDBVMjkxYm1RdWNHeGhlU2hjSWx3aUxDQXdMQ0F3TGpVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WW5Wc2JHVjBNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklDQkJibVFnWm1seVpTQnBkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwTVM1eVpYTmxkQ2h3YkdGNVpYSXhMbmdzSUhCc1lYbGxjakV1ZVNBcklESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwTVM1aWIyUjVMblpsYkc5amFYUjVMbmtnUFNBdE9EQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRGUnBiV1V4SUQwZ2RHaHBjeTVuWVcxbExuUnBiV1V1Ym05M0lDc2dZblZzYkdWMFNXNTBaWEoyWVd3N1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWm1seVpVSjFiR3hsZERJb0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUNCVWJ5QmhkbTlwWkNCMGFHVnRJR0psYVc1bklHRnNiRzkzWldRZ2RHOGdabWx5WlNCMGIyOGdabUZ6ZENCM1pTQnpaWFFnWVNCMGFXMWxJR3hwYldsMFhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtZGhiV1V1ZEdsdFpTNXViM2NnUGlCaWRXeHNaWFJVYVcxbE1pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdJRWR5WVdJZ2RHaGxJR1pwY25OMElHSjFiR3hsZENCM1pTQmpZVzRnWm5KdmJTQjBhR1VnY0c5dmJGeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhReUlEMGdZblZzYkdWMGN6SXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJJYVhSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzSURBc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWlkV3hzWlhReUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnSUVGdVpDQm1hWEpsSUdsMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUXlMbkpsYzJWMEtIQnNZWGxsY2pJdWVDd2djR3hoZVdWeU1pNTVJQ3NnT1RncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBNaTVpYjJSNUxuWmxiRzlqYVhSNUxua2dQU0E0TURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwVkdsdFpUSWdQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNXViM2NnS3lCaWRXeHNaWFJKYm5SbGNuWmhiRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnpaWFIxY0VsdWRtRmtaWElvYVc1MllXUmxjaWtnZXlCY2JpQWdJQ0FnSUNBZ2FXNTJZV1JsY2k1aGJtTm9iM0l1ZUNBOUlEQXVNVHRjYmlBZ0lDQWdJQ0FnYVc1MllXUmxjaTVoYm1Ob2IzSXVlU0E5SURBdU1qdGNiaUFnSUNBZ0lDQWdhVzUyWVdSbGNpNWhibWx0WVhScGIyNXpMbUZrWkNnbmEyRmliMjl0SnlrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGMzUmhjblFnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xMWMybGpMbXh2YjNCR2RXeHNLQ2s3WEc0Z0lDQWdJQ0FnSUM4dmNtVnpaWFJ6SUhSb1pTQnNhV1psSUdOdmRXNTBYRzRnSUNBZ0lDQWdJR3hwZG1Wek1TNWpZV3hzUVd4c0tDZHlaWFpwZG1VbktUdGNiaUFnSUNBZ0lDQWdiR2wyWlhNeUxtTmhiR3hCYkd3b0ozSmxkbWwyWlNjcE8xeHVJQ0FnSUNBZ0lDQXZMM0psZG1sMlpYTWdkR2hsSUhCc1lYbGxjbHh1SUNBZ0lDQWdJQ0J3YkdGNVpYSXhMbkpsZG1sMlpTZ3BPMXh1SUNBZ0lDQWdJQ0JtYkdGNU1TNXlaWFpwZG1Vb0tUdGNiaUFnSUNBZ0lDQWdjR3hoZVdWeU1pNXlaWFpwZG1Vb0tUdGNiaUFnSUNBZ0lDQWdabXhoZVRJdWNtVjJhWFpsS0NrN1hHNGdJQ0FnSUNBZ0lDOHZhR2xrWlhNZ2RHaGxJSFJsZUhSY2JpQWdJQ0FnSUNBZ2MzUmhkR1ZVWlhoMExuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5TzF4dWZUdGNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnlaV3h2WVdRZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdjSEpsYkc5aFpDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG14dllXUXVhVzFoWjJVb0ozQnNZWGxsY2pFbkxDQW5MaTlwYldjdmNHeGhlV1Z5TVM1d2JtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG14dllXUXVjM0J5YVhSbGMyaGxaWFFvSjJac1lYa3hKeXdnSnk0dmFXMW5MM0JzWVhreExUSTRMVFF3TG5CdVp5Y3NJREV3TUN3Z05EQXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Ykc5aFpDNXBiV0ZuWlNnbmNHeGhlV1Z5TWljc0lDY3VMMmx0Wnk5d2JHRjVaWEl5TG5CdVp5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Ykc5aFpDNXpjSEpwZEdWemFHVmxkQ2duWm14aGVUSW5MQ0FuTGk5cGJXY3ZjR3hoZVRJdE1UQXdMVE15TG5CdVp5Y3NJREV3TUN3Z016SXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Ykc5aFpDNXBiV0ZuWlNnblluVnNiR1YwTVNjc0lDY3VMMmx0Wnk5aWRXeHNaWFJmWW14MVpTNXdibWNuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExteHZZV1F1YVcxaFoyVW9KMkoxYkd4bGRESW5MQ0FuTGk5cGJXY3ZZblZzYkdWMFgzSmxaQzV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbXh2WVdRdWMzQnlhWFJsYzJobFpYUW9KMnRoWW05dmJTY3NJQ2N1TDJsdFp5OWxlSEJzYjJSbExuQnVaeWNzSURFeU9Dd2dNVEk0S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExteHZZV1F1YVcxaFoyVW9KMkpoWTJ0bmNtOTFibVFuTENBbkxpOXBiV2N2WW1GamEyZHliM1Z1WkM1d2JtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG14dllXUXVhVzFoWjJVb0ozTm9hWEF4Snl3Z0p5NHZhVzFuTDNCc1lYbGxjakV0YkdWMlpYTXVjRzVuSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXNiMkZrTG1sdFlXZGxLQ2R6YUdsd01pY3NJQ2N1TDJsdFp5OXdiR0Y1WlhJeUxXeGxkbVZ6TG5CdVp5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KM0JzWVhsTmRYTnBZeWNzSUZzbllYVmthVzh2YlhWemFXTXZjR3hoZVM1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduWW5Wc2JHVjBTR2wwSnl3Z1d5ZGhkV1JwYnk5emIzVnVaQzlpZFd4c1pYUXRhR2wwTG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2RsYm1WdGVWTm9iM1FuTENCYkoyRjFaR2x2TDNOdmRXNWtMMlZ1WlcxNUxYTm9iM1F1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMlZ1WlcxNVJYaHdiRzl6YVc5dUp5d2dXeWRoZFdScGJ5OXpiM1Z1WkM5bGJtVnRlUzFsZUhCc2IzTnBiMjR1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KM0JzWVhsbGNsTm9iM1FuTENCYkoyRjFaR2x2TDNOdmRXNWtMM0JzWVhsbGNpMXphRzkwTG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2R3YkdGNVpYSkZlSEJzYjNOcGIyNG5MQ0JiSjJGMVpHbHZMM052ZFc1a0wzQnNZWGxsY2kxbGVIQnNiM05wYjI0dWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjJkaGJXVlBkbVZ5Snl3Z1d5ZGhkV1JwYnk5emIzVnVaQzluWVcxbExXOTJaWEl1YlhBekoxMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaUzV6ZEdGeWRDZ25VR3hoZVNjcE8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PSJ9
