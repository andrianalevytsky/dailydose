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
    const download = document.querySelector('#download');
    const erase = document.querySelector(".circle");
    const exit = document.querySelector('#exit');
    const pop = document.querySelector('#pop');

// variables
    let isItDrawing = false;
    let mouse ={x: 0, y: 0};
    let allPoints46 =[];
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
    let startPosition ={x: 0, y: 0};
    let endPosition = {x: 0, y: 0};
    let hasDrawnOnce = false;
    let justCleared46 = false;

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
        window.onload = function() {
            preDraw();
        }

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
        for(let i = 0; i<allPoints46.length; i++){
        allPoints46[i].forEach((line, index) =>{
                 c.lineWidth = 8;
              c.lineCap = 'round';
              if(line.mode == 'start'){
                c.beginPath();
                c.moveTo(allPoints46[i][index].startX, allPoints46[i][index].startY);
              c.strokeStyle = allPoints46[i][index].color;
              }
              else if(line.mode == 'drawing'){
                c.lineTo(allPoints46[i][index].startX, allPoints46[i][index].startY);
                c.moveTo(allPoints46[i][index].startX, allPoints46[i][index].startY);
              c.strokeStyle = allPoints46[i][index].color;
                 c.stroke();
              }
              else if(line.mode =='end'){
                c.closePath();
              c.strokeStyle = allPoints46[i][index].color;
                c.stroke();
              }
              });
        }

        preDraw();


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

