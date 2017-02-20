function Run(otherFunctionSlot, value1, value2) {
	otherFunctionSlot(value1, value2);
}

Run(function(arg1, arg2) {console.log(arg1 + arg2);}, "Hello ", "nodeV2");

