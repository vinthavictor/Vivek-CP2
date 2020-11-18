class Dustbin {

    constructor(x, y){
     this.x = x;
     this.y=y;
     this.dustbinw=200;
     this.dustbih=100;
     this.wallthickness=20;
     this.avngle =0;

     this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinw,this.wallthickness,{isStatic:true});
     this.leftwallbody = Bodies.rectangle(this.x-this.dustbinw/2,this.y-this.dustbih/2,this.wallthickness,this.dustbih,{isStatic:true});
Matter.Body.setAngle(this.leftwallbody,this.avngle);

this.rightwall = Bodies.rectangle(this.x+this.dustbinw/2,this.y-this.dustbinh/2,this.wallthickness,this.dustbinh,{isStatic:true});
Matter.Body.setAngle(this.rightwall,this.avngle);
World.add(world,this.leftwallbody)
World.add(world,this.bottomBody)
World.add(world,this.rightwall)
    }
    display(){
        var posB=this.bottomBody.position;
        var posl=this.leftwallbody.position;
        var posr=this.rightwall.position;

        push()
        translate(posr.x,posr.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.avngle);
        rect(0,0,this.wallthickness,this.dustbih);
        pop();

        push()
        translate(posl.x,posl.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rotate(this.avngle);
        rect(0,0,this.wallthickness,this.dustbih);
        pop();

        push()
        translate(posB.x,posB.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rect(0,0,this.dustbinw,this.wallthickness);
        pop();

    }
}