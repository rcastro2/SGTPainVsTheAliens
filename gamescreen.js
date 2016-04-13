

var gamescreen = function(game){
	console.log("%cStarting my awesome game","color:white;background:red");
};

gamescreen.prototype = {
		preload:function () {
			this.game.load.image('bk','assets/bk1.png');
			this.game.load.image('dude','assets/dude.png');
			this.game.load.image('alien1','assets/alien1.png');
			this.game.load.image('diamond','assets/diamond.png');
		},
		create:function () {

			bk1 = this.game.add.sprite(0,0,'bk');
			bk2 = this.game.add.sprite(bk1.width,0,'bk');

			dude = this.game.add.sprite(0,0,'dude');
			dude.scale.setTo(0.35,0.35);
		  this.game.physics.arcade.enable(dude);

			alien1 =this.game.add.sprite(this.game.world.width,Math.random() * this.game.world.height,'alien1');
		  alien1.scale.setTo(0.35,0.35);
			this.game.physics.arcade.enable(alien1);
			alien1.body.velocity.x = -100;

			diamond =this.game.add.sprite(this.game.world.width,Math.random() * this.game.world.height,'diamond');
			this.game.physics.arcade.enable(diamond);
			diamond.body.velocity.x = -200;

			keys =this.game.input.keyboard.createCursorKeys();
			score = 0;
			scoreText =this.game.add.text(10, 10, 'Score: 0', { fontSize: '32px', fill: '#000' });
		},

		update:function () {
			scrollBK(2);
			controlDude(keys);
			if(this.game.physics.arcade.overlap(dude, alien1)){
				dude.kill();
				this.game.state.start("endingscreen");
			}
			if(this.game.physics.arcade.overlap(dude, diamond)){
				diamond.body.x =this.game.world.width;
				diamond.body.y = Math.random() *this.game.world.height;
				score += 100;
				scoreText.text = "Score: " + score;
			}
			if(alien1.body.x + alien1.body.width < 0){
				alien1.body.x =this.game.world.width;
				alien1.body.y = Math.random() *this.game.world.height;
			}
			if(diamond.body.x + diamond.body.width < 0){
				diamond.body.x =this.game.world.width;
				diamond.body.y = Math.random() *this.game.world.height;
			}
		},

}
function controlDude(keys){
	speed = 150;
	if (keys.left.isDown)
	{
			dude.body.velocity.x = -speed;
	}
	else if (keys.right.isDown)
	{
			dude.body.velocity.x = speed;
	}

	if (keys.up.isDown)
	{
			dude.body.velocity.y = -speed;
	}
	else if (keys.down.isDown)
	{
			dude.body.velocity.y = speed;
	}
}
function scrollBK (amt){
	bk1.x -= amt;
	bk2.x -= amt;
	if(bk1.x + bk1.width < 0){
				bk1.x = bk2.x + bk2.width;
	}
	if(bk2.x + bk2.width < 0){
				bk2.x = bk1.x + bk1.width;
	}
}
