

var endingscreen = function(game){
	console.log("%cStarting my ending splash","color:white;background:green");
};

endingscreen.prototype = {
		preload:function () {

		},
		create:function () {
			bk = this.game.add.sprite(0,0,'bk1');
			var gameTitle = this.game.add.sprite(320,160,"gameover");
			gameTitle.anchor.setTo(0.5,0.5);
			var playButton = this.game.add.button(560,380,"play",this.playTheGame,this);
			playButton.anchor.setTo(0.5,0.5);

			hero = this.game.add.sprite(10,300,'hero');
			hero.scale.setTo(0.50,0.50);

			pointer = this.game.add.sprite(0,0,"pointer");
		},
		update:function(){
			pointer.x = this.game.input.activePointer.position.x;
			pointer.y = this.game.input.activePointer.position.y;
		},
	  playTheGame: function(){
			this.game.state.start("gamescreen",true,false,1);
		}
}
