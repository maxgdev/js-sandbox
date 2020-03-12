// Reverse string of text
function reverseStr(text){
	return text.split(' ')
	.reverse()
	.join(' ');
}

const newString = reverseStr('Leornado Da Turtle');
console.log(newString)