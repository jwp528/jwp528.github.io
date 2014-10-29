$(document).ready(function(){
  $(".cell").each(function(){
    adjustHeights(".cell");
  });
  bingo_start();
});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
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
  "How good Garth is",
  "Past Employment",
  "Sexual References",
  "Sits Cross-legged on desk",
  "Daughters are national athletes",
  "Husband",
  "6th semesters",
  "Code Errors",
  "Wags fingers",
  "Starbucks",
  "\"Should I let you guys out early?\"",
  "\"Beautiful\"",
  "Comments",
  "Questions",
  "Gets Distracted",
  "Consults the syllabus",
  "Textbook",
  "Whiteboard UML",
  "Mispronounces Words",
  "Sarcastic Disappointment",
  "\"Try it\"",
  "Shared Pointers",
  "\"Let me just see\"",
  "\"You guys look tired\""
);
  
  elements = shuffle(elements);
  
  $(".cell").each(function(){
    $(this).text(elements.shift());
  });
}

function adjustHeights(elem) {
      var fontstep = 2;
      if ($(elem).height()>$(elem).parent().height() || $(elem).width()>$(elem).parent().width()) {
        $(elem).css('font-size',(($(elem).css('font-size').substr(0,2)-fontstep)) + 'px').css('line-height',(($(elem).css('font-size').substr(0,2))) + 'px');
        adjustHeights(elem);
      }
}

function clear_board() {
  $(".cell").each(function(){
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
  });
}

function evaluateRow() {
  if ($("#l1").hasClass("selected") && $("#w1").hasClass("selected") && $("#o1").hasClass("selected") && $("#n1").hasClass("selected") && $("#g1").hasClass("selected")) {
    document.getElementById("win").play();
    alert("Congratulations", "l1, w1, o1, n1, g1 - That's a line!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
  
  if ($("#l2").hasClass("selected") && $("#w2").hasClass("selected") && $("#o2").hasClass("selected") && $("#n2").hasClass("selected") && $("#g2").hasClass("selected")) {
    document.getElementById("win").play();
    alert("l2, w2, o2, n2, g2 - That's a line!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
  
  if ($("#l3").hasClass("selected") && $("#w3").hasClass("selected") && $("#o3").hasClass("selected") && $("#n3").hasClass("selected") && $("#g3").hasClass("selected")) {
    document.getElementById("win").play();
    alert("l3, w3, o3, n3, g3 - That's a line!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
  
  if ($("#l4").hasClass("selected") && $("#w4").hasClass("selected") && $("#o4").hasClass("selected") && $("#n4").hasClass("selected") && $("#g4").hasClass("selected")) {
    document.getElementById("win").play();
    alert("l4, w4, o4, n4, g4 - That's a line!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
  
  if ($("#l5").hasClass("selected") && $("#w5").hasClass("selected") && $("#o5").hasClass("selected") && $("#n5").hasClass("selected") && $("#g5").hasClass("selected")) {
    document.getElementById("win").play();
    alert("l5, w5, o5, n5, g5 - That's a line!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }
}//end evaluate row

function evaluateCol() {
   if ($("#l1").hasClass("selected") && $("#l2").hasClass("selected") && $("#l3").hasClass("selected") && $("#l4").hasClass("selected") && $("#l5").hasClass("selected")){
    document.getElementById("win").play();
    alert("w1, w2, w3, g4, g5 - That's a column!\nLIANNE");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
  
  if ($("#w1").hasClass("selected") && $("#w2").hasClass("selected") && $("#w3").hasClass("selected") && $("#w4").hasClass("selected") && $("#w5").hasClass("selected")){
    document.getElementById("win").play();
    alert("w1, w2, w3, g4, g5 - That's a column!\nLIANNE");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
    
  if ($("#o1").hasClass("selected") && $("#o2").hasClass("selected") && $("#o3").hasClass("selected") && $("#o4").hasClass("selected") && $("#o5").hasClass("selected")){
    document.getElementById("win").play();
    alert("o1, o2, o3, o4, o5 - That's a column!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
    
  if ($("#n1").hasClass("selected") && $("#n2").hasClass("selected") && $("#n3").hasClass("selected") && $("#n4").hasClass("selected") && $("#n5").hasClass("selected")){
    document.getElementById("win").play();
    alert("n1, n2, n3, n4, n5 - That's a column!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
  
  if ($("#g1").hasClass("selected") && $("#g2").hasClass("selected") && $("#g3").hasClass("selected") && $("#g4").hasClass("selected") && $("#g5").hasClass("selected")){
    document.getElementById("win").play();
    alert("g1, g2, g3, g4, g5 - That's a column!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
}//end evaluate col

function evaluateDiagonal(){
  if ($("#l1").hasClass("selected") && $("#w2").hasClass("selected") && $("#o3").hasClass("selected") && $("#n4").hasClass("selected") && $("#g5").hasClass("selected")){
    document.getElementById("win").play();
    alert("l1, w2, o3, n4, g5 - That's a cross!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
  
  if ($("#l5").hasClass("selected") && $("#w4").hasClass("selected") && $("#o3").hasClass("selected") && $("#n2").hasClass("selected") && $("#g1").hasClass("selected")){
    document.getElementById("win").play();
    alert("l5, w4, o3, n2, g1 - That's a cross!\nLIANNE!");
    sleep(1000);
    clear_board();
    bingo_start();
  }//end if
}