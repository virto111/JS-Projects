
/* ==========================================
### REVERSE A STRING
==============================================*/
// Solution: #1
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log('reverse :> ', reverse('echo'));

// Solution: #2
function reverse2(str) {
  var reversedString = '';
  var strArr = str.split('');
  
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedString += strArr[i];
  }
  
  return reversedString;
}

console.log('reverse2 :> ', reverse2('echo'));

// Solution: #3
function reverse3(str) {
  let reversed = '';
  
  for (let char of str) {
    reversed = char + reversed;
  }
  
  return reversed;
}

console.log('reverse3 :> ', reverse3('echo'));

// Solution: #4
function reverse4(str) {
  return str.split('').reduce((rev, char) => (char + rev), '');
}

console.log('reverse4 :> ', reverse4('echo'));

// !!! with [node inspect <filename.js>] we can run the file in debugging mode
// ? to prceed after debugger we have to type [c] or [continue]
// ? to enter [repl] - read-eval-print loop, we have to write [repl] 

/* ==========================================
### PALINDROME
==============================================*/
// 'abba' - this is polindrome, so we can use a reverse finction
function polindrome(str) {
  return str === reverse4(str);
}

/* ==========================================
### REVERSED INT
==============================================*/
function reverseInt(int) {
  let sign = Math.sign(int);
  let reversed = int.toString()
                .split('')
                .reverse()
                .join('');
  return parseInt(reversed) * sign;
}

/* ==========================================
### MAX CHAR
==============================================*/
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    // if (charMap[char]) {
    //   charMap[char]++;
    // } else {
    //   charMap[char] = 1;
    // }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
/* ==========================================
### FIZZBUZZ
==============================================*/
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
/* ==========================================
### ARRAY CHUNK
==============================================*/
// Solution: #1 - My solution
function chunk(arr, size) {
  var chunkArr = [];
  while(arr.length) {
    chunkArr.push(arr.splice(0, size)); // mutate the [arr] array
  }
  return chunkArr;
}

// Solution: #2 
function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Solution: #3
function chunk3(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

/* ==========================================
### ANAGRAMS
==============================================*/
// We consider only characters! Also no case sensitivity.
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// With this we replace all except characters - replace(/[^\w]/g, '');
// Solution: #1 (with Character Map)
function anagrams(strA, strB) {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let prop in aCharMap) {
    if (aCharMap[prop] !== bCharMap[prop]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

// Solution: 2
function anagrams2(strA, strB) {
  const sortedA = strA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const sortedB = strB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return sortedA === sortedB;
}
/* ==========================================
### CAPITALIZATION
==============================================*/
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Solution #1 - make use of SLICE() Method
function capitalize(str) {
  return str.split(' ')
            .map((word) => (word[0].toUpperCase() + word.slice(1)))
            .join(' ');
}

// Solution #2
function capitalize2(str) {
  //* add the first letter to the transforming string
  let resultString = str[0].toUpperCase();

  //! Can NOT use [for of] loop because we are starting the loop from the second letter
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      let upperChar = str[i].toUpperCase();
      resultString += upperChar;
    } else {
      resultString += str[i];
    }
  }

  return resultString;
}

/* ==========================================
### STEPS
==============================================*/
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
