/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(document).ready(function(){

  // loading screen function  and image retrieval

  window.addEventListener('load', () =>{
  $(".loading-container").fadeOut("slow");
  let endImage46 = localStorage.getItem('final46');
    //  let img = new Image();
   const image = document.querySelector("#yours46");
  image.src = endImage46;

    //download
      $("#download").click(function(){

      let a = document.createElement("a");
      document.body.appendChild(a);
      a.href = endImage46;
      a.download = "46-wall-drawing.png";
      a.click();
      document.body.removeChild(a);



    })

let md = true;
  let canvas = document.getElementById('canvas');
  let body = document.getElementById('body');
  let context = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  let currentCircle = {x: 0, y: 0};
  let allCircles = [];


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



//clear canvas after mouse inactivity
  var timer;
  $(document).on('mousemove', function(e){
     clearTimeout(timer);

     timer = setTimeout(function() {
         context.clearRect(0, 0, canvas.width, canvas.height);
     }, 500);
  });


});
});
