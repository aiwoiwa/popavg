// phina.js をグローバル領域に展開
phina.globalize();

var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var PIECE_SIZE      = 50;
var PIECE_SIZE_HALF = PIECE_SIZE/2;

// MainScene クラスを定義
phina.define("MainScene", 
{
  superClass: 'DisplayScene',

  init: function() 
  {
    this.superInit({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });

    this.fromJSON(
    {
      children: 
      {
        wordGroup: 
        {
          className: 'DisplayElement'
        },
        scoreLabel: 
        {
          className: 'Label',
          text: '999',
          x: this.gridX.span(15),
          y: this.gridX.span(1),
          align: 'right'
        }
      }
    });

    this.score = 0;
    this.scoreLabel.text = this.score + '';
    //背景色を指定
    this.backgroundColor = '#444';
    //ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
  },

  onkeydown: function(e) {
    var ch = String.fromCharCode(e.keyCode)
    var wordGroup = this.wordGroup;
    var result = wordGroup.children.some(
      function(word) 
      {
        if (word.enable && word.text === ch) {
          word.disappear();
          return true;
        }
        return false;
      }
    );

    if (result) {
      this.score += 1;
      this.scoreLabel.text = this.score + '';
    }

    // space if push space
    if (e.keyCode === 32) {
      this.app.stop();
    }
  },

  update: function(app) {
    if (app.frame % 16 === 0) {
      this.createWord();
    }
  },

  createWord: function() {
    // F G H K
    //C V B N M
    var ascii = [67,70,86,71,66,72,78,74,77];
    var idx = Math.floor(Math.random() * ascii.length);
    var ch = String.fromCharCode(ascii[idx]);
    var word = Word(ch).addChildTo(this.wordGroup);
    word.x = PIECE_SIZE_HALF + PIECE_SIZE * idx;
    word.y = -100;

    word.onattack = function() {
      this.exit({
        score: this.score,
      });
    }.bind(this);

    return word;
  }

});

phina.define('Word', {
  superClass: 'Button',

  init: function(word) {
    this.superInit({
      width: PIECE_SIZE,
      height: 30,
      text: word,
      fill: ['C', 'M'].includes(word) ? 'white'
          : ['F', 'J'].includes(word) ? 'yellow'
          : ['V', 'N'].includes(word) ? 'green'
          : ['G', 'H'].includes(word) ? 'blue'
          : 'red'
    });
    this.enable = true;
  },

  update: function() {
    this.y += 8;

    if (this.y > 960) {
      this.flare('attack');
      this.remove();
    }
  },

  disappear: function() {
    this.enable = false;
    this.tweener
      .to({
        scaleX: 2,
        scaleY: 2,
        alpha: 0,
      }, 250)
      .call(function() {
        this.target.remove();
      })
      ;
  }
});

//メイン処理
phina.main(function() {
  //アプリケーション生成
  var app = GameApp({
    title: 'typing game',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    startLabel: location.search.substr(1).toObject().scene || 'main', //メインシーンから開始する
  });

  //アプリケーション実行
  //app.enableStats();
  app.run();
});