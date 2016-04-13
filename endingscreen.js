

var endingscreen = function(game){
	console.log("%cStarting my ending splash","color:white;background:green");
};

endingscreen.prototype = {
		preload:function () {
			this.game.load.image('bk','assets/bk3.png');
			this.game.load.image('gameover','assets/gameover.png');
			this.game.load.image('play','assets/play.png');
			this.game.load.image('pointer','assets/pointer.png');
		},
		create:function () {
			bk = this.game.add.sprite(0,0,'bk');
			var gameTitle = this.game.add.sprite(320,160,"gameover");
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
