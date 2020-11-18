class Paper {

    constructor(x, y, radius){
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density: 1.2
       }   
      this.paper = Bodies.circle(x, y, radius/2, options);    
      this.r = radius;
      World.add(world, this.paper);
    }
    display(){
      var pos = this.paper.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("purple");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }