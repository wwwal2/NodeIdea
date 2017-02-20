function say(word) {
	console.log(word);
}

function Run(otherFunctionSlot, value) {
	otherFunctionSlot(value);   //genious!
}

Run (say, "Hello nodeIdea");
