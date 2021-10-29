let user_ship;

function setup(){
    createCanvas(600,600);
    user_ship = new UserShip();
}

function draw(){
    background('gray');
    if (keyIsPressed) {
        keyOperation();
    }
    user_ship.show();
}

function keyOperation(){
    if (keyCode == UP_ARROW) {
        user_ship.move(0,-10);
    } else if (keyCode == DOWN_ARROW) {
        user_ship.move(0,10);
    } else if (keyCode == LEFT_ARROW) {
        user_ship.move(-10,0);
    } else if (keyCode == RIGHT_ARROW) {
        user_ship.move(10,0);
    }
}


class UserShip {
    constructor() {
        this.body = createVector(0,0);
        this.size = 30;
    }

    move(x, y) {
        this.body.x += x;
        this.body.y += y;
    }

    show() {
        fill('black');
        rect(this.body.x, this.body.y, this.size);
    }
}