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


  const exit = document.querySelector("#exit");
  const pop = document.querySelector("#pop");
  let instructionsHide = false;
  let firstDo = true;
  let clickPop = false;




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

        // if(firstDo == true){
        //   generateLines()
        //   firstDo =false;
        // }
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
        // if(firstDo== true){
        //   generateLines();
        //   firstDo= false;
        // }
      }
    })
  })


  $(".blueScreen").click(function() {
    $(".instructions").addClass("shrink");
    $(".blueScreen").addClass("hidden");
    if (isClose == true) {
      $(".accordianControl").html(
        '<img src="https://cdn.glitch.com/1d86c6d4-73e9-4669-a810-d591baac83b7%2FdarkerChromeUpArrow.svg?v=1617661138123"><br>open'
      );
      isClose = false;
    } else {
      $(".accordianControl").html(
        'close<br><img src="https://cdn.glitch.com/1d86c6d4-73e9-4669-a810-d591baac83b7%2FdarkerChromeDownArrow.svg?v=1617660820337">'
      );
    }
    changeSize();
    setOffset();
    redrawLines();
    drawAllCircs();
    generateLines();
  });

    $(".tab").click(function() {
    $(".instructions").toggleClass("shrink");
    $(".blueScreen").toggleClass("hidden");
  });

  $(".close").click(function() {
    $(".exit").toggleClass("hidden");
  });

  $(".cancel").click(function() {
    $(".exit").toggleClass("hidden");
  });

  $(".howTo").mouseover(function() {
    $(".canvasDirections").removeClass("hidden");
  });

  $(".howTo").mouseout(function() {
    $(".canvasDirections").addClass("hidden");
  });


  pop.addEventListener("click", event => {
    clickPop = true;
  });

  exit.addEventListener("click", event => {
    if (clickPop == false) {
      $(".exit").toggleClass("hidden");
    } else {
      clickPop = false;
    }
  });



  //variables and query selectors

  const canvas = document.querySelector("#draw-layer");
  const backCanvas = document.querySelector("#background-layer");
  const c2 = backCanvas.getContext("2d");
  let canvasLeft = canvas.offsetLeft;
  let canvasTop = canvas.offsetTop;
  let subtractHeight = 74;
  const c = canvas.getContext("2d");
  const body = document.querySelector("body");
  const clearCanvasBtn = document.querySelector("#clear");
  const finish = document.querySelector("#finish");
  const download = document.querySelector("#download");


  let cw2 = backCanvas.width;
  let ch2 = backCanvas.height;
  let cw = canvas.width;
  let ch = canvas.height;
  let final289 = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let finalImage = canvas.toDataURL();
  canvas.width = innerWidth;
  canvas.height = innerHeight - subtractHeight;
  backCanvas.width = innerWidth;
  backCanvas.height = innerHeight -subtractHeight;


  //window resize functions and whatnot

   function setOffset() {
    offsetLeft = canvas.offsetLeft;
    offsetTop = canvas.offsetTop;
  }

  window.onload = function() {
  chooseLines();
  generateLines()
  console.log(canvas.width, canvas.height);

  }

    function changeSize() {
    makeBlack();
    drawAllCircs();
    generateLines();
    }
  // let width = innerWidth;
  // let height = innerHeight;

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight - subtractHeight;
    backCanvas.width = innerWidth;
    backCanvas.height = innerHeight - subtractHeight;
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


  //generates transparent screen for draw canvas and black screen for back canvas
    c.lineWidth = 0.5;
    c.fillStyle = "rgba(0, 0, 0, 0)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();
    function makeBlack(){
      c2.lineWidth = 0.5;
      c2.fillStyle = "rgba(0, 0, 0, 1)";
      c2.fillRect(0, 0, canvas.width, canvas.height);
      c2.fill();
    }

  // generates existing lines on start of drawing
  function randomGenerator() {
    return Math.floor(Math.random() * (1 - 0 + 1) + 0);
  }
  function randomCircle(){
    return Math.floor(Math.random() *(7- 0 + 1) + 0);
  }

  // all lines that could be generated at start of program
  let generatedLines = [];
  const zero = [
    {
      color: "white",
      endX: 85,
      endY: 611,
      percentX: 0.059574468085106386,
      percentY: 0.7627965,
      startX: backCanvas.width/2,
      startY: backCanvas.height/2
    },
    {
      color: "white",
      endX: 231,
      endY: 8,
      percentX: 0.16382978723404254,
      percentY: 0.00998752,
      startX: backCanvas.width/2,
      startY: backCanvas.height/2
    }
  ];
  const one = [
    {
      color: "white",
      endX: 231,
      endY: 303,
      percentX: 0.16382978723404254,
      percentY: 0.37827715,
      startX: 0,
      startY: backCanvas.height
    },
    {
      color: "white",
      endX: 312,
      endY: 480,
      percentX: 0.22127659574468084,
      percentY: 0.59925095,
      startX: 0,
      startY: backCanvas.height

    }
  ];
  const two = [
    {
      color: "white",
      endX: 475,
      endY: 661,
      percentX: 0.33687943262411346,
      percentY: 0.82521848,
      startX: 0,
      startY: backCanvas.height/2
    },
    {
      color: "white",
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
      color: "white",
      endX: 548,
      endY: 33,
      percentX: 0.38865248226950355,
      percentY: 0.0411985,
      startX: 0,
      startY: 0
    },
    {
      color: "white",
      endX: 153,
      endY: 500,
      percentX: 0.10780141843971631,
      percentY: 0.62421973,
      startX: 0,
      startY: 0
    }
  ];
  const four = [
    {
      color: "white",
      endX: 820,
      endY: 418,
      percentX: 0.5815602836879432,
      percentY: 0.52184769,
      startX: backCanvas.width/2,
      startY: 0
    },
    {
      color: "white",
      endX: 1256,
      endY: 382,
      percentX: 0.8907801418439716,
      percentY: 0.47690387,
      startX: backCanvas.width/2,
      startY: 0
    }
  ];
  const five = [
    {
      color: "white",
      endX: 946,
      endY: 506,
      percentX: 0.6709219858156028,
      percentY: 0.63171036,
      startX: backCanvas.width,
      startY: 0
    },
    {
      color: "white",
      endX: 923,
      endY: 70,
      percentX: 0.6546099290780142,
      percentY: 0.08739076,
      startX: backCanvas.width,
      startY: 0
    }
  ];
  const six = [
    {
      color: "white",
      endX: 1021,
      endY: 278,
      percentX: 0.724113475177305,
      percentY: 0.34706617,
      startX: backCanvas.width,
      startY: backCanvas.height/2
    },
    {
      color: "white",
      endX: 1175,
      endY: 495,
      percentX: 0.8333333333333334,
      percentY: 0.61797753,
      startX: backCanvas.width,
      startY: backCanvas.height/2
    }
  ];
  const seven = [
    {
      color: "white",
      endX: 1253,
      endY: 581,
      percentX: 0.8886524822695036,
      percentY: 0.72534332,
      startX: backCanvas.width,
      startY: backCanvas.height
    },
    {
      color: "white",
      endX: 857,
      endY: 647,
      percentX: 0.6078014184397164,
      percentY: 0.80774032,
      startX: backCanvas.width,
      startY: backCanvas.height
    }
  ];
  const eight = [
    {
      color: "white",
      endX: 242,
      endY: 474,
      percentX: 0.17163120567375886,
      percentY: 0.5917603,
      startX: backCanvas.width/2,
      startY: backCanvas.height
    },
    {
      color: "white",
      endX: 1095,
      endY: 404,
      percentX: 0.776595744680851,
      percentY: 0.50436954,
      startX: backCanvas.width/2,
      startY: backCanvas.height
    }
  ];
  const startArray = [zero, one, two, three, four, five, six, seven, eight];

  function chooseLines() {
    // for(let j = 0; j<2; j++){
    //     generatedLines.push(startArray[randomCircle()][0]);
    // }

    generatedLines = seven;


  }

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

  function generateForLater() {
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
      c.lineCap = "round";
      c.beginPath();
      c.lineWidth = 2;
      c.moveTo(generatedLines[i].startX, generatedLines[i].startY);
      c.lineTo(generatedLines[i].endX, generatedLines[i].endY);
      c.strokeStyle = generatedLines[i].color;
      c.stroke();
    }
  }




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
  let hasDrawnOnce = false;


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
      c2.strokeStyle = "black";
      c2.stroke();
    }
  }

  const circleZero = new Circles(
    canvas.height / 2,
    canvas.height / 2,
    "white"
  );
  const circleOne = new Circles(0, backCanvas.height, 2, "black");
  const circleTwo = new Circles(0, backCanvas.height / 2, 2, "black");
  const circleThree = new Circles(0, 0, 2, "white");
  const circleFour = new Circles(backCanvas.width / 2, 0, 2, "black");
  const circleFive = new Circles(backCanvas.width, 0, 2, "white");
  const circleSix = new Circles(backCanvas.width, canvas.height / 2, 2, "black");
  const circleSeven = new Circles(backCanvas.width, canvas.height, 2, "black");
  const circleEight = new Circles(backCanvas.width / 2, canvas.height, 2, "black");
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
      c.strokeStyle = "white";
      c.stroke();
    });
  }



  // wall drawing interaction

  // class Drafter{
  //     constructor(color){
  //         this.color = color;
  //         // this.globalCompositionOperation = globalComposition;
  //     }

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


  let mouseCirc = false;
  let clickIndex = 0;

