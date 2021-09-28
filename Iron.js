class Iron{
    constructor(x,y){
   var options = {
       'restitution':0.8,
       'friction':3,
       'densety':0.5
       };
       this.body = Bodies.rectangle(x, y, 50, 50, options);
       this.width = 150;
       this.height = 40;
       World.add(world, this.body);

    };
    display()
	{
		var pos=this.body.position;	
        var angle = this.body.angle;	
			push();
			translate(pos.x, pos.y);
			rectMode(CENTER);
            rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			//ellipse(0,0,this.r,this.r);
            rect (0,0,this.width,this.height);
			pop();
    	
	}

};