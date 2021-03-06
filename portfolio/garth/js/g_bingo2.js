$(document).ready(function(){
  bingo_start();
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) >= milliseconds){
      break;
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function bingo_start() {

  var elements = new Array(
    "Roman Roads",
    "Halo",
    "Punchline Exhale",
    "Apple Security",
    "Radio Waves",
    "Kids or Wife",
    "Chocolate Milk Ice Cap",
    "Coke",
    "Stack Overflow",
    "Overhead",
    "Western Work",
    "Why Java is shit",
    "Why Google is shit",
    "Linux in C++",
    "Brings up a Philosopher",
    "\"Do it\"",
    "\"Questions\"",
    "Greek Stories",
    "\"Ideas\"",
    "Strauslup",
    "Microsoft",
    "I know a guy",
    "Cargo Shorts/Pants",
    "\"Anyone wanna tell him why he's wrong?\""
  );

  elements = shuffle(elements);

  $(".cell").each(function(){
    $(this).html("<p class='lower'>" + elements.shift() + "</p>");
  });

  $("#r3").addClass("selected");
}

function clear_board() {
  $(".cell").each(function(){
    $(this).removeClass("sauron");
    $(this).removeClass("black");
    $(this).removeClass("disabled");
    $(this).removeClass("selected");
    $(".reset").removeClass("disabled");
    $("#r3").removeClass("white");
  });
}//end clear_board()

function evaluateRow() {
  if ($("#g1").hasClass("selected") && $("#a1").hasClass("selected") && $("#r1").hasClass("selected") && $("#t1").hasClass("selected") && $("#h1").hasClass("selected")){
    document.getElementById("win").play();
    alert("g1, a1, r1, t1, h1 - That's a line!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#g2").hasClass("selected") && $("#a2").hasClass("selected") && $("#r2").hasClass("selected") && $("#t2").hasClass("selected") && $("#h2").hasClass("selected")){
    document.getElementById("win").play();
    alert("g2, a2, r2, t2, h2 - That's a line!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }

  if ($("#g3").hasClass("selected") && $("#a3").hasClass("selected") && $("#r3").hasClass("selected") && $("#t3").hasClass("selected") && $("#h3").hasClass("selected")){
    document.getElementById("win").play();
    alert("g3, a3, r3, t3, h3 - That's a line!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }

  if ($("#g4").hasClass("selected") && $("#a4").hasClass("selected") && $("#r4").hasClass("selected") && $("#t4").hasClass("selected") && $("#h4").hasClass("selected")){
    document.getElementById("win").play();
    alert("g4, a4, r4, t4, h4 - That's a line!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }

  if ($("#g5").hasClass("selected") && $("#a5").hasClass("selected") && $("#r5").hasClass("selected") && $("#t5").hasClass("selected") && $("#h5").hasClass("selected")){
    document.getElementById("win").play();
    alert("g5, a5, r5, t5, h5 - That's a line!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
}//end evaluate row

function evaluateCol() {
  if ($("#g1").hasClass("selected") && $("#g2").hasClass("selected") && $("#g3").hasClass("selected") && $("#g4").hasClass("selected") && $("#g5").hasClass("selected")){
    document.getElementById("win").play();
    alert("g1, g2, g3, g4, g5 - That's a column!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#a1").hasClass("selected") && $("#a2").hasClass("selected") && $("#a3").hasClass("selected") && $("#a4").hasClass("selected") && $("#a5").hasClass("selected")){
    document.getElementById("win").play();
    alert("a1, a2, a3, a4, a5 - That's a column!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#r1").hasClass("selected") && $("#r2").hasClass("selected") && $("#r3").hasClass("selected") && $("#r4").hasClass("selected") && $("#r5").hasClass("selected")){
    document.getElementById("win").play();
    alert("r1, r2, r3, r4, r5 - That's a column!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#t1").hasClass("selected") && $("#t2").hasClass("selected") && $("#t3").hasClass("selected") && $("#t4").hasClass("selected") && $("#t5").hasClass("selected")){
    document.getElementById("win").play();
    alert("t1, t2, t3, t4, t5 - That's a column!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#h1").hasClass("selected") && $("#h2").hasClass("selected") && $("#h3").hasClass("selected") && $("#h4").hasClass("selected") && $("#h5").hasClass("selected")){
    document.getElementById("win").play();
    alert("h1, h2, h3, h4, h5 - That's a column!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
}//end evaluate col

function evaluateDiagonal(){
  if ($("#g1").hasClass("selected") && $("#a2").hasClass("selected") && $("#r3").hasClass("selected") && $("#t4").hasClass("selected") && $("#h5").hasClass("selected")){
    document.getElementById("win").play();
    alert("g1, a2, r3, t4, h5 - That's a cross!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if

  if ($("#g5").hasClass("selected") && $("#a4").hasClass("selected") && $("#r3").hasClass("selected") && $("#t2").hasClass("selected") && $("#h1").hasClass("selected")){
    document.getElementById("win").play();
    alert("g5, a4, r3, t2, h1 - That's a cross!\n\tGARTH!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
}

function evaluateSauron(){
  if($("#g3").hasClass("selected") && 
      $("#a2").hasClass("selected") && $("#a4").hasClass("selected") && 
      $("#r1").hasClass("selected") && $("#r3").hasClass("selected") && $("#r5").hasClass("selected") &&
      $("#t2").hasClass("selected") && $("#t4").hasClass("selected") && 
      $("#h3").hasClass("selected")  
    ){
    var check = [
        "g3", "a2", "a4", "r1", "r3", "r5", "t2", "t4", "h3"
    ];

    alert("THE EYE SEES ALL!");

    $(".cell").each(function(){
        $(this).removeClass("selected");
        $(this).removeClass("newsbg");
    });

    $(".cell").each(function(){
        if(check.includes($(this).attr("id"))){
            $(this).addClass("sauron");
        }else{
          $(this).addClass("black");
        }//end if else

        $("#r3").addClass("white");
        $(this).addClass("disabled");
    });
    $(".reset").addClass("disabled");
    var myAudio = document.getElementById("the_eye");
    myAudio.play();

    myAudio.addEventListener("ended", function(){
       myAudio.currentTime = 0;
       clear_board();
       bingo_start();
    });
  }//end if
}//end sauron
