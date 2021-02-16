var hipnoticball, database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
  hipnoticball = createSprite(250,250,10,10);
    hipnoticball.shapeColor = "red";
    var hipnoticballposition = database.ref("ball/position")
    hipnoticballposition.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.ref()
    hipnoticball.x = position.x
    hipnoticball.y = position.y
}
function writePosition(x,y){
    database.ref(ball/position).set({
   x:position.x+x,
   y:position.y+y
    })
}
