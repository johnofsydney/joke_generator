console.log("connected");
$('#reveal').hide();

const generateJoke = function () {
  let question = "A ham sandwich walks into a bar and orders a beer";

  $('#joke-container').append(question);
  $('#generate').hide();
  $('#reveal').show();
};


const revealAnswer = function () {
    let answer = "the bartender says “sorry, we don’t serve food here.";
  
    
    $('#joke-container').append(answer);
    $('#reveal').hide();
    $('#generate').show();
  };


$('#generate').on('click', generateJoke);
$('#reveal').on('click', revealAnswer);

