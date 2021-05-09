class Ball{

    constructor(x,y){

        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1.0,
            
        }
        this.x=x;
        this.y=y;
        this.r=100;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);


    }
    display(){
    var ballpos=this.body.position;

    push();
    translate(ballpos.x,ballpos.y)
    fill("pink");
    stroke("black")
    rectMode(CENTER)
    strokeWeight(2)
    ellipse(0,0,this.r,this.r);
   
    pop();



    }

}