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

       context.fillStyle = `rgba(218, 247, 166, 1)`;
      context.beginPath();
      context.arc(posx, posy,20,0,2*Math.PI);
       context.fillStyle = `rgba(218, 247, 166, 1)`;
      context.fill();

         // context.fillRect(posx, posy, 4, 4);
          }
    }

function fadeOut() {
    context.fillStyle = "rgba(255,255,255,0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(fadeOut,50);
}

fadeOut();


  });
