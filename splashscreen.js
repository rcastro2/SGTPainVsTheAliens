

var splashscreen = function(game){
	console.log("%cStarting my awesome splash","color:white;background:orange");
};

splashscreen.prototype = {
		preload:function () {
			this.game.load.image('bk','assets/bk1.png');
			this.game.load.image('title','assets/title.png');
			this.game.load.image('play','assets/play.png');
			this.game.load.image('pointer','assets/pointer.png');
		},
		create:function () {
			bk = this.game.add.sprite(0,0,'bk');
			var gameTitle = this.game.add.sprite(260,160,"title");

			gameTitle.anchor.setTo(0.5,0.5);
			var playButton = this.game.add.button(560,380,"play",this.playTheGame,this);
			playButton.anchor.setTo(0.5,0.5);

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
