class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
			
		this.image = loadImage("dustbingreen.png");

		this.bottomBody=Bodies.rectangle(this.x, this.y, 60,100, {isStatic:true});
		this.width = 60;
		this.height = 100
		World.add(world, this.bottomBody);

	}
	display()
	{
		imageMode(CENTER)
		image(this.image,this.bottomBody.position.x,this.bottomBody.position.y,this.width,this.height);		
			
	}

}