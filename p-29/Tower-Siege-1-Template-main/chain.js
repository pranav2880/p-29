class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:20
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }  
    display(){
    if(this.chain.bodyA){
        var pa=this.chain.bodyA.position
    var pb=this.pointB;
    strokeWeight(4);
        line(pa.x,pa.y,pb.x,pb.y)
    }
}
fly(){
  
    this.chain.bodyA = null;
    
}

}