class rubber {
    constructor(x, y,radius) {
      var options = {
          //'restitution':1,
         // 'friction':4,
       //   'density':2,
          isStatic: false
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius=radius
      
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      var angle = this.body.angle;

      push();
     translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     stroke ("green")
      strokeWeight(4)
      fill("Black");
      text ("rubber")
      rect(0, 0, this.radius);
      pop();
    }
  };