//checks if mouse is on top of a circle
  function isMouseOnCircle() {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    allCirc.forEach((circle, index) => {
      if (
        yMouse > circle.y - 45 &&
        yMouse < circle.y + 45 &&
        xMouse > circle.x - 45 &&
        xMouse < circle.x + 45
      ) {
        mouseCirc = true;
        // console.log(mouseCirc)
        clickIndex = index;
        lineColor = "white";
      }
    });
  }

//checks which circle the mouse is  on top of and returns that circle
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


  //mouse click functions for drawing lines

  canvas.addEventListener("mousedown", event => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    isMouseOnCircle();
    if (!mouseCirc) return;
    startPosition = { x: allCirc[clickIndex].x, y: allCirc[clickIndex].y };
    isItDrawing = true;
    hasDrawnOnce = true;
    currentLine273 = {color: "white", startX: startPosition.x, startY: startPosition.y, endX: xMouse, endY: yMouse, percentX: xPercent, percentY: yPercent};

    //makes circles disappear when drawing a line
    $('.indicator').removeClass( 'pulse' );
    $('.indicator').addClass( 'hidden' );
  });

  canvas.addEventListener("mousemove", event => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    if (!isItDrawing) return;
    endPosition = { x: xMouse, y: yMouse };
    percentages();
    currentLine273 = {
      color: "white",
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

  function percentages() {
    xPercent = endPosition.x / canvas.width;
    yPercent = endPosition.y / canvas.height;
  }

  canvas.addEventListener("mouseup", () => {
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    isItDrawing = false;
    allPoints273.push(currentLine273);
    currentLine273 = [];
    console.log(allPoints273);
    // console.log(allPoints[1]);
//makes circles reappear after drawing a line
    $('.indicator').addClass( 'pulse' );
    $('.indicator').removeClass( 'hidden' );
  });

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
//clear canvas

  function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c2.clearRect(0, 0, backCanvas.width, backCanvas.height)
    allPoints273 = [];
    deleted273 = [];
    generatedLines = [];
  }

  clearCanvasBtn.addEventListener("click", () => {
    // cleared.push(allPoints);
    clearCanvas();
    // justCleared = true;
  });

//redo

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

// undo

  function undo() {
    deleted273.push(allPoints273[allPoints273.length - 1]);
    allPoints273.pop();
    c.clearRect(0, 0, canvas.width, canvas.height);
    redrawLines();
  }

  $("#undo").click(function() {
    undo();

  });

 // next page

  finish.addEventListener("click", () => {
    c.lineWidth = 0.5;
    c.fillStyle = "rgba(0, 0, 0, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();
    if(hasDrawnOnce == true){
      redrawLines();
      generateForLater();
      generatedLines =[];
    }

    final289 = canvas.toDataURL();
    // let backgroundLayer = backCanvas.toDataURL();
    localStorage.setItem("final289", final289);
    setTimeout(()=>{
  window.open(canvas.toDataURL("image/png"), '_blank');}, 4000)
    // localStorage.setItem("background", backgroundLayer);
    //window.open(canvas.toDataURL("image/png"), '_blank');
  });

  download.addEventListener("click", () => {
    c.lineWidth = 0.5;
    c.fillStyle = "rgba(0, 0, 0, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();
    redrawLines();
    generateForLater()
    generatedLines =[];
    final289 = canvas.toDataURL();
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "289-wall-drawing.png");
    } else {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.href = final289;
      a.download = "289-wall-drawing.png";
      a.click();
      document.body.removeChild(a);
    }
  });
});
