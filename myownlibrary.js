isTouching(object1,object2){

    if ( object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y -object2.y<object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.shapeColor="blue";
        object2.shapeColor="blue"
    }
    else {
        object1.shapeColor="green";
        object2.shapeColor="green"
      }
    
    }
    