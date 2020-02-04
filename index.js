function testString(str) {
  const joinString = str.split('');
  let condensArr = [ joinString[0] ];
  let c = 1;

  function condense(){
    for (let i = 1; i < joinString.length; i++) {
      if (joinString[i] === joinString[i - 1]) {
        c++;
      } else {
        condensArr.push(c)
        condensArr.push(joinString[i]);
        c = 1;
      }
    } 
    
    if (c > 1) {condensArr.push(c);}
      
    return condensArr.join('');
   }
   
  return condense();
}

console.log(testString('aaaabbbcccdd'));
 
/*for (let i in uniqArr) {
  console.log(i);
}

let compress = function(str) {
  
  
  return result;
}

console.log(uniqArr.values());

console.log(compress(testString));



/*Challenge Question
write a function that takes in a string and outputs a compressed version of that string

example

const testString = 'aaaabbbcccdd'; // input
const result = 'a4b3c3d2'; // output

function writeThisFunction() {
  // TODO: write this function that takes in a test string and returns the compressed result
}*/