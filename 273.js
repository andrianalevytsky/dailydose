/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(document).ready(function() {


    // loading screen function
      window.addEventListener("load", ()=>{
        $(".loading-container").fadeOut("slow");
      })


  $(function(){
        $( ".instructions" ).draggable();
    });


let instructionsHide = false;
let firstDo = true;
const pop = document.querySelector("#pop");
const exit = document.querySelector("#exit")


// loading screen function
  window.addEventListener("load", ()=>{
    $(".loading-container").fadeOut("slow");
  })


//jquery functions for interaction



    $(function(){
      $(".minimize").click(()=>{
        // checkHidden()
        if(instructionsHide == true){
          $(".instructions").removeClass("hidden")
          instructionsHide = false;
        }
        else{
          $(".instructions").addClass("hidden")
          instructionsHide = true;
        $(".instructionsPopup").html('instructions +');
        $(".instructionsPopup").removeClass("active");
        $(".instructionsPopup").addClass("inactive");
        }
      })
      })


    $(function(){
      $(".instructionsPopup").click(()=>{
        // checkHidden()
        if(instructionsHide == true){
          $(".instructions").removeClass("hidden")
          console.log("has hidden")
          instructionsHide = false;
        $(".instructionsPopup").html('instructions -');
        $(".instructionsPopup").addClass("active");
        $(".instructionsPopup").removeClass("inactive");
        }
        else if(instructionsHide == false){
          $(".instructions").addClass("hidden")
          instructionsHide = true
        $(".instructionsPopup").html('instructions +');
        $(".instructionsPopup").removeClass("active");
        $(".instructionsPopup").addClass("inactive");
        }
      })
    })


   $('.close').click(function() {
      $('.exit').toggleClass( 'hidden' );
      });


   $('.cancel').click(function() {
      $('.exit').toggleClass( 'hidden' );
      });

   $('.howTo').mouseover(function() {
      $('.canvasDirections').removeClass( 'hidden' );
      });

   $('.howTo').mouseout(function() {
      $('.canvasDirections').addClass( 'hidden' );
      });

  let clickPop = false;

  pop.addEventListener('click', (event)=>{
    clickPop = true;
  });


  exit.addEventListener('click', (event) =>{
    if(clickPop == false){
      $('.exit').toggleClass( 'hidden' );

    }
    else{
      clickPop = false;
    }

  });

//query selectors and variables

  const canvas = document.querySelector("#draw-layer");
  const backCanvas = document.querySelector("#background-layer");
  const clearCanvasBtn = document.querySelector("#clear");
  const finish = document.querySelector("#finish");
  const download = document.querySelector("#download");
  const body = document.querySelector("body");
  const c2 = backCanvas.getContext("2d");
  let canvasLeft = canvas.offsetLeft;
  let canvasTop = canvas.offsetTop;
  let subtractHeight = 74;
  canvas.width = innerWidth;
  canvas.height = innerHeight - subtractHeight;
  backCanvas.width = innerWidth;
  backCanvas.height = innerHeight -subtractHeight;
  const c = canvas.getContext("2d");

  let cw2 = backCanvas.width;
  let ch2 = backCanvas.height;
  let finalImage = canvas.toDataURL();

//constantly running functions -- to do with window and sizing
c.lineWidth = 0.5;
c.fillStyle = "rgba(255, 255, 255, 0)";
c.fillRect(0, 0, canvas.width, canvas.height);
c.fill();

c2.lineWidth = 0.5;
c2.fillStyle = "rgba(255, 255, 255, 1)";
c2.fillRect(0, 0, backCanvas.width, backCanvas.height);
c2.fill();

function changeSize() {
  // console.log(canvas.width);
  c2.lineWidth = 0.5;
  c2.fillStyle = "rgba(255, 255, 255, 1)";
  c2.fillRect(0, 0, innerWidth, innerHeight);
  c2.fill();
  drawAllCircs();
  generateLines();
}
let width = innerWidth;
let height = innerHeight;

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight - subtractHeight;
  drawAllCircs();
  // redrawLines();
}

window.addEventListener("resize", () => {
  //console.log(canvas.width);
  resize();
  changeSize();
  setOffset();
  redrawLines();
  generateLines();
});




  // generates existing lines on start of drawing

  function randomCircle(){
    return Math.floor(Math.random() *(7- 0 + 1) + 0);
  }


  // all lines that could be generated at start of program
  let generatedLines =[]
const zero = [
    {
      color: "#ffec00",
      endX: 1090,
      endY: 688,
      percentX: 0.7730496453900709,
      percentY: 0.85892634,
      startX: backCanvas.width/2,
      startY: backCanvas.height/2
    },
    {
      color: "#ffec00",
      endX: 85,
      endY: 611,
      percentX: 0.059574468085106386,
      percentY: 0.7627965,
      startX: backCanvas.width/2,
      startY: backCanvas.height/2
    }
  ];
  const one = [
    {
      color: "blue",
      endX: 231,
      endY: 303,
      percentX: 0.16382978723404254,
      percentY: 0.37827715,
      startX: 0,
      startY: backCanvas.height
    },
    {
      color: "blue",
      endX: 902,
      endY: 534,
      percentX: 0.6390070921985815,
      percentY: 0.66666667,
      startX: 0,
      startY: backCanvas.height
    }
  ];
  const two = [
    {
      color: "red",
      endX: 475,
      endY: 661,
      percentX: 0.33687943262411346,
      percentY: 0.82521848,
      startX: 0,
      startY: backCanvas.height/2
    },
    {
      color: "red",
      endX: 790,
      endY: 561,
      percentX: 0.5595744680851064,
      percentY: 0.70037453,
      startX: 0,
      startY: backCanvas.height/2
    }
  ];
  const three = [
    {
      color: "blue",
      endX: 712,
      endY: 197,
      percentX: 0.5049645390070922,
      percentY: 0.24594257,
      startX: 0,
      startY: 0
    },
    {
      color: "blue",
      endX: 548,
      endY: 33,
      percentX: 0.38865248226950355,
      percentY: 0.0411985,
      startX: 0,
      startY: 0
    }
  ];
  const four = [
    {
      color: "red",
      endX: 373,
      endY: 455,
      percentX: 0.2645390070921986,
      percentY: 0.56803995,
      startX: canvas.width/2,
      startY: 0
    },
    {
      color: "red",
      endX: 820,
      endY: 418,
      percentX: 0.5815602836879432,
      percentY: 0.52184769,
      startX: backCanvas.width/2,
      startY: 0
    }
  ];
  const five = [
    {
      color: "blue",
      endX: 917,
      endY: 196,
      percentX: 0.650354609929078,
      percentY: 0.24469413,
      startX: backCanvas.width,
      startY: 0
    },
    {
      color: "blue",
      endX: 946,
      endY: 506,
      percentX: 0.6709219858156028,
      percentY: 0.63171036,
      startX: backCanvas.width,
      startY: 0
    }
  ];
  const six = [
    {
      color: "red",
      endX: 1021,
      endY: 278,
      percentX: 0.724113475177305,
      percentY: 0.34706617,
      startX: backCanvas.width,
      startY: backCanvas.height/2
    },
    {
      color: "red",
      endX: 601,
      endY: 281,
      percentX: 0.4269503546099291,
      percentY: 0.35081149,
      startX: backCanvas.width,
      startY: backCanvas.height/2
    }
  ];
  const seven = [
    {
      color: "blue",
      endX: 1253,
      endY: 581,
      percentX: 0.8886524822695036,
      percentY: 0.72534332,
      startX: backCanvas.width,
      startY: backCanvas.height
    },
    {
      color: "blue",
      endX: 1324,
      endY: 404,
      percentX: 0.9390070921985816,
      percentY: 0.50436954,
      startX: backCanvas.width,
      startY: backCanvas.height
    }
  ];
  const eight = [
    {
      color: "red",
      endX: 242,
      endY: 474,
      percentX: 0.17163120567375886,
      percentY: 0.5917603,
      startX: backCanvas.width/2,
      startY: backCanvas.height
    },
    {
      color: "red",
      endX: 1095,
      endY: 404,
      percentX: 0.776595744680851,
      percentY: 0.50436954,
      startX: backCanvas.width/2,
      startY: backCanvas.height
    }
  ];
  const startArray = [zero, one, two, three, four, five, six, seven, eight];

  window.onload = function() {
    chooseLines();
    generateLines()
    console.log(canvas.width, canvas.height);

  }

// choosing random lines that can be generated from code above
  function chooseLines() {
    for(let j = 5; j<7; j++){
        generatedLines.push(startArray[j][0]);
    }


  }
  // generating lines
  function generateLines() {
    for(let i = 0; i<2; i++){
      zero[i].startX = backCanvas.width/2;
      zero[i].startY = backCanvas.height/2;
      one[i].startY = backCanvas.height;
      two[i].startY = backCanvas.height/2;
      four[i].startX = backCanvas.width/2;
      five[i].startX = backCanvas.width;
      six[i].startX = backCanvas.width;
      six[i].startY = backCanvas.height/2;
      seven[i].startX = backCanvas.width;
      seven[i].startY = backCanvas.height;
      eight[i].startX = backCanvas.width/2;
      eight[i].startY = backCanvas.height;
    }
    // console.log(canvas.width, canvas.height) 1410, 801

    for(let i = 0; i<generatedLines.length; i++){
      generatedLines[i].endX = generatedLines[i].percentX* backCanvas.width;
      generatedLines[i].endY = generatedLines[i].percentY *backCanvas.height;
      c2.lineCap = "round";
      c2.beginPath();
      c2.lineWidth = 2;
      c2.moveTo(generatedLines[i].startX, generatedLines[i].startY);
      c2.lineTo(generatedLines[i].endX, generatedLines[i].endY);
      c2.strokeStyle = generatedLines[i].color;
      c2.stroke();
    }

  }

//generating lines for later
   function generateForLater() {
    for(let i = 0; i<2; i++){
      zero[i].startX = canvas.width/2;
      zero[i].startY = canvas.height/2;
      one[i].startY = canvas.height;
      two[i].startY = canvas.height/2;
      four[i].startX = canvas.width/2;
      five[i].startX = canvas.width;
      six[i].startX = canvas.width;
      six[i].startY = canvas.height/2;
      seven[i].startX = canvas.width;
      seven[i].startY = canvas.height;
      eight[i].startX = canvas.width/2;
      eight[i].startY = canvas.height;
    }
      for(let i = 0; i<generatedLines.length; i++){
      generatedLines[i].endX = generatedLines[i].percentX* canvas.width;
      generatedLines[i].endY = generatedLines[i].percentY * canvas.height;
      c.lineCap = "round";
      c.beginPath();
      c.lineWidth = 2;
      c.moveTo(generatedLines[i].startX, generatedLines[i].startY);
      c.lineTo(generatedLines[i].endX, generatedLines[i].endY);
      c.strokeStyle = generatedLines[i].color;
      c.stroke();
    }
  }


//variables for canvas drawings


  let isItDrawing = false;
  //let start = false;
  let startPosition = { x: 0, y: 0 };
  let endPosition = { x: 0, y: 0 };
  let allPoints273 = [];
  let lineColor = "white";
  let currentLine273 = {
    color: lineColor,
    startX: 0,
    startY: 0,
    mode: "begin",
    endPosition,
    percentX: 1,
    percentY: 1,
    circle: 0
  };
  let deleted273 = [];
  let superDeleted = [];
  let cleared = [];
  let mouseCanvas = true;
  let mouseIs = "";
  let eraser = false;
  let xPercent = 1;
  let yPercent = 1;
  let isClose = true;
  let offsetLeft = 0;
  let offsetTop = 0;
  let mouseCirc = false;
  let clickIndex = 0;
  let hasDrawnOnce = false;
  let hasCleared = false;


  class Circles {
    constructor(x, y, colorHover) {
      this.x = x;
      this.y = y;
      this.colorHover = colorHover;
    }

    draw() {
      c2.beginPath();
      c2.arc(this.x, this.y, 35, 0, Math.PI * 2);
      c2.lineWidth = 0.01;
      c2.strokeStyle = "white";
      c2.stroke();
    }
  }

  const circleZero = new Circles(
    canvas.height / 2,
    canvas.height / 2,
    "#ffec00"
  );
  const circleOne = new Circles(0, canvas.height, 2, "blue");
  const circleTwo = new Circles(0, canvas.height / 2, 2, "red");
  const circleThree = new Circles(0, 0, 2, "blue");
  const circleFour = new Circles(canvas.width / 2, 0, 2, "red");
  const circleFive = new Circles(canvas.width, 0, 2, "blue");
  const circleSix = new Circles(canvas.width, canvas.height / 2, 2, "red");
  const circleSeven = new Circles(canvas.width, canvas.height, 2, "blue");
  const circleEight = new Circles(canvas.width / 2, canvas.height, 2, "red");
  const allCirc = [
    circleZero,
    circleOne,
    circleTwo,
    circleThree,
    circleFour,
    circleFive,
    circleSix,
    circleSeven,
    circleEight
  ];
  const hoverArr = [
    "#ffec00",
    "blue",
    "red",
    "blue",
    "red",
    "blue",
    "red",
    "blue",
    "red"
  ];




  function drawAllCircs() {
    circleZero.x = backCanvas.width / 2;
    circleZero.y = backCanvas.height / 2;
    circleOne.x = 0;
    circleOne.y = backCanvas.height;
    circleTwo.x = 0;
    circleTwo.y = backCanvas.height / 2;
    circleThree.x = 0;
    circleThree.y = 0;
    circleFour.x = backCanvas.width / 2;
    circleFour.y = 0;
    circleFive.x = backCanvas.width;
    circleFive.y = 0;
    circleSix.x = backCanvas.width;
    circleSix.y = backCanvas.height / 2;
    circleSeven.x = backCanvas.width;
    circleSeven.y = backCanvas.height;
    circleEight.x = backCanvas.width / 2;
    circleEight.y = backCanvas.height;

    allCirc.forEach(circ => {
      circ.draw();
    });
  }
  drawAllCircs();

  function setOffset() {
    offsetLeft = canvas.offsetLeft;
    offsetTop = canvas.offsetTop;
  }

  function redrawLines() {
    allPoints273.forEach(line => {
      if(line.circle == 0){
        line.startX = canvas.width/2;
        line.startY = canvas.height/2;
      }
      else if(line.circle == 1){
        line.startY = canvas.height;
      }
      else if(line.circle ==2){
        line.startY = canvas.height/2;
      }
      else if(line.circle == 4){
        line.startX = canvas.width/2
      }
      else if(line.circle == 5){
        line.startX = canvas.width;
      }
      else if(line.circle == 6){
        line.startX = canvas.width;
        line.startY = canvas.height/2;
      }
      else if(line.circle == 7){
        line.startX = canvas.width;
        line.startY = canvas.height;
      }
      else if(line.circle == 8){
        line.startX = canvas.width/2;
        line.startY = canvas.height;
      }
      line.endX = line.percentX *canvas.width;
      line.endY = line.percentY* canvas.height;

      c.lineCap = "round";
      c.beginPath();
      c.lineWidth = 2;
      c.moveTo(line.startX, line.startY);
      c.lineTo(line.endX, line.endY);
      c.strokeStyle = line.color;
      c.stroke();
    });
  }





  // wall drawing interaction


  function draw() {
    c.lineCap = "round";
    c.beginPath();
    c.lineWidth = 2;
    c.moveTo(startPosition.x, startPosition.y);
    c.lineTo(endPosition.x, endPosition.y);
    //allCirc.forEach(circle => {
    c.strokeStyle = lineColor;
    c.stroke();
  }
  // }

  // const drafter = new Drafter('black');

  function checkMouseOnCanvas() {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    if (
      yMouse < 0 ||
      yMouse > canvas.height ||
      xMouse < 0 ||
      xMouse > canvas.width
    ) {
      return false;
    } else {
      return true;
    }
  }

  //checks if mouse has left the canvas and returns where in relation to the canvas it is
  function whereIsMouse() {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    if (yMouse < 0 && xMouse > 0) {
      mouseIs = "top";
    } else if (xMouse > canvas.width && yMouse > 0) {
      mouseIs = "right";
    } else if (yMouse > canvas.height && xMouse > 0) {
      mouseIs = "bottom";
    } else if (xMouse < 0 && yMouse > 0) {
      mouseIs = "left";
    }
  }

//checks if mouse is on a circle
  function isMouseOnCircle(xMouse, yMouse) {
    // const xMouse = event.pageX - offsetLeft;
    // const yMouse = event.pageY - offsetTop;
    allCirc.forEach((circle, index) => {
      if (
        yMouse > circle.y - 25 &&
        yMouse < circle.y + 25 &&
        xMouse > circle.x - 25 &&
        xMouse < circle.x + 25
      ) {
        mouseCirc = true;
        // console.log(mouseCirc)
        clickIndex = index;
        lineColor = hoverArr[index];
        return;
      }
      else{
        mouseCirc ==  false
      }
    });
  }

//checks which circle the mouse is  on top of
  function whichToHover(xMouse, yMouse) {
      if (
        yMouse > circleZero.y - 25 &&
        yMouse < circleZero.y + 25 &&
        xMouse > circleZero.x - 25 &&
        xMouse < circleZero.x + 25
      ) {
        return circleZero;
      }
      else if (  yMouse > circleOne.y - 25 &&
        yMouse < circleOne.y + 25 &&
        xMouse > circleOne.x - 25 &&
        xMouse < circleOne.x + 25) {
        return circleOne;
      }
      else if (  yMouse > circleTwo.y - 25 &&
        yMouse < circleTwo.y + 25 &&
        xMouse > circleTwo.x - 25 &&
        xMouse < circleTwo.x + 25) {
        return circleTwo;
      }
      else if (  yMouse > circleThree.y - 25 &&
        yMouse < circleThree.y + 25 &&
        xMouse > circleThree.x - 25 &&
        xMouse < circleThree.x + 25) {
        return circleThree;
      }
      else if (  yMouse > circleFour.y - 25 &&
        yMouse < circleFour.y + 25 &&
        xMouse > circleFour.x - 25 &&
        xMouse < circleFour.x + 25) {
        return circleFour;
      }
      else if (  yMouse > circleFive.y - 25 &&
        yMouse < circleFive.y + 25 &&
        xMouse > circleFive.x - 25 &&
        xMouse < circleFive.x + 25) {
        return circleFive;
      }
      else if (  yMouse > circleSix.y - 25 &&
        yMouse < circleSix.y + 25 &&
        xMouse > circleSix.x - 25 &&
        xMouse < circleSix.x + 25) {
        return circleSix;
      }
      else if (  yMouse > circleSeven.y - 25 &&
        yMouse < circleSeven.y + 25 &&
        xMouse > circleSeven.x - 25 &&
        xMouse < circleSeven.x + 25) {
        return circleSeven
      }
      else if (  yMouse > circleEight.y - 25 &&
        yMouse < circleEight.y + 25 &&
        xMouse > circleEight.x - 25 &&
        xMouse < circleEight.x + 25) {
        return circleEight;
      }
  }

  function percentages() {
    xPercent = endPosition.x / canvas.width;
    yPercent = endPosition.y / canvas.height;
  }



//click mouse functions

  canvas.addEventListener("mousedown", event => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    isMouseOnCircle(xMouse, yMouse);
    if (!mouseCirc) return;
    startPosition = { x: allCirc[clickIndex].x, y: allCirc[clickIndex].y };
    isItDrawing = true;
    currentLine273 = {color: lineColor, startX: startPosition.x, startY: startPosition.y, endX: xMouse, endY: yMouse, percentX: xPercent, percentY: yPercent};
    hasDrawnOnce = true;
    // if(deleted.length > 0){
    // superDeleted.push(deleted);
    // deleted = [];
    // }
  //makes circles disappear when drawing a line
    $('.indicator').removeClass( 'pulse' );
    $('.indicator').addClass( 'hidden' );
  });

  canvas.addEventListener("mousemove", event => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    if (!isItDrawing) return;
    //   strokeLines(xMouse, yMouse);
    endPosition = { x: xMouse, y: yMouse };
    percentages();
    currentLine273 = {
      color: lineColor,
      startX: startPosition.x,
      startY: startPosition.y,
      endX: endPosition.x,
      endY: endPosition.y,
      percentX: xPercent,
      percentY: yPercent,
      circle: clickIndex
    };
    c.clearRect(0, 0, canvas.width, canvas.height);
    redrawLines();
    generateLines();
    draw();
  });



  canvas.addEventListener("mouseup", () => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    isItDrawing = false;
    allPoints273.push(currentLine273);
    currentLine273 = [];
    console.log(allPoints273);

  //makes circles reappear when drawing a line
    $('.indicator').addClass( 'pulse' );
    $('.indicator').removeClass( 'hidden' );
  });



  //makes sure that lines won't draw off canvas

  window.addEventListener("mouseup", () => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    // checkMouseOnCanvas();
    if (checkMouseOnCanvas() != true) return;
    whereIsMouse();
    if (mouseIs == "top") {
      currentLine273 = {
        color: lineColor,
        startX: startPosition.x,
        startY: startPosition.y,
        endX: xMouse,
        endY: 0
      };
      allPoints273.push(currentLine273);
      currentLine273 = [];
    } else if (mouseIs == "right") {
      currentLine273 = {
        color: lineColor,
        startX: startPosition.x,
        startY: startPosition.y,
        endX: canvas.width,
        endY: yMouse
      };
      // currentLine.push(currentPoint);
      allPoints273.push(currentLine273);
      currentLine273 = [];
    } else if (mouseIs == "bottom") {
      currentLine273 = {
        color: lineColor,
        startX: startPosition.x,
        startY: startPosition.y,
        endX: xMouse,
        endY: canvas.height
      };
      //   currentLine.push(currentPoint);
      allPoints273.push(currentLine273);
      currentLine273 = [];
    } else if (mouseIs == "left") {
      currentLine273 = {
        color: lineColor,
        startX: startPosition.x,
        startY: startPosition.y,
        endX: 0,
        endY: yMouse
      };
      //   currentLine.push(currentPoint);
      allPoints273.push(currentLine273);
      currentLine273 = [];
    }
    isItDrawing = false;
  });

