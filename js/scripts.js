
var beepBoop = function(number, name){
  var stringNumber = "";
  stringNumber = number.toString();

  var userName = name;
  if (userName){
    userName = ", " + userName;
  }

  if (number % 3 === 0 && number !== 0){
    return("I'm sorry" + userName + ". I'm afraid I can't do that.");
  } else if (stringNumber.includes("1")) {
    return("Boop!");
  } else if (stringNumber.includes("0")) {
    return("Beep!");
  } else {
    return(stringNumber);
  } 
};

$(document).ready(function(){
  $("#name").focus();

  $("form").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var inputNumber = parseInt($("#number").val());
    var outputText = [];

    if (isNaN(inputNumber)){
        alert("Please type in a number!");
        $("#number").focus();
    } else {

      for(var index = 0; index <= inputNumber; index++){
        outputText.push(beepBoop(index, userName));
      }

      if (userName) {
        $(".name").text(userName + ",");
      }

      //$("#result").text(outputText.join(", "));
      outputText.forEach(function(reply){
        var beforeReplyTag = "";
        var afterReplyTag = "";
        var imgTag = "";
        var isTextReply = true;
        var textReply = "";

        textReply = reply;

        if (reply.includes("sorry")){
          imgTag = "<img src='img/sorry.jpg' alt='Sorry...'> ";
        }
        else if (reply.includes("Beep")) {
          imgTag = "<img src='img/beep.jpg' alt='Beep!'> ";
        }
        else if (reply.includes("Boop")) {
          imgTag = "<img src='img/boop.jpg' alt='Boop!'> ";
        }
        else {
          beforeReplyTag = "<em>";
          afterReplyTag = "</em>";
          isTextReply = false;
        }

        if ($("#showOptions").val() === "2"){
          // text only
          imgTag = "";
        }

        if ($("#showOptions").val() === "3" && isTextReply){
          // images only
          textReply = "";
        }

        console.log("<li>" + imgTag + beforeReplyTag + textReply + afterReplyTag + "</li>");

        $("ul").append("<li>" + imgTag + beforeReplyTag + textReply + afterReplyTag + "</li>");
      });

      $(".input").hide();
      $(".result").show();
    }
  });

  $("#again").click(function(){
    $(".input").show();
    $(".result").hide();
    $("#number").val("");
    $("#number").focus();
    $("ul").empty();
  });
});
