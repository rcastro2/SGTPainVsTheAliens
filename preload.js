var preload = function(game){}

preload.prototype = {
	preload: function(){
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
		this.game.load.image('title','assets/title.png');
		this.game.load.image('play','assets/play.png');
		this.game.load.image('pointer','assets/pointer.png');
		this.game.load.image('bk1','assets/bk1.png');
		this.game.load.image('bk2','assets/bk2.png');
		this.game.load.image('bk3','assets/bk3.png');
		this.game.load.image('hero','assets/dude.png');
		this.game.load.image('alien1','assets/alien1.png');
		this.game.load.image('alien2','assets/alien2.png');
		this.game.load.image('alien3','assets/alien3.gif');
		this.game.load.image('diamond','assets/diamond.png');
		this.game.load.image('gameover','assets/gameover.png');

		this.game.load.audio('zip','assets/hitCoin_sound.ogg');
		this.game.load.audio('die','assets/hit.wav');
	},
  	create: function(){
		this.game.state.start("splashscreen");
	}
}
