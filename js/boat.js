class Boat {
    contructor(x, y, width, height, boatPos){

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage("assets/boat.png");
        this.boatPos = boatPos;

        World.add(world, this.body);

    }

    display(){
        //var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        this.image(this.image, 0, this.boatPos, this.width, this.height);

        pop();

    }
}