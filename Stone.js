class Stone{
    constructor(x,y,width,height){
   var options = {
       'restitution':0.8,
       'friction':0.7,
       'densety':5
       };
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
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
			fill("green");
            rect(0,0, this.width, this.height);

			//draw the ellipse here to display the rubber ball
			//ellipse(0,0,this.r,this.r);
			pop();

            
    	
	}

}