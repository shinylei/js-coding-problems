/*Problem
个长度小于 50 且包含字母和数字的任意字符串，要求按顺序取出当中的数字和英文字母，数字需要去重，重新排列后的字符串数字在前，字母在后。
*/

function handleStr(str) {
  var arr = str.split('');
  var nums = [];
  var chars = '';

  arr.forEach(function(e) {
    if (/\d/.test(e)) {
      nums.push(e);
    } else if (/[A-Za-z]/.test(e)) {
      chars += e;
    }
  }); 

  return uniqueArr(nums).join('') + chars

}

/*ES 5*/
// function uniqueArr(arr) {
//   return arr.filter(function(e, i) {
//     return arr.indexOf(e) === i;
//   });
// }

function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

console.log(handleStr('C2t0r1i8p2020校招'));