//pre-generated lines

 let preGenerate = [ {color: "black", startX: 1078, startY: 256, mode: "start", percentY: 0.2939150401836969},
{color: "black", startX: 1078, startY: 257, mode: "drawing", percentY: 0.29506314580941445},
{color: "black", startX: 1078, startY: 258, mode: "drawing", percentY: 0.29621125143513205},
 {color: "black", startX: 1078, startY: 259, mode: "drawing", percentY: 0.2973593570608496},
{color: "black", startX: 1078, startY: 260, mode: "drawing", percentY: 0.29850746268656714},
{color: "black", startX: 1078, startY: 261, mode: "drawing", percentY: 0.29965556831228474},
{color: "black", startX: 1078, startY: 262, mode: "drawing", percentY: 0.3008036739380023},
{color: "black", startX: 1078, startY: 264, mode: "drawing", percentY: 0.3030998851894374},
{color: "black", startX: 1078, startY: 265, mode: "drawing", percentY: 0.30424799081515497},
 {color: "black", startX: 1078, startY: 266, mode: "drawing", percentY: 0.30539609644087257},
 {color: "black", startX: 1078, startY: 267, mode: "drawing", percentY: 0.3065442020665901},
 {color: "black", startX: 1078, startY: 268, mode: "drawing", percentY: 0.3076923076923077},
 {color: "black", startX: 1078, startY: 270, mode: "drawing", percentY: 0.3099885189437428},
 {color: "black", startX: 1078, startY: 272, mode: "drawing", percentY: 0.31228473019517794},
 {color: "black", startX: 1077, startY: 273, mode: "drawing", percentY: 0.31343283582089554},
 {color: "black", startX: 1077, startY: 275, mode: "drawing", percentY: 0.3157290470723307},
 {color: "black", startX: 1077, startY: 277, mode: "drawing", percentY: 0.31802525832376577},
{color: "black", startX: 1076, startY: 279, mode: "drawing", percentY: 0.3203214695752009},
 {color: "black", startX: 1076, startY: 280, mode: "drawing", percentY: 0.3214695752009185},
 {color: "black", startX: 1076, startY: 282, mode: "drawing", percentY: 0.3237657864523536},
 {color: "black", startX: 1075, startY: 284, mode: "drawing", percentY: 0.32606199770378874},
 {color: "black", startX: 1074, startY: 286, mode: "drawing", percentY: 0.3283582089552239},
 {color: "black", startX: 1074, startY: 287, mode: "drawing", percentY: 0.32950631458094143},
 {color: "black", startX: 1073, startY: 288, mode: "drawing", percentY: 0.330654420206659},
 {color: "black", startX: 1073, startY: 289, mode: "drawing", percentY: 0.33180252583237657},
 {color: "black", startX: 1072, startY: 290, mode: "drawing", percentY: 0.33295063145809417},
 {color: "black", startX: 1072, startY: 290, mode: "drawing", percentY: 0.33295063145809417},
 {color: "black", startX: 1072, startY: 291, mode: "drawing", percentY: 0.3340987370838117},
 {color: "black", startX: 1071, startY: 292, mode: "drawing", percentY: 0.33524684270952926},
 {color: "black", startX: 1070, startY: 293, mode: "drawing", percentY: 0.33639494833524686},
 {color: "black", startX: 1070, startY: 294, mode: "drawing", percentY: 0.3375430539609644},
 {color: "black", startX: 1069, startY: 295, mode: "drawing", percentY: 0.338691159586682},
 {color: "black", startX: 1068, startY: 296, mode: "drawing", percentY: 0.33983926521239954},
 {color: "black", startX: 1068, startY: 297, mode: "drawing", percentY: 0.3409873708381171},
 {color: "black", startX: 1067, startY: 298, mode: "drawing", percentY: 0.3421354764638347},
 {color: "black", startX: 1067, startY: 299, mode: "drawing", percentY: 0.34328358208955223},
 {color: "black", startX: 1066, startY: 300, mode: "drawing", percentY: 0.34443168771526983},
 {color: "black", startX: 1066, startY: 301, mode: "drawing", percentY: 0.3455797933409874},
 {color: "black", startX: 1065, startY: 302, mode: "drawing", percentY: 0.3467278989667049},
 {color: "black", startX: 1065, startY: 303, mode: "drawing", percentY: 0.3478760045924225},
 {color: "black", startX: 1064, startY: 304, mode: "drawing", percentY: 0.34902411021814006},
 {color: "black", startX: 1064, startY: 305, mode: "drawing", percentY: 0.35017221584385766},
 {color: "black", startX: 1063, startY: 306, mode: "drawing", percentY: 0.3513203214695752},
 {color: "black", startX: 1063, startY: 306, mode: "drawing", percentY: 0.3513203214695752},
 {color: "black", startX: 1062, startY: 307, mode: "drawing", percentY: 0.35246842709529275},
 {color: "black", startX: 1062, startY: 308, mode: "drawing", percentY: 0.35361653272101035},
 {color: "black", startX: 1062, startY: 308, mode: "drawing", percentY: 0.35361653272101035},
 {color: "black", startX: 1061, startY: 309, mode: "drawing", percentY: 0.3547646383467279},
 {color: "black", startX: 1061, startY: 310, mode: "drawing", percentY: 0.3559127439724455},
 {color: "black", startX: 1060, startY: 311, mode: "drawing", percentY: 0.35706084959816303},
 {color: "black", startX: 1060, startY: 312, mode: "drawing", percentY: 0.3582089552238806},
 {color: "black", startX: 1059, startY: 313, mode: "drawing", percentY: 0.3593570608495982},
 {color: "black", startX: 1059, startY: 314, mode: "drawing", percentY: 0.3605051664753157},
 {color: "black", startX: 1058, startY: 315, mode: "drawing", percentY: 0.3616532721010333},
 {color: "black", startX: 1058, startY: 316, mode: "drawing", percentY: 0.36280137772675086},
 {color: "black", startX: 1057, startY: 317, mode: "drawing", percentY: 0.3639494833524684},
 {color: "black", startX: 1057, startY: 318, mode: "drawing", percentY: 0.365097588978186},
 {color: "black", startX: 1056, startY: 319, mode: "drawing", percentY: 0.36624569460390355},
 {color: "black", startX: 1056, startY: 320, mode: "drawing", percentY: 0.36739380022962115},
 {color: "black", startX: 1056, startY: 321, mode: "drawing", percentY: 0.3685419058553387},
{color: "black", startX: 1055, startY: 321, mode: "drawing", percentY: 0.3685419058553387},
{color: "black", startX: 1055, startY: 322, mode: "drawing", percentY: 0.36969001148105624},
 {color: "black", startX: 1055, startY: 323, mode: "drawing", percentY: 0.37083811710677383},
 {color: "black", startX: 1055, startY: 324, mode: "drawing", percentY: 0.3719862227324914},
 {color: "black", startX: 1056, startY: 326, mode: "drawing", percentY: 0.3742824339839265},
{color: "black", startX: 1057, startY: 327, mode: "drawing", percentY: 0.37543053960964407},
{color: "black", startX: 1057, startY: 328, mode: "drawing", percentY: 0.37657864523536166},
 {color: "black", startX: 1059, startY: 329, mode: "drawing", percentY: 0.3777267508610792},
{color: "black", startX: 1060, startY: 331, mode: "drawing", percentY: 0.38002296211251435},
 {color: "black", startX: 1061, startY: 333, mode: "drawing", percentY: 0.3823191733639495},
{color: "black", startX: 1062, startY: 334, mode: "drawing", percentY: 0.38346727898966704},
 {color: "black", startX: 1063, startY: 335, mode: "drawing", percentY: 0.38461538461538464},
 {color: "black", startX: 1063, startY: 337, mode: "drawing", percentY: 0.3869115958668197},
 {color: "black", startX: 1064, startY: 337, mode: "drawing", percentY: 0.3869115958668197},
{color: "black", startX: 1064, startY: 338, mode: "drawing", percentY: 0.3880597014925373},
 {color: "black", startX: 1064, startY: 339, mode: "drawing", percentY: 0.38920780711825487},
 {color: "black", startX: 1065, startY: 340, mode: "drawing", percentY: 0.39035591274397247},
 {color: "black", startX: 1065, startY: 341, mode: "drawing", percentY: 0.39150401836969},
 {color: "black", startX: 1066, startY: 341, mode: "drawing", percentY: 0.39150401836969},
 {color: "black", startX: 1066, startY: 342, mode: "drawing", percentY: 0.39265212399540755},
{color: "black", startX: 1066, startY: 344, mode: "drawing", percentY: 0.3949483352468427},
{color: "black", startX: 1067, startY: 345, mode: "drawing", percentY: 0.3960964408725603},
{color: "black", startX: 1067, startY: 347, mode: "drawing", percentY: 0.3983926521239954},
 {color: "black", startX: 1068, startY: 349, mode: "drawing", percentY: 0.4006888633754305},
{color: "black", startX: 1069, startY: 350, mode: "drawing", percentY: 0.4018369690011481},
 {color: "black", startX: 1069, startY: 352, mode: "drawing", percentY: 0.4041331802525832},
 {color: "black", startX: 1070, startY: 354, mode: "drawing", percentY: 0.40642939150401836},
 {color: "black", startX: 1071, startY: 356, mode: "drawing", percentY: 0.4087256027554535},
 {color: "black", startX: 1071, startY: 358, mode: "drawing", percentY: 0.41102181400688864},
 {color: "black", startX: 1071, startY: 360, mode: "drawing", percentY: 0.4133180252583238},
 {color: "black", startX: 1072, startY: 361, mode: "drawing", percentY: 0.41446613088404133},
 {color: "black", startX: 1072, startY: 363, mode: "drawing", percentY: 0.41676234213547647},
 {color: "black", startX: 1072, startY: 365, mode: "drawing", percentY: 0.4190585533869116},
 {color: "black", startX: 1072, startY: 366, mode: "drawing", percentY: 0.42020665901262916},
{color: "black", startX: 1072, startY: 368, mode: "drawing", percentY: 0.4225028702640643},
{color: "black", startX: 1072, startY: 369, mode: "drawing", percentY: 0.42365097588978184},
 {color: "black", startX: 1072, startY: 371, mode: "drawing", percentY: 0.425947187141217},
 {color: "black", startX: 1072, startY: 372, mode: "drawing", percentY: 0.42709529276693453},
{color: "black", startX: 1072, startY: 374, mode: "drawing", percentY: 0.4293915040183697},
 {color: "black", startX: 1072, startY: 376, mode: "drawing", percentY: 0.4316877152698048},
{color: "black", startX: 1072, startY: 377, mode: "drawing", percentY: 0.43283582089552236},
{color: "black", startX: 1072, startY: 379, mode: "drawing", percentY: 0.4351320321469575},
{color: "black", startX: 1072, startY: 381, mode: "drawing", percentY: 0.43742824339839265},
{color: "black", startX: 1072, startY: 383, mode: "drawing", percentY: 0.4397244546498278},
                    {color: "black", startX: 1072, startY: 385, mode: "drawing", percentY: 0.3616532721010333},
 {color: "black", startX: 1071, startY: 387, mode: "drawing", percentY: 0.36280137772675086},
 {color: "black", startX: 1071, startY: 388, mode: "drawing", percentY: 0.3639494833524684},
 {color: "black", startX: 1070, startY: 389, mode: "drawing", percentY: 0.365097588978186},
 {color: "black", startX: 1070, startY: 391, mode: "drawing", percentY: 0.36624569460390355},
 {color: "black", startX: 1070, startY: 393, mode: "drawing", percentY: 0.36739380022962115},
 {color: "black", startX: 1070, startY: 395, mode: "drawing", percentY: 0.3685419058553387},
{color: "black", startX: 1070, startY: 397, mode: "drawing", percentY: 0.3685419058553387},
{color: "black", startX: 1070, startY: 400, mode: "drawing", percentY: 0.36969001148105624},
 {color: "black", startX: 1070, startY: 403, mode: "drawing", percentY: 0.37083811710677383},
 {color: "black", startX: 1069, startY: 405, mode: "drawing", percentY: 0.3719862227324914},
 {color: "black", startX: 1068, startY: 407, mode: "drawing", percentY: 0.3742824339839265},
{color: "black", startX: 1067, startY: 409, mode: "drawing", percentY: 0.37543053960964407},
{color: "black", startX: 1067, startY: 411, mode: "drawing", percentY: 0.37657864523536166},
 {color: "black", startX: 1066, startY: 413, mode: "drawing", percentY: 0.3777267508610792},
{color: "black", startX: 1065, startY: 415, mode: "drawing", percentY: 0.38002296211251435},
 {color: "black", startX: 1064, startY: 417, mode: "drawing", percentY: 0.3823191733639495},
{color: "black", startX: 1064, startY: 419, mode: "drawing", percentY: 0.38346727898966704},
 {color: "black", startX: 1065, startY: 421, mode: "drawing", percentY: 0.38461538461538464},
 {color: "black", startX: 1066, startY: 423, mode: "drawing", percentY: 0.3869115958668197},
 {color: "black", startX: 1067, startY: 427, mode: "drawing", percentY: 0.3869115958668197},
{color: "black", startX: 1068, startY: 430, mode: "drawing", percentY: 0.3880597014925373},
 {color: "black", startX: 1069, startY: 433, mode: "drawing", percentY: 0.38920780711825487},
 {color: "black", startX: 1070, startY: 434, mode: "drawing", percentY: 0.39035591274397247},
 {color: "black", startX: 1071, startY: 437, mode: "drawing", percentY: 0.39150401836969},
 {color: "black", startX: 1072, startY: 438, mode: "drawing", percentY: 0.39150401836969},
 {color: "black", startX: 1073, startY: 441, mode: "drawing", percentY: 0.39265212399540755},
{color: "black", startX: 1073, startY: 443, mode: "drawing", percentY: 0.3949483352468427},
{color: "black", startX: 1073, startY: 447, mode: "drawing", percentY: 0.3960964408725603},
{color: "black", startX: 1073, startY: 450, mode: "drawing", percentY: 0.3983926521239954},
 {color: "black", startX: 1073, startY: 453, mode: "drawing", percentY: 0.4006888633754305},
{color: "black", startX: 1073, startY: 457, mode: "drawing", percentY: 0.4018369690011481},
 {color: "black", startX: 1073, startY: 460, mode: "drawing", percentY: 0.4041331802525832},
 {color: "black", startX: 1073, startY: 463, mode: "drawing", percentY: 0.40642939150401836},
 {color: "black", startX: 1073, startY: 467, mode: "drawing", percentY: 0.4087256027554535},
 {color: "black", startX: 1073, startY: 470, mode: "drawing", percentY: 0.41102181400688864},
 {color: "black", startX: 1073, startY: 473, mode: "drawing", percentY: 0.4133180252583238},
 {color: "black", startX: 1072, startY: 475, mode: "drawing", percentY: 0.41446613088404133},
 {color: "black", startX: 1072, startY: 479, mode: "drawing", percentY: 0.41676234213547647},
 {color: "black", startX: 1072, startY: 480, mode: "drawing", percentY: 0.4190585533869116},
 {color: "black", startX: 1072, startY: 481, mode: "drawing", percentY: 0.42020665901262916},
{color: "black", startX: 1072, startY: 483, mode: "drawing", percentY: 0.4225028702640643},
{color: "black", startX: 1072, startY: 485, mode: "drawing", percentY: 0.42365097588978184},
 {color: "black", startX: 1072, startY: 488, mode: "drawing", percentY: 0.425947187141217},
 {color: "black", startX: 1072, startY: 491, mode: "drawing", percentY: 0.42709529276693453},
{color: "black", startX: 1072, startY: 495, mode: "drawing", percentY: 0.4293915040183697},
 {color: "black", startX: 1072, startY: 497, mode: "drawing", percentY: 0.4316877152698048},
{color: "black", startX: 1072, startY: 500, mode: "drawing", percentY: 0.43283582089552236},
{color: "black", startX: 1072, startY: 503, mode: "drawing", percentY: 0.4351320321469575},
{color: "black", startX: 1072, startY: 507, mode: "end", percentY: 0.43742824339839265}]

 function preDraw(){
    for(let i = 0; i<preGenerate.length; i++){

              c.lineWidth = 8;
              c.lineCap = 'round';
              if(preGenerate[i].mode == 'start'){
                c.beginPath();
                c.moveTo(preGenerate[i].startX, preGenerate[i].startY);
                c.strokeStyle = "black";
              }
              else if(preGenerate[i].mode == 'drawing'){
                c.lineTo(preGenerate[i].startX, preGenerate[i].startY);
                c.moveTo(preGenerate[i].startX, preGenerate[i].startY);
                c.strokeStyle = preGenerate[i].color;
                 c.stroke();
              }
              else if(preGenerate[i].mode =='end'){
                c.closePath();
                c.strokeStyle = preGenerate[i].color;
                c.stroke();
              }

        }
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
        justCleared46 = false;
        c.beginPath();
currentPoint = {color: lineColor, startX: startPosition.x, startY: startPosition.y, mode: "start", percentY: calculatePercent(yMouse)};
currentLine.push(currentPoint);

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
    allPoints46.push(currentLine);
    firstLine= [].concat(...allPoints46);
    currentLine =[];
  // }

  console.log({firstLine: firstLine, allPoints46: allPoints46});


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
     allPoints46.push(currentLine);
     firstLine = [].concat(...allPoints46);
     currentLine = [];

   }
   else if(whereIsMouse()=='right'){
     currentPoint = {color:lineColor, startX: canvas.width , startY: yMouse, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints46.push(currentLine);
     firstLine = [].concat(...allPoints46);
     currentLine = [];
   }
    else if(whereIsMouse() == 'bottom'){
     currentPoint = {color:lineColor, startX: xMouse, startY: canvas.height, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints46.push(currentLine);
     firstLine = [].concat(...allPoints46);
     currentLine = [];
    }
    else if (whereIsMouse() == 'left'){
     currentPoint = {color:lineColor, startX: 0, startY: yMouse, mode: "end", percentY: calculatePercent(yMouse)};
     currentLine.push(currentPoint);
     allPoints46.push(currentLine);
     firstLine = [].concat(...allPoints46);
     currentLine = [];
    }
  isItDrawing = false;


})
//nav bar functions

