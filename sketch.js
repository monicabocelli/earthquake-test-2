//var dots = [];

var value = 0;  //starting value of earthquake
var magnitude;
    

function setup(){
    createCanvas(500, 800);
   /* 
    //create objects
    for (var i = 0; i < value*5; i++){
        dots.push(new QuakeDots());
    }
    */
}

function draw(){
    background(204);

    magnitude = map(value, 0, 1000, 0, 10);    
  
    
        //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);
    
    
    
    /*
    //draw dots and given methods (actions)
      noStroke();
      fill(0);
      for (var i = 0; i < value*5; i++){
        dots[i].move();
        dots[i]. display();
        
      }
        
   */
    
}
   

function deviceShaken(){
    
    value = value + (accelerationX * accelerationY * accelerationZ);
    
    //QuakeDots();    
    if (value = 0){
     textFont('Inconsolata');
     textSize(30);
     textAlign(CENTER);
     textStyle(NORMAL);
     text("SHAKE YOUR DEVICE", width/2, height/2);    
    } else if (value > 0){
        //magnitude indication
    textFont('Inconsolata');
    textSize(12);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width - width/6, height/3.5);
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD); 
    
    text(magnitude, width - width/6, height/2); 
    
    textSize(20);
    text('SEE RESULTS', width/2, height/1.1);

    }
    
}

/*
function QuakeDots(){
    
    var d = dist(width/2,height/2,width/2+value/2,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 4;
    this.speed = 1.5; //magnitude


    this.move = function(){
      this.xdot += random(-this.speed,this.speed);
      this.ydot += random(-this.speed,this.speed);
    }

    this.display = function(){
      ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
    };

    
}
*/
