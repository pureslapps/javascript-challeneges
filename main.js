funtcion reverseString() {

  var splitString = eye.split("")

  var reverseArray = splitString.reverse('');

  var joinArray = reverseArray.join("");

  return joinArray;
}


intergers =[]
let i = 0
while (i<100) {
  intergers.push(i+1)
  i++
}
for (x of intergers) {
    if (i % 15 == 0) console.log('fizzbuzz');
    else if (i % 3 == 0) console.log('fizz')
    else if ( i % 5 == 0) console.log('buzz')
    else console.log (i);
}

let vowels = ["a", "e", "i", "o", "u"]
function pigLatin(string) {
 str = prompt("Enter a word")
 let x = str.substr(1)
 let y = str.charAt(0)
 if (!(vowels.includes(y))){
   return x + y + "ay"
} else{
 return str + "ay"
}
}




// i++ is short hand for i = i+1 preventing infinite loops
// differenet data types have diffenents properties and different functions that
// you can call on
// {object}
// 'string'
// ()
// [array]