blackBtn.addEventListener('click', (event) =>{
    drafter.color = 'black';
    lineColor = 'black';
    eraser = false;
})

erase.addEventListener('click', () =>{
  drafter.color = 'white';
  lineColor = 'white';
  eraser = true;
})

//clearing the Canvas
let clearSaves =[];
let concatClear = [];
function clear(){
  // c.clearRect(0, 0, canvas.width, canvas.height);
  whiteBackground();
  c.strokeStyle = 'black';
  drafter.color = 'black';
  lineColor = 'black';
  clearSaves = [...alllPoints];
  concatClear = [...firstLine];
  deleted = [];
  preGenerate = [];
  eraser = false;
  justCleared46 = true;
  firstLine = [];
  allPoints46 = [];
}
clearCanvasBtn.addEventListener('click', () =>{
    clear();
})

$('#redo').click(function(){
  if(clearedAndUndone == true){
    clear();
    return;
  }
  if(deleted[deleted.length-1] != allPoints46.push[allPoints46.length-1]){
    c.beginPath();
    allPoints46.push(deleted[deleted.length-1]);
    deleted.pop();
    firstLine = [].concat(...allPoints46);
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
  }
});


let clearedAndUndone;
$('#undo').click(function(){
  clearedAndUndone = false;
  if(justCleared46 == true){
    clearedAndUndone = true;
    whiteBackground();
    allPoints46 = [...clearSaves];
    firstLine = [].concat(...allPoints46);
    // clearSaves = [];
    // concatClear = [];
    c.clearRect(0, 0, canvas.width, canvas.height);
    redrawLines();
    justCleared46 = false;
    return;
  }
  if(allPoints46.length >0){
    deleted.push(allPoints46[allPoints46.length-1]);
    allPoints46.pop();
    firstLine = [].concat(...allPoints46);
    console.log(firstLine)
    c.clearRect(0, 0, canvas.width, canvas.height);
    whiteBackground();
    redrawLines();
  }


});





finish.addEventListener('click', () =>{
  whiteBackground();
  redrawLines();
  let final46 = canvas.toDataURL();
  localStorage.setItem('final46', final46);
  setTimeout(()=>{
  window.open(canvas.toDataURL("image/png"), '_blank');}, 6000)
})

download.addEventListener('click', () => {
  whiteBackground();
  redrawLines();
  if(window.navigator.msSaveBlob){
    window.navigator.msSaveBlob(canvas.msToBlob(), "46-wall-drawing.png");
  }
  else{
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.href= canvas.toDataURL();
    a.download = "46-wall-drawing.png";
    a.click();
    document.body.removeChild(a);
  }


})

});