//constantly checks if mouse is moving and applies hover functions to it
  window.addEventListener("mousemove", ()=>{
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    mouseCirc = false;
    if(isItDrawing==true)return;
    isMouseOnCircle(xMouse, yMouse)
    if (mouseCirc == true) {
      // $('.indicator').removeClass( 'pulse' );
      // $('.indicator').addClass( 'scaleUp' );
      if(whichToHover(xMouse, yMouse) == circleZero){
        $("#center").removeClass('pulse');
        $("#center").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleOne){
        $("#bottomLeftCorner").removeClass('pulse');
        $("#bottomLeftCorner").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleTwo){
        $("#leftMidPt").removeClass('pulse');
        $("#leftMidPt").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleThree){
        $("#leftCorner").removeClass('pulse');
        $("#leftCorner").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleFour){
        $("#topMidPt").removeClass('pulse');
        $("#topMidPt").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleFive){
        $("#rightCorner").removeClass('pulse');
        $("#rightCorner").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleSix){
        $("#rightMidPt").removeClass('pulse');
        $("#rightMidPt").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleSeven){
        $("#bottomRightCorner").removeClass('pulse');
        $("#bottomRightCorner").addClass('scaleUp');
      }
      else if(whichToHover(xMouse, yMouse) == circleEight){
        $("#bottomMidPt").removeClass('pulse');
        $("#bottomMidPt").addClass('scaleUp');
      }

    }
    else if(mouseCirc == false){
      $('.indicator').addClass( 'pulse' );
      $('.indicator').removeClass( 'scaleUp' );
    }
  })
  //nav bar functions

    function clearCanvas() {
      c2.clearRect(0, 0, backCanvas.width, backCanvas.height)
      c.clearRect(0, 0, canvas.width, canvas.height);
      allPoints273 = [];
      deleted273 = [];
      generatedLines = [];
    }

  clearCanvasBtn.addEventListener("click", () => {
    // cleared.push(allPoints);
    clearCanvas();
    // justCleared = true;
  });

  $("#redo").click(function() {
    if (
      deleted273[deleted273.length - 1] !=
      allPoints273.push[allPoints273.length - 1]
    ) {
      c.beginPath();
      allPoints273.push(deleted273[deleted273.length - 1]);
      deleted273.pop();
      c.clearRect(0, 0, canvas.width, canvas.height);
      redrawLines();
    }
  });

  function undo() {
    deleted273.push(allPoints273[allPoints273.length - 1]);
    allPoints273.pop();
    c.clearRect(0, 0, canvas.width, canvas.height);
    redrawLines();
  }

  $("#undo").click(function() {
    undo();

  });



  finish.addEventListener("click", () => {
    c.lineWidth = 0.5;
    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();
    if(hasDrawnOnce == true){
      redrawLines();
      generateForLater();
      generatedLines =[];
    }

    let final273 = canvas.toDataURL();
    // let backgroundLayer = backCanvas.toDataURL();
    localStorage.setItem("final273", final273);
    setTimeout(()=>{
  window.open(canvas.toDataURL("image/png"), '_blank');}, 4000)
    // localStorage.setItem("background", backgroundLayer);
    //window.open(canvas.toDataURL("image/png"), '_blank');
  });

  download.addEventListener("click", () => {
    c.lineWidth = 0.5;
    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();
    if(hasDrawnOnce == true){
      redrawLines();
      generateForLater();
      generatedLines =[];
    }
    let final273 = canvas.toDataURL();
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "273-wall-drawing.png");
    } else {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.href = final273;
      a.download = "273-wall-drawing.png";
      a.click();
      document.body.removeChild(a);
    }

  });

});
