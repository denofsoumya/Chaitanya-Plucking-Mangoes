class Slingshot{
    constructor(bodyA, pointB, length, stiffness) {
        var options = {
           bodyA:bodyA,
            pointB:pointB,
            length:length,

            stiffness:stiffness
        }
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)
    }
    fly(){
        this.slingshot.bodyA=null;
      }
      
            display(){
              image(this.sling1, 200, 20)
              image(this.sling2, 170, 20)
      
              if(this.slingshot.bodyA){
            var  pos1=this.slingshot.bodyA.position
           var   pos2=this.slingshot.pointB
             
              push();
              if (pos1.x<220){
      strokeWeight(3)
      stroke(49, 22, 8)
      
      line(pos1.x-20, pos1.y, pos2.x-20, pos2.y)
      line(pos1.x-20, pos1.y, pos2.x+20, pos2.y)
      image(this.sling3, pos1.x-20, pos1.y-10, 10, 30)}
      else{
        strokeWeight(3)
      stroke(49, 22, 8)
      
      line(pos1.x+20, pos1.y, pos2.x-20, pos2.y)
      line(pos1.x+20, pos1.y, pos2.x+20, pos2.y)
      image(this.sling3, pos1.x+20, pos1.y-10, 10, 30)}
      
              pop();
              }
            }
      }