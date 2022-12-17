//how to create a Pattern
//Modifiers : i : It is case-insensitive

// var pattern = /kabir/;

//Pattern with Modifier or flag :  i
// var pattern = /kabir/i;

var pattern = /Mrkabir/gi; // g is modifer and it stands for global

var text = "Mr Kabir is a developer Mr Kabir and Mr Kabir";

// var result = pattern.test(text);

//exec()  : this function will returned matched character and its index number in array fomrat
// var result = pattern.exec(text);
// console.log(result);

// result = pattern.exec(text);
// console.log(result);

// result = pattern.exec(text);
// console.log(result);

//match() :
//  text.match(pattern)

var result = text.match(pattern);
console.log(result);

// search()   //replace() : Explore this function
