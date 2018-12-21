let time = 11;
let questions = [
	{
		question: "What day is Christmas?",
		options: ["October 31st", "July 4th", "December 25th", "December 31st"],
		correctOption: "December 25th"
	},
	{
		question: "How many reindeer does Santa have?",
		options: [1, 6, 4, 9],
		correctOption: 3
	},
	{
		question: "What Christmas beverage is also known as 'milk punch?'",
		options: ["Apple Cider", "Eggnog", "Hot Chocolate", "Fruit Punch"],
		correctOption: 1
	},
	{
		question: "One of Santa’s reindeer shares a name with a famous symbol of Valentine’s Day. Which reindeer is that?",
		options: ["Rudolph", "Prancer", "Dasher", "Cupid"],
		correctOption: 3
	},
	{
		question: "What traditional Christmas decoration is actually a parasitic plant?",
		options: ["Mistletoe", "Star", "Christmas Tree", "Olive Branch"],
		correctOption: 0
	},
	{
		question: "In what modern-day country was Saint Nicholas born?",
		options: ["France", "England", "Austria", "Turkey"],
		correctOption: 3
	},
	{
		question: "What glittery bits of metal are hung on a Christmas tree?",
		options: ["Ornaments", "Tinsel", "Fake Snow", "Glitter"],
		correctOption: 1
	},
	{
		question: "What color is the Grinch?",
		options: ["Red", "Blue", "Yellow", "Green"],
		correctOption: 3
	},
	{
		question: "How many pipers piping did my true love give to me?",
		options: [5, 7, 9, 11],
		correctOption: 3
	},
	{
		question: "What country started the tradition of exchanging gifts?",
		options: ["Turkey", "Italy", "Greece", "Spain"],
		correctOption: 1
	}

];


let question = {};
newQuestion();
timer1();

function newQuestion() {
	question = questions[(Math.floor(Math.random() * 10) + 1) - 1];
	$("#question").html(question.question);
	$(".answers").html("");


	question.options.forEach(function(option) {
		$(".answers").append($("<div class=option>").html(option));
	});

	$(".option").on("click", function() {
		let answer = $(this).html();
		if (question.options.indexOf(answer) == question.correctOption) {
			alert("Correct!");
			time = 11;
			newQuestion();
		}
		else{
			alert("Wrong");
			time = 11;
			newQuestion();
		}
	});
}
function timer1(){
timer = setInterval(function(){
	time--;
	$("#time").html("Time Left: " + time);
	if(time === 0){
		alert("Out of time! The correct answer was: " + question.options[question.correctOption]);
		time = 11;
		newQuestion();
	}
	}, 1000);
}
