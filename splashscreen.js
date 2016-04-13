

var splashscreen = function(game){
	console.log("%cStarting my awesome splash","color:white;background:orange");
};

splashscreen.prototype = {
		preload:function () {
			this.game.load.image('bk','assets/bk3.png');
			this.game.load.image('title','assets/title.png');
			this.game.load.image('play','assets/play.png');
			this.game.load.image('pointer','assets/pointer.png');
			this.game.load.image('dude','assets/dude.png');
			this.game.load.image('alien1','assets/alien1.png');
		},
		create:function () {
			bk = this.game.add.sprite(0,0,'bk');
			var gameTitle = this.game.add.sprite(350,160,"title");

			gameTitle.anchor.setTo(0.5,0.5);
			var playButton = this.game.add.button(600,380,"play",this.playTheGame,this);
			playButton.anchor.setTo(0.5,0.5);

			dude = this.game.add.sprite(10,300,'dude');
			dude.scale.setTo(0.50,0.50);

			alien1 =this.game.add.sprite(500,20,'alien1');
		  alien1.scale.setTo(0.50,0.50);

			pointer = this.game.add.sprite(0,0,"pointer");
		},
		update:function(){
			pointer.x = this.game.input.activePointer.position.x;
			pointer.y = this.game.input.activePointer.position.y;
		},
	  playTheGame: function(){
			this.game.state.start("gamescreen");
		}
}
