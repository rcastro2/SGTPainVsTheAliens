function init(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
  keys = game.input.keyboard.createCursorKeys();
	pointer = new Pointer();
  world = game.world
}
function Pointer(){
	this.pointer = game.input.activePointer;
	Object.defineProperty(this, "x", {
				get: function() {
					return this.pointer.position.x;
				},
				configurable: false
		 });
	Object.defineProperty(this, "y", {
				get: function() {
					return this.pointer.position.y;
				},
				configurable: false
		});
	Object.defineProperty(this, "isDown", {
				get: function() {
					return this.pointer.isDown;
				},
				configurable: false
		});

}
function Sprite(image,x,y){
		this.sprite = game.add.sprite(x || 0, y || 0, image);
    game.physics.arcade.enable(this.sprite)

		Object.defineProperty(this, "x", {
		      get: function() {
		        return this.sprite.body.x;
		      },
		      set: function(x) {
		        this.sprite.body.x = x;
		      },
		      configurable: false
		   });
	  Object.defineProperty(this, "y", {
	 		      get: function() {
	 		        return this.sprite.body.y;
	 		      },
	 		      set: function(y) {
	 		        this.sprite.body.y = y;
	 		      },
	 		      configurable: false
	 		  });
	    Object.defineProperty(this, "angle", {
	 		      get: function() {
	 		        return this.sprite.angle;
	 		      },
	 		      set: function(y) {
	 		        this.sprite.angle = y;
	 		      },
	 		      configurable: false
	 		  });
		 Object.defineProperty(this, "visible", {
		 		      get: function() {
		 		        return this.sprite.visible;
		 		      },
		 		      set: function(y) {
		 		        this.sprite.visible = y;
		 		      },
		 		      configurable: false
		 		  });
    Object.defineProperty(this, "vx", {
    		    get: function() {
    		      return this.sprite.body.velocity.x;
    		    },
    		    set: function(x) {
    		      this.sprite.body.velocity.x = x;
    		    },
    		    configurable: false
    		});
    Object.defineProperty(this, "vy", {
    	 		  get: function() {
    	 		    return this.sprite.body.velocity.y;
    	 		  },
    	 		  set: function(y) {
    	 		    this.sprite.body.velocity.y = y;
    	 		  },
    	 		  configurable: false
    	 	});
		this.collidedWith = function(obj){
			  return game.physics.arcade.overlap(this.sprite, obj.sprite)
		}
    this.resizeBy = function(amt){
      this.sprite.scale.setTo(amt/100,amt/100);
    }
		this.moveTo = function(x,y){
				this.sprite.body.x = x - this.sprite.width/2;
				this.sprite.body.y = y - this.sprite.height/2;
		}
		this.kill = function(){
			this.sprite.kill();
		}

		this.isOffScreen =  function(side){
			if((side.toUpperCase() == "LEFT" || side.toUpperCase() == "ANY") && this.sprite.body.right < 0){
				return true;
			}
			if((side.toUpperCase() == "RIGHT" || side.toUpperCase() == "ANY") && this.sprite.body.left > game.world.width){
				return true;
			}
			if((side.toUpperCase() == "TOP" || side.toUpperCase() == "ANY") && this.sprite.body.top < 0){
				return true;
			}
			if((side.toUpperCase() == "BOTTOM" || side.toUpperCase() == "ANY") && this.sprite.body.bottom > game.world.height){
				return true;
			}

			return false;

		}

}
function Text(x,y){
	this.display = game.add.text(x, y, '', { fontSize: '32px', fill: '#000' });
	Object.defineProperty(this, "text", {
					get: function() {
						return this.display.text;
					},
					set: function(data) {
						this.display.text = data;
					},
					configurable: false
			});
}
function Sound(s){
	this.audio = game.add.audio(s);
	this.audio.loop = false;
	this.play = function(loop){
		this.audio.play();
	}
}
function Background(image){
		this.sprite1 = game.add.sprite(0, 0, image);
    this.sprite2 = game.add.sprite(this.sprite1.width, 0, image);
		this.scroll = function (amt){
			this.sprite1.x += amt;
			this.sprite2.x += amt;
			if(amt < 0){
				if(this.sprite1.x + this.sprite1.width < 0){
					this.sprite1.x = this.sprite2.x + this.sprite2.width;
				}
				if(this.sprite2.x + this.sprite2.width < 0){
					this.sprite2.x = this.sprite1.x + this.sprite1.width;
				}
			}
			else if(amt > 0){
				if(this.sprite1.x > game.world.width){
					this.sprite1.x = this.sprite2.x - this.sprite1.width;
				}
				if(this.sprite2.x > game.world.width){
					this.sprite2.x = this.sprite1.x - this.sprite2.width;
				}
			}

		}

}

var loadAliens = function(level){
  var array = [];
  var object;
  var alien;
  level--;

  for(var index in waves[level]["objects"]){
    object = waves[level]["objects"][index];
    var tmp = new Sprite(object.id,-1000,-1000);
    tmp.resizeBy(25);
    var width = tmp.sprite.width;
    var height = tmp.sprite.height;

    alien = new Sprite(object.id, world.width + width * object.horizontal, height * object.vertical);
    alien.resizeBy(object.scale);
  	alien.vx = -120;
    array.push(alien)
  }
  return array;
}
