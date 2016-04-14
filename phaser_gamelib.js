function init(){
  keys = game.input.keyboard.createCursorKeys();
  world = game.world
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
		this.isOffScreen =  function(side){
			if(side.toUpperCase() == "LEFT" && this.sprite.body.right < 0){
				return true;
			}
			if(side.toUpperCase() == "RIGHT" && this.sprite.body.left > game.world.width){
				return true;
			}
			if(side.toUpperCase() == "TOP" && this.sprite.body.top < 0){
				return true;
			}
			if(side.toUpperCase() == "BOTTOM" && this.sprite.body.bottom > game.world.height){
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
			if(this.sprite1.x + this.sprite1.width < 0){
				this.sprite1.x = this.sprite2.x + this.sprite2.width;
			}
			if(this.sprite2.x + this.sprite2.width < 0){
				this.sprite2.x = this.sprite1.x + this.sprite1.width;
			}
		}

}
