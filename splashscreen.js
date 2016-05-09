

var splashscreen = function(game){
	console.log("%cStarting my awesome splash","color:white;background:orange");
};

splashscreen.prototype = {
		preload:function () {

		},
		create:function () {
			bk = this.game.add.sprite(0,0,'bk1');
			var gameTitle = this.game.add.sprite(350,160,"title");

			gameTitle.anchor.setTo(0.5,0.5);
			var playButton = this.game.add.button(600,380,"play",this.playTheGame,this);
			playButton.anchor.setTo(0.5,0.5);

			hero = this.game.add.sprite(10,300,'hero');
			hero.scale.setTo(0.50,0.50);

			alien1 =this.game.add.sprite(500,20,'alien1');
		  alien1.scale.setTo(0.50,0.50);

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
