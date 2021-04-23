/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


$(document).ready(function(){


    // loading screen function
      window.addEventListener("load", ()=>{
        $(".loading-container").fadeOut("slow");
      })


  $(function(){
        $( ".instructions" ).draggable();
    });




    $('#black').click(function() {
    $('#black') .addClass('chosen');
    $('#black div') .removeClass('buttonShrink');
    $('#black div') .addClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#red div') .addClass('buttonShrink');
    $('#red div') .removeClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#blue div') .removeClass('buttonExpansion');
    $('#yellow div') .addClass('buttonShrink');
    $('#yellow div') .removeClass('buttonExpansion');
    $('.circle') .removeClass('erasing');
    });

    $('#red').click(function() {
    $('#red div') .removeClass('buttonShrink');
    $('#red div') .addClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#blue div') .removeClass('buttonExpansion');
    $('#yellow div') .addClass('buttonShrink');
    $('#yellow div') .removeClass('buttonExpansion');
    $('#black div') .addClass('buttonShrink');
    $('#black div') .removeClass('buttonExpansion');
    $('.circle') .removeClass('erasing');
    });



    $('#yellow').click(function() {
    $('#red div') .addClass('buttonShrink');
    $('#red div') .removeClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#blue div') .removeClass('buttonExpansion');
    $('#yellow div') .removeClass('buttonShrink');
    $('#yellow div') .addClass('buttonExpansion');
    $('#black div') .addClass('buttonShrink');
    $('#black div') .removeClass('buttonExpansion');
    $('.circle') .removeClass('erasing');
    });



    $('#blue').click(function() {
    $('#red div') .addClass('buttonShrink');
    $('#red div') .removeClass('buttonExpansion');
    $('#blue div') .removeClass('buttonShrink');
    $('#blue div') .addClass('buttonExpansion');
    $('#yellow div') .addClass('buttonShrink');
    $('#yellow div') .removeClass('buttonExpansion');
    $('#black div') .addClass('buttonShrink');
    $('#black div') .removeClass('buttonExpansion');
    $('.circle') .removeClass('erasing');
    });



    $('.circle').click(function() {
    $('#black') .removeClass('chosen');
    $('#black div') .removeClass('buttonExpansion');
    $('#black div') .addClass('buttonShrink');
    $('#red div') .addClass('buttonShrink');
    $('#red div') .removeClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#blue div') .removeClass('buttonExpansion');
    $('#yellow div') .addClass('buttonShrink');
    $('#yellow div') .removeClass('buttonExpansion');
    $('.circle') .addClass('erasing');
    });



    $('#clear').click(function() {
    $('#black') .addClass('chosen');
    $('#black div') .removeClass('buttonShrink');
    $('#black div') .addClass('buttonExpansion');
    $('#red div') .addClass('buttonShrink');
    $('#red div') .removeClass('buttonExpansion');
    $('#blue div') .addClass('buttonShrink');
    $('#blue div') .removeClass('buttonExpansion');
    $('#yellow div') .addClass('buttonShrink');
    $('#yellow div') .removeClass('buttonExpansion');
    $('.circle') .removeClass('erasing');
    });


//selectors for nav bar
    const blackBtn = document.querySelector('#black');
    const clearCanvasBtn = document.querySelector('#clear');
    const finish = document.querySelector('#finish');
    const copy = document.querySelector('#copy');
    const download = document.querySelector('#download');
    const erase = document.querySelector(".circle");
    const exit = document.querySelector('#exit');
    const pop = document.querySelector('#pop');

// variables
    let isItDrawing = false;
    let mouse ={x: 0, y: 0};
    let allPoints =[];
    let lineColor = 'black';
    let currentPoint = {color: lineColor, startX: 0, startY:0, mode: "begin", percentY: 0};
    let currentLine = [];
    let deleted = [];
    let cleared = [];
    let mouseCanvas = true;
    let mouseIs ="";
    let eraser = false;
    let firstLine = [];
    let repeated = [];
    let intentional = false;
    let deletes = [];
    let deleteRepeats = [];
    let subtractHeight = 74;
    let isClose=true;
    let instructionsHide = false;
    let justCleared = false;
    let startPosition ={x: 0, y: 0};
    let endPosition = {x: 0, y: 0};
    let hasDrawnOnce = false;
    let wasItCopied = false;

    let offsetLeft = 0;
    let offsetTop = 0;

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

//creates canvas
    const canvas = document.querySelector('canvas');
    let canvasLeft = canvas.offsetLeft;
    let canvasTop = canvas.offsetTop;
     canvas.width = innerWidth;
     canvas.height = innerHeight - subtractHeight;
        const c = canvas.getContext('2d');
        const body = document.querySelector('body');

//constantly running functions
      function whiteBackground(){
        c.lineWidth = 0.5
        c.fillStyle = 'white';
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.fill();
      }

      function setOffset(){
          offsetLeft= canvas.offsetLeft;
          offsetTop = canvas.offsetTop;
      }

      function calculatePercent(Y){
        return Y/canvas.height;
      }

      function redrawLines(){
        whiteBackground();
        for(let i = 0; i<allPoints.length; i++){
        allPoints[i].forEach((line, index) =>{
              if(eraser == true){
                c.lineWidth = 20;
              }
             else{
                 c.lineWidth = 8;
             }
              c.lineCap = 'round';
              if(line.mode == 'start'){
                c.beginPath();
                c.moveTo(allPoints[i][index].startX, allPoints[i][index].startY);
              c.strokeStyle = allPoints[i][index].color;
              }
              else if(line.mode == 'drawing'){
                c.lineTo(allPoints[i][index].startX, allPoints[i][index].startY);
                c.moveTo(allPoints[i][index].startX, allPoints[i][index].startY);
              c.strokeStyle = allPoints[i][index].color;
                 c.stroke();
              }
              else if(line.mode =='end'){
                c.closePath();
              c.strokeStyle = allPoints[i][index].color;
                c.stroke();
              }
              });
        }


      }

      function changeSize(){

          if(isClose!= true){

            canvas.width = innerWidth;
          }
        else{

          canvas.width= innerWidth;
        }
        // console.log(canvas.width);
        c.lineWidth = 0.5;
        c.fillStyle = 'white';
        c.fillRect(0, 0, innerWidth, innerHeight);
        c.fill();
        }
      let width = innerWidth;
      let height = innerHeight;

      function resize(){
      canvas.width = innerWidth;
      canvas.height = innerHeight - subtractHeight;

      }


      window.addEventListener('resize', () =>{
        //console.log(canvas.width);
        resize();
        changeSize();
        setOffset();
        c.beginPath();
        redrawLines();
      })





//creates the repeating lines at the end
function findLowestPoint(array){
  let y =  array.map(point =>{
    return point["startY"]
  })
  let max = y.reduce((acc, curr, index)=>{
    return Math.max(acc, curr);
  })
  return max
}


function howManyTimes(array){
   let aRR = [...array]
   let distanceLeft = canvas.height - (findLowestPoint(aRR));
   let howMany = Math.round(distanceLeft/21);
   return howMany;
}

function addSpace(line){
      let colors = ["red", "#ffec00", "#1F66CB"];
      let colorsIndex = 0;
      let repeatedForYou = [];
      let add = 20;
      let howMany = howManyTimes(line);
    for(let i = 0; i<howMany; i++){
      let array= line.map(items =>({
      color: colors[colorsIndex],
      startX: items["startX"],
      startY: items["startY"] + add,
      mode: items["mode"],
      percentY: (items["startY"] + add)/canvas.height
    }));
     repeatedForYou.push(...array)
      add += 20;
      if(colorsIndex ==2){
        colorsIndex = 0;
      }
      else{
        colorsIndex++
      }


    }
    repeated.push([...repeatedForYou]);
    return repeatedForYou
}

function repeatForYou(array){
    array.forEach((line, index) =>{
           c.lineWidth = 8;
          c.lineCap = 'round';
          if(line.mode == 'start'){
            c.beginPath();
            c.moveTo(array[index].startX , array[index].startY );
            // if(eraser == false){
               c.strokeStyle = array[index].color;
            // }
          }
          else if(line.mode == 'drawing'){
            c.lineTo(array[index].startX, array[index].startY );
            c.moveTo(array[index].startX, array[index].startY );
            // if(eraser == false){
               c.strokeStyle = array[index].color;
            // }
            c.stroke();
          }
          else if(line.mode =='end'){
            c.closePath();
            // if(eraser == false){
               c.strokeStyle = array[index].color;
            // }
            c.stroke();

          }
       //   c.beginPath();
      });
    // }
}






// wall drawing interaction




class Drafter{
    constructor(color){
        this.color = color;
        // this.globalCompositionOperation = globalComposition;
    }


    draw(){
        c.lineWidth = 8;
        c.lineCap = 'round';
        c.strokeStyle = this.color;
        c.lineTo(startPosition.x, startPosition.y);
        c.stroke();
        c.beginPath();
        c.moveTo(endPosition.x, endPosition.y);

    }
}


const drafter = new Drafter('black');

function checkMouseOnCanvas(){
    const xMouse = event.pageX - offsetLeft;
   const yMouse = event.pageY - offsetTop;
  if(yMouse<0 || yMouse> canvas.height || xMouse< 0 || xMouse > canvas.width){
    return false;
  }
  else{
    return true;
  }
}


function whereIsMouse(){
    const xMouse = event.pageX - offsetLeft;
   const yMouse = event.pageY - offsetTop;
  // console.log(checkMouseOnCanvas())
  if(checkMouseOnCanvas() == true) return;
  if (yMouse < 0 && xMouse >0){
    return 'top';
  }
  else if(xMouse>canvas.width && yMouse >0) {
    return 'right';
  }
  else if(yMouse> canvas.height && xMouse> 0){
    return'bottom';
  }
  else if(xMouse<0 && yMouse>0){
    return 'left';
  }

}

canvas.addEventListener('mousedown', (event) =>{
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
   // if(!start)return;
   // console.log(isItDrawing);

    startPosition = {x: xMouse, y: yMouse}
        isItDrawing = true;
        if(justCleared == true){
          justCleared = false;
        }
        if(eraser == true){
          c.globalCompositionOperation = "destination-out";
        }
        else{
          c.globalCompositionOperation = "source-over";
        }
        c.beginPath();
currentPoint = {color: lineColor, startX: startPosition.x, startY: startPosition.y, mode: "start", percentY: calculatePercent(yMouse)};
currentLine.push(currentPoint);
  // if(deleted.length > 0){
  //   superDeleted.push(deleted);
  //   deleted = [];
  // }
//allPoints.push(currentLine);


});

canvas.addEventListener('mousemove',(event) =>{
    const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    if(!isItDrawing)return;
 //   strokeLines(xMouse, yMouse);
    hasDrawnOnce = true;
    currentPoint = {color: lineColor, startX: xMouse, startY: yMouse, mode: "drawing", percentY: calculatePercent(yMouse)};
    currentLine.push(currentPoint);
    startPosition = {x: xMouse, y: yMouse};
    endPosition = {x: xMouse, y: yMouse};
    drafter.draw();
    intentional = false;


});

canvas.addEventListener('mouseup', () =>{
   const xMouse = event.pageX - offsetLeft;
    const yMouse = event.pageY - offsetTop;
    isItDrawing = false;
  if(checkMouseOnCanvas == false)return;
    currentPoint = {color:lineColor, startX: xMouse, startY: yMouse, mode: "end", percentY: calculatePercent(yMouse)};
    currentLine.push(currentPoint);
    allPoints.push(currentLine);
    firstLine= [].concat(...allPoints);
    currentLine =[];
  // }

  console.log({firstLine: firstLine, allPoints: allPoints});
  // if(eraser == true)return;
  // repeatForYou(addSpace(firstLine));
     // console.log(allPoints[1]);


});

window.addEventListener('mousedown', ()=>{
  if(checkMouseOnCanvas == true)return;
  intentional = true;
})


window.addEventListener('mouseup', ()=>{
 const xMouse = event.pageX - offsetLeft;
 const yMouse = event.pageY - offsetTop;
  if(intentional == true)return;
  console.log(intentional)
   if(whereIsMouse()== 'top'){
     currentPoint = {color:lineColor, startX: xMouse, startY: 0, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints.push(currentLine);
     firstLine = [].concat(...allPoints);
     currentLine = [];

   }
   else if(whereIsMouse()=='right'){
     currentPoint = {color:lineColor, startX: canvas.width , startY: yMouse, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints.push(currentLine);
     firstLine = [].concat(...allPoints);
     currentLine = [];
   }
    else if(whereIsMouse() == 'bottom'){
     currentPoint = {color:lineColor, startX: xMouse, startY: canvas.height, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints.push(currentLine);
     firstLine = [].concat(...allPoints);
     currentLine = [];
    }
    else if (whereIsMouse() == 'left'){
     currentPoint = {color:lineColor, startX: 0, startY: yMouse, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints.push(currentLine);
     firstLine = [].concat(...allPoints);
     currentLine = [];
    }
  isItDrawing = false;


})
//nav bar functions


let clearSaves = []
let concatClear = []

function clear(){
  c.clearRect(0, 0, canvas.width, canvas.height)
  whiteBackground();
  clearSaves = [...allPoints];
  allPoints = [];
  concatClear = [...firstLine]
  firstLine = []
  c.strokeStyle = 'black';
  drafter.color = 'black';
  lineColor = 'black';
  justCleared = true;
  // allPoints = [];
  deleted = [];
}
clearCanvasBtn.addEventListener('click', () =>{
  clear();
})

let wasItCopiedAndUndone = false;

$('#redo').click(function(){
  if(clearedAndUndone){
    clear();
    return;
  }
  if(wasItCopiedAndUndone == true){
    redrawLines();
    final();
    wasItCopied = true;
    return;
  }
  if(deleted[deleted.length-1] != allPoints.push[allPoints.length-1]){
    c.beginPath();
    allPoints.push(deleted[deleted.length-1]);
    deleted.pop();
    firstLine = [].concat(...allPoints);
    // repeated.push(deleteRepeats[deleteRepeats.length-1]);
    // deleteRepeats.pop();
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
  }
  else if(justCleared == true){
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
  }

});

let clearedAndUndone
$('#undo').click(function(){
  wasItCopiedAndUndone = false;
  clearedAndUndone = false;
  if(justCleared == true){
    whiteBackground();
    allPoints= [...clearSaves];
    firstLine = [].concat(...allPoints);
    redrawLines();
    if(wasItCopied == true){
      final();
    }
    justCleared = false;
    clearedAndUndone = true;
    return;
  }
  if(wasItCopied == true){
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
    wasItCopied = false;
    wasItCopiedAndUndone = true;
    return
  }
  if(allPoints.length >0  /* && justCleared ==false */){
    deleted.push(allPoints[allPoints.length-1]);
    allPoints.pop();
    firstLine = [].concat(...allPoints);
    console.log(firstLine)
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
  }
  // justCleared == false;


});

  function final(){
     repeatForYou(addSpace(firstLine));
  }



finish.addEventListener('click', () =>{
  if(hasDrawnOnce == true){
    redrawLines();
    final();
  }

  let final797 = canvas.toDataURL();
  localStorage.setItem('final797', final797);
  setTimeout(()=>{
  window.open(canvas.toDataURL("image/png"), '_blank');}, 6000)
})



copy.addEventListener('click', () =>{
if(hasDrawnOnce == true){
  redrawLines();
  final();
  wasItCopied = true;
}

})

download.addEventListener('click', () => {
  if(hasDrawnOnce == true){
    redrawLines();
    final();
  }

  let final797 = canvas.toDataURL();
  if(window.navigator.msSaveBlob){
    window.navigator.msSaveBlob(canvas.msToBlob(), "797-wall-drawing.png");
  }
  else{
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.href= final797;
    a.download = "797-wall-drawing.png";
    a.click();
    document.body.removeChild(a);
  }


})

});
