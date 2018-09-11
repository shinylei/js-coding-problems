/* 
	Problem:remove duplicate elements from an array
*/

//Method 1: ES5 version
//array with only basic type
function unique(arr) {
	return arr.filter(function(element, index) {
		return arr.indexOf(element) === index;
	});
}

//array with object type
function unique(arr) {
	var hash = {};
	return arr.filter(function(e) {
		return hash.hasOwnProperty(e) ? false : (hash[e] = true)
	});
}

//Method2 : ES6 version 
function unique(arr) {
	return Array.from(new Set(arr));
}

function unique(arr) {
	return [...new Set(arr)]
}