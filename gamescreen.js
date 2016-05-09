

var gamescreen = function(game){
	console.log("%cStarting my awesome game","color:white;background:red");
};

gamescreen.prototype = {
		init:function(level){
			current = level;
		},
		preload:function () {
			game = this.game;
		},
		create:function () {
			init();

			bk = new Background(levels[current].bk);

			hero = new Sprite('hero');
			hero.resizeBy(25);
			speed = 100;

			diamond = new Sprite('diamond',world.width,world.randomY);
			diamond.vx = -120;

			aliens = loadAliens(levels[current].objects);

			health = 10;
			healthText = new Text(10,10);
			healthText.text = "Health: " + health;

			gameover = new Sprite('gameover',200,200);
			gameover.visible = false;

			zip = new Sound('zip');
			die = new Sound('die');
      levelBegin = false;
		},

		update:function () {
			bk.scroll(-2)
			this.controlHero();
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
				this.game.state.start("endingscreen",true,false,2);
			}
		},
		controlHero:function(){
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
