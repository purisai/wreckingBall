class Ball {
    constructor(x, y,width,height) {
      var options = {
        'density':1,
        'frictionAir': 0.00005,

      };
      this.body = Bodies.rectangle(x, y, width,height , options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke(0)
      fill(255)
      ellipseMode(RADIUS)
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };
  