
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

// Solution #1 - My solution
function step(steps) {
  let output = '';

  for (let i = 1; i <= steps; i++) {
    for (let j = 0; j < i; j++) {
      output += '#';
    }
    for (let k = 0; k < (steps - i); k++) {
      output += '_';
    }
    output += '\n';
  }
  console.log(output);  
}

step(5);

// Solution #2
function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}


// Solution #3 - Recursion
function step3(n, row = 0, stair = '') {
  if (row === n) return;

  //* Go to next [row]
  if (n === stair.length) {
    console.log(stair);
    return step3(n, (row + 1)); //* stair will be default :-) - here we don't accumulate [stair] as first solution
  }

  //* Go to next [cell]
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += '_';
  }
  step3(n, row, stair);
}

step3(3);

/* ==========================================
### PYRAMID
==============================================*/
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1
function pyramid(n) {
  //*  we have to calculate columns => (n * 2) - 1
  //* get the mid point for each row as INDEX => ((n * 2) - 1) / 2 => Math.floor
  let numCols = (n * 2) - 1;
  let midColIndex = Math.floor(numCols / 2);
  
  for (let row = 0; row < n; row++) {
    let level = '';
    
    for (let col = 0; col < numCols; col++) {
      if (col < midColIndex - row || col > midColIndex + row) {
        level += '_';
      } else {
        level += '#';
      }
    }
    console.log(level);
  }
}

pyramid(5)

// Solution #1 - Recursion
function pyramid2(n, row = 0, rowString = '') {
  let numCol = 2 * n - 1;
  
  if (row === n) {
    return;
  }

  if (rowString.length === numCol) {
    console.log(rowString);
    return pyramid2(n, row + 1);
  }

  const midpoint = Math.floor((numCol) / 2);
  let add;
  //! Below is inclusive - in contrast with above #1 solution where is exclusive!
  if (midpoint - row <= rowString.length && midpoint + row >= rowString.length) {
    add = '#';
  } else {
    add = '_';
  }
  pyramid2(n, row, rowString + add);
}


/* ==========================================
### VOWELS
==============================================*/
// Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution #1 - Using String [includes]
//* 'Hello World'.includes('Helll') => false
//* 'Hello World'.includes('Hell') => true
//* 'Hello World'.includes('e') => true
//? - very powerful method - [includes]
//! [Array] and [String] have 
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}


/* ==========================================
### MARTIX
==============================================*/
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6],
//      [10,  9,  8, 7]]

//! Useful Array patterns
//* Array.from(Array(5)) => [undefined, undefined, undefined, undefined, undefined]
//? OR
//* Array(5).fill() => [undefined, undefined, undefined, undefined, undefined]
function * generate(num) {
  let count = 0;
  while (num > count++) {
    yield count;
  }
} 
//? OR
//* Array.from(generate(5)) => [1,2,3,4,5]
/*
* var arr = [];
* arr[3] = 4 => [empty, empty, empty, 4]
*/
function matrix(n) {
  //* create Empty Array
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]); //? (n = 3) => [[], [], []]
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //* Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; //! Increment First Row since it is populated
    
    //* Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; //! Decrement End Column!
  
    //* Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
  
    //* Left Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

matrix(3);

/* ==========================================
### RUNTIME COMPLEXITY
==============================================*/
/*
* Runtime complexity describes the Performance of an Algorithm
* [String Reverse] problem - linear runtime -> (N) Linear Runtime
* [Steps] problem - N times N things - Quadratic operations

* Constant time -> 1
* Logarithmic time -> log(n). Most often for Search algorithms
* Linear time -> n
* Quasilinear time -> n * log(n)
* Quadratic time -> n ^ 2 -> Handshake problem. Each additional element have to iterate over each from the collection
* Exponational -> 2 ^ n -> Worst scenario, which we want to avoid!

? BIG 'O' Notation === Runtime Complexity
* O(n) -> Linear
* O(1) -> Constant
* O(n^2) -> Quadratic
* O(log n) -> 
* 2^2 -> Exponential Runtime (Fib with recursion)

! Identify complexity
* Iterate over FOR Loop (fixed set of records) we have linear runtime complexity
* O(n + m) -> iterating over two strings for example
* Nested FOR Loop means Quadratic Runtime Complexity
* Sorting is most probably O(n * log(n))
! BUT Space Complexity
* Very similar to Runtime Com. BUT refers to how much RAM it takes. 
* See Steps algorithm - it is Quadratic Space Com. For 2 => 4 items in the memory 
*/

/*
? Logarithms in Complexity
? -1- What is Logarithm log2(8) => [2]pow[3] = 8
? Log is about: What to power the BASE BY to get the Num in parentheses
* Quick sort is O(log n) complexity
*/

/* ==========================================
### FIBONACCI
==============================================*/
//  Print out the n-th entry in the fibonacci series.
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//  fib(4) === 3

// Solutuion #1
//* Runtime Complexity is Linear -> O(n)
function fib(n) {
  const result = [0, 1];

  for (let i=2; i <= n; i++) {
    entry = result[i-1] + result[i-2];
    result.push(entry);
  }

  return result[n];
}

// Solution #2 - Recursive solution
function fib2(n) {
  if (n < 2) return n;
  
  return fib2(n-1) + fib2(n-2);
}

