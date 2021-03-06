var dots = [];
var value = 0;
   
function setup(){
     createCanvas(windowWidth, windowHeight); 
}

function draw(){
     background(204);
     angleMode(DEGREES);
    
     textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.1);    
    
   var magnitude = int(map(value, 0, 500, 0, 10)); 
    //var magnitude = int(value);
    if (value > 0){    
        
     //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value * 2; 
    
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
    
    textSize(height/50);
    textAlign(CENTER);
    textStyle(NORMAL);    
    text(value, width/2, height - height/8);
        
    textStyle(BOLD);
    textSize(height/30);
    text('SEE RESULTS', width/2, height - height/12);
        
    }    
    
    
    //draw dots and given methods (actions)
      noStroke();
      fill(0);
      for (var i = 0; i < value*100; i++){
        dots[i].move();
        dots[i]. display();
        
      }
  
}
   

function deviceShaken(){
    
    value = (pAccelerationX * pAccelerationY * pAccelerationZ)/300;   
   
    //create objects
    for (var i = 0; i < value*100; i++){
        dots.push(new QuakeDots());
    } 
    
}


function QuakeDots(){
    
    
    var a = random(0,360);
    var b = random(0,value * 1.6);
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    
    //var d = dist(width/2,height/2,width/2+value,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 6;
    this.speed = 4; //according to magnitude
        

this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
 
}

this.display = function(){
    if(this.xdot > width/2 + d || this.xdot < width/2 - d || this.ydot > height/2 + d || this.ydot < height/2 - d){
       this.xdot = random(width/2 - d, width/2 + d);
       this.ydot = random(height/2 - d, height/2 + d); 
       }
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};
 
}
