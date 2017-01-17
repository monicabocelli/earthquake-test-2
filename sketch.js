var dots = [];

var value = 0;  //starting value of earthquake
    

function setup(){
     createCanvas(windowWidth, windowHeight);
}

function draw(){
     background(204);
     angleMode(DEGREES);
    
     textSize(20);
     textAlign(CENTER);
     textStyle(NORMAL);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2, 30);    
    
    var magnitude = int(map(value, 0, value, 0, 10));
    
    if (value > 0){
        
        //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);

    //magnitude indication
    fill(0);
    noStroke();    
    
    textSize(height/40);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
        
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text(magnitude,width/2, height - height/6.7);
    
    textSize(height/35);
    text(value, width/2, height - height/7.2);
        
    textStyle(BOLD);
    textSize(height/30);
    text('SEE RESULTS', width/2, height - height/12);
        
    }    
    
    
    
    //draw dots and given methods (actions)
      noStroke();
      fill(0);
      for (var i = 0; i < value*10; i++){
        dots[i].move();
        dots[i]. display();
        
      }
  
}
   

function deviceShaken(){
    
    value = (accelerationX * accelerationY * accelerationZ)*2;   
   
    //create objects
    for (var i = 0; i < value*10; i++){
        dots.push(new QuakeDots());
    } 
    
}


function QuakeDots(){
  
    var a = random(0,360);
    var b = random(0,value);//r = value = 30
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
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

