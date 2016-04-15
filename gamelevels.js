var waves = [
    {
      "level":1,
      "objects":[
        {"id":'alien1',"x":0,"y":0},
        {"id":'alien1',"x":0,"y":500},
        {"id":'alien1',"x":200,"y":100},
        {"id":'alien1',"x":200,"y":400},
        {"id":'alien1',"x":400,"y":200},
        {"id":'alien1',"x":400,"y":300}
      ]

    }
]
var loadAliens = function(level){
  var array = [];
  var object;
  var alien;
  for(var index in waves[level]["objects"]){
    object = waves[level]["objects"][index];
    alien = new Sprite(object.id,world.width + object.x,object.y);
    alien.resizeBy(35);
  	alien.vx = -120;
  }
}
