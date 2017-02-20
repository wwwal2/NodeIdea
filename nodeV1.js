// version 1 of Node server
function Run(otherFunctionSlot, value1, value2) {
	otherFunctionSlot(value1, value2);
}

function say(arg1, arg2) {
	console.log(arg1 + arg2);
}

Run(say, "Hello ", "NodeV1");