// Solution #3 - Momoised Recursive solution
//! Below is very important! -> See the [slowFib] and [fastFib]
function memoize(fn) {
  const cache = {};
  return (...args) => {
    console.log('cache :> ', cache);
    if (cache[args]) {
      return cache[args];
    }

    //! Below we use apply, because [ars] -> [50]
    //! If we use fn(args) it is like calling slowFib([50]), so we have to call it like this below
    //* const result = fn(...args); // <- this is working
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) { //! <- [slowFib]
  if (n < 2) return n;
  
  return fastFib(n-1) + fastFib(n-2); //! <- [fastFib]
}

var fastFib = memoize(slowFib); //! <- See [slowFib] and [fastFib]


// Spolution #4
function fib4(n) {

  if (n < 2) return n;
  
  return fib2(n-1) + fib2(n-2);
}
// My Solution for Memoized Recursive Fib
var cache = {};

function fib4(n) {
  if (n < 2) return n;
  if (cache[n]) return cache[n];
  var res = fib4(n-1) + fib4(n-2);
  cache[n] = res;
  
  return res;
}

fib4(50);

//* Data Structure is way of organising our program in order to add, edit or delete 
//* items with optimized runtime complexity
//! JS natively implement some Data Structures


/* ==========================================
### QUEUE
==============================================*/
//  Make data structure with methods [add] and [remove]
//  Queue is - First In First Out -> Shift Unshift -> FIFO

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

/* ==========================================
### WEAVE
==============================================*/

//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2); => [1, 2]
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There'); => ['Hi', 'There]
//    const q = weave(queueOne, queueTwo); => [1, 'Hi', 2, 'There']
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

function weave(sourceOne, sourceTwo) {
  let q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}


/* ==========================================
### STACKS
==============================================*/
//  Stack => Push and Pop => FILO

class Stack {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}


/* ==========================================
### QUEUE FROM STACK
==============================================*/
//* Implement a Queue datastructure using two stacks.
//* Queue should implement the methods 'add', 'remove', and 'peek'.
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class QueueFromStack {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop()) 
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop()) 
    }

    return record;
  }
}


/* ==========================================
### LINKED LIST
==============================================*/

//* [Head Node3]next->[Node2]next->[Tail Node1]next->Null

const simpleNode = {
  data: 123,
  next: null,
};

const simpleNode2 = {
  data: 456,
  next: simpleNode,
};

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//* Linked List Object will have a bunch of methods making working with Nodes very easy 
//! LinkedList is a CRAWER - it is pointing to one [Node] and is crawling the [List]
class LinkedList {
  constructor() {
    this.head = null; //? head has a reference to [FIRST] Node
  }

  //* add element as a Head Node
  insertFirst(data) { //! same as ==>> insertAt(data, 0)
    this.head = new Node(data, this.head); //* update HEAD reference to currently created node
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() { //! same as ==>> getAt(0) 
    return this.head;
  }

  getLast() { //! same as ==>> getAt(size() - 1)
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null; //! there is possibility that the list is floating around in Memory... but we dont care
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next; //! if that is the last Node. Linked List will have only One Node and Node.next -> null. So our Linked List will point to NULL. 
  }

  removeLast() {
    //! deal with empty List
    if (!this.head) return;

    //! List is with length === 1
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast(); 
    //! deal with empty List
    if (last) {
      last.next = new Node(data);
    } else {
      //! The cain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    //! Below check is not necessary, because if node === 0, we NOT enter the loop, and will return [NULL]
    // if (!this.head) {
    //   return null;
    // }

    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) return node;

      ++counter;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    //! Edge cases:
    //! 1) No NODES
    //! 2) Remove at index 0 -> No previous Node
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next; //* this will work even for just one Node, since [.next]=> null (will point to null, so it will work)
      return;
    }
    //? Below we will use getAt(index) in order to get the previous Node
    const previous = this.getAt(index - 1);
    //! 3) Index is out of bounce
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    //* Inserting at first position
    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    //! || this.getLast() -> here for index OUT of BOUNCE, if getAt(index) === undefined, we will insert at the end of the list
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.interator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = next;
    }
  }

  //* Above will work as this
  //* const list = new List();
  //* list.insertLast(1);
  //* list.insertLast(2);
  //* list.insertLast(3);
  //* list.insertLast(4); 

  //* for (let node of list) {
  //*   node.data += 10;
  //* }
}

function * numbers() {
  let res = 1 + 1;
  return 20 + (yield res); //! [return 20 + ...] -> this part is never accessed BUT, see below
}

let generator = numbers();
generator.next(); //* {value: 2, done: false}
generator.next(); //* {value: NaN, done: true} => [NaN] might come because we try to add [20] to [res, but res === undefined]

//! BUT if we instead above call like this:
generator.next(); //* {value: 2, done: false}
generator.next(10); //* {value: 30, done: true} => here we insert a value!
//! When we pass a value to the generator we replace [yield] with the passed value
//! That is why we receive 30 the second time 

//* Nested Generators
function * list1() {
  yield 1;
  yield 2;
  yield * list2(); //* <= pass another generator
  yield 6;
  yield 7;
}
function * list2() {
  yield 3;
  yield 4;
  yield 5;
}

let listsGen = list1();

for (let val of listsGen) {
  console.log('val => ', val);
}

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  * printValues() {
    yield this.value; //* first call -> yields this
    for (let child of this.children) { //* second call will delegate to other generators
      yield * child.printValues(); //* Recursive behaviour
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3),
]);

for (let value of tree.printValues()) {
  console.log('value >> ', value);
}

/* ==========================================
### LINKED LIST - WITH ITERATORS
==============================================*/


