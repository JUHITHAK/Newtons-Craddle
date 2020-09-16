class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  