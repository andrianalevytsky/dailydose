$(document).ready(function(){
  let md = true;
  let canvas = document.getElementById('canvas');
  let body = document.getElementById('body');
  let context = canvas.getContext('2d');
  const randomize = document.querySelector('#random')
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  let currentCircle = {x: 0, y: 0};
  let allCircles = [];

    // loading screen function
      window.addEventListener("load", ()=>{
        $(".loading-container").fadeOut("slow");
      })


  body.addEventListener('mousedown', down);
  body.addEventListener('mouseup', toggledraw);
  body.addEventListener('mousemove',
  function(evt){
    let mousePos = getMousePos(canvas, evt);
    let posx =  mousePos.x;
    let posy = mousePos.y;
    allCircles.push({x: posx, y: posy});
    console.log(allCircles)
    draw(canvas, posx, posy);

  });

  function changeSize(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  window.addEventListener("resize", ()=>{
    changeSize();
  })




  function down(){
    md =true;
  }
  function toggledraw(){
    md =true;
  }
  function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return{
      x:evt.clientX  - rect.left,
      y:evt.clientY -  rect.top
    };
  }


function draw(canvas, posx, posy){
    if(md){



      context.beginPath();

      //define gradient
      var radgrad = context.createRadialGradient(posx, posy, 0, posx, posy,100);
      radgrad.addColorStop(0, 'rgba(218, 247, 166,.75)');
      radgrad.addColorStop(0.5, 'rgba(218, 247, 166,.25)');
      radgrad.addColorStop(1, 'rgba(218, 247, 166,0)');

      // draw circle
      context.fillStyle = radgrad;
      context.arc(posx, posy,160,0,2*Math.PI);
      context.fill();

          }
    }


function fadeOut() {
    context.fillStyle = "rgba(255,255,255,0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(fadeOut,250);
}

fadeOut();




var timer;
$(document).on('mousemove', function(e){
   clearTimeout(timer);

   timer = setTimeout(function() {
       context.clearRect(0, 0, canvas.width, canvas.height);
   }, 500);
});


  });
