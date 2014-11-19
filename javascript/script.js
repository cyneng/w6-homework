//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn()
{
		alert("Thanks for signing in.");
}


//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp()
{
	var email = prompt("Enter your email address.");
	document.getElementById("output-here").innerHTML = email;
}

//Extra Credit

function montyPython()
{
	var quotes = [
		"Now go away or I shall taunt you a second time!",
		"Always look on the bright side of life.",
		"Oh! Come and see the violence inherent in the system! Help, help! I'm being repressed!",
		"I fart in your general directon. Your mother was a hamster and your father smelt of elderberries."
	];

	var randomNumber = Math.floor(Math.random()*quotes.length)
	alert(quotes[randomNumber]);
}