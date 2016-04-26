

var gamescreen = function(game){
	console.log("%cStarting my awesome game","color:white;background:red");
};

gamescreen.prototype = {
		preload:function () {
			game = this.game;
			game.load.image('bk','assets/bk3.png');
			game.load.image('dude','assets/dude.png');
			game.load.image('alien1','assets/alien1.png');
			game.load.image('alien2','assets/alien2.gif');
			game.load.image('alien3','assets/alien3.gif');
			game.load.image('diamond','assets/diamond.png');
			game.load.image('gameover','assets/gameover.png');

			game.load.audio('zip','assets/hitCoin_sound.ogg');
			game.load.audio('die','assets/hit.wav');
		},
		create:function () {
			init();
			bk = new Background('bk');

			hero = new Sprite('dude');
			hero.resizeBy(25);
			speed = 100;

			diamond = new Sprite('diamond',world.width,world.randomY);
			diamond.vx = -120;

			aliens = loadAliens(1);

			health = 10;
			healthText = new Text(10,10);
			healthText.text = "Health: " + health;

			gameover = new Sprite('gameover',200,200);
			gameover.visible = false;

			zip = new Sound('zip');
			die = new Sound('die');

		},

		update:function () {
			bk.scroll(-2)
			this.controlDude();
			if(hero.collidedWith(diamond)){
				diamond.moveTo(world.width, world.randomY);
				health += 10;
				healthText.text = "Health: " + health;
				zip.play();
			}
			if(diamond.isOffScreen('left')){
				diamond.moveTo(world.width, world.randomY);
			}

			for(var index in aliens){
				var alien = aliens[index]
				if(hero.collidedWith(alien)){
					alien.kill()
					die.play();
					for(var pos in aliens){
						aliens[pos].vx -= 20;
					}
					health -= 10;
					healthText.text = "Health: " + health;
				}
			}
			if(health <= 0){
				gameover.visible = true;
			}
		},
		controlDude:function(){
			if (keys.right.isDown)
			{
					hero.vx = speed;
			}
			else if (keys.left.isDown)
			{
					hero.vx = -speed;
			}

			if (keys.up.isDown)
			{
					hero.vy = -speed;
			}
			else if (keys.down.isDown)
			{
					hero.vy = speed;
			}

		}
}
