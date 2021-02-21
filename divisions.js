class division{
  constructor(x,y,w,h){
    var options ={
      //Make it static
      isStatic:true
    }
    //Create a rectangle
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w = w
    this.h = h
    //Add it to the world
    World.add(world,this.body);
  }
  display(){
    //Create a pos variable
    var pos = this.body.position
    rectMode(CENTER);
    //Make it white
    fill("white");
    //Make it a rectangle
    rect(pos.x,pos.y,this.w,this.h);

  }
}