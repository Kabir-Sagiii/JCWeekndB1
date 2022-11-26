// var regex = /[abc]xyz/g; //axyz  or bxyz  or cxyz

// var text = "Raxyzj is one of the team membxyzer in the Project";

// // var result = regex.test(text);
// var result = text.match(regex);
// console.log(result);

// var regex = /[a-z0-9A-Z]9898xyz/;

// var regex = /^[a-z0-9A-z]{2,5}@gmail.com$/g;
// var text = "h123@gmail.com";

// var result = text.match(regex);
// console.log(result);

// var pattern = /^[a-z]{0,5}$/;

// var text = "ab";

// console.log(pattern.test(text));

var pattern = /[a-z0-9]{5}b\*/g; // \* \. \? \^ \$   @

var text = "a1a23b*";

// var result = pattern.test(text);
var result = text.match(pattern);
console.log(result);

//
