console.log("connected");
$('#reveal').hide();
let count = 0;

const jokes = [
  {
    question: "A ham sandwich walks into a bar and orders a beer",
    answer: "the bartender says “sorry, we don’t serve food here."
  },
  {
    question: "how did Darth Vader know what Luke was getting for christmas",
    answer: "he felt his presents."
  }
];

const generateJoke = function () {
  let question = jokes[count].question;
  let answer = jokes[count].answer;

  let questionParagraph = `<p id="question-${count}">${question}</p>`;
  let answerParagraph = `<p id="answer-${count}">${answer}</p>`;

  $('#joke-container').append(questionParagraph);
  $('#joke-container').append(answerParagraph);
  $(`#answer-${count}`).hide();


  // buttons
  $('#generate').hide();
  $('#reveal').show();

  count ++;
};

const revealAnswer = function () {
  $(`#answer-${count - 1}`).show();

  // buttons
  $('#reveal').hide();
  $('#generate').show();
};


$('#generate').on('click', generateJoke);
$('#reveal').on('click', revealAnswer);

