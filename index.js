//Counting Sheep
//Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
console.log('Counting Sheep')
let num = 3;
function sheep(num){
  //base
  if(num == 0){
    console.log("All the sheep jumped over the fence");
  }
  //general
  else{
  console.log(`${num}:Sheep jumped over the fence`);
  sheep(num - 1);
  }
}

sheep(num);

//Power Calculator
//Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
console.log('Power Calculator')

function powerCalculator(baseInt, exp){
  if(exp < 0){
    return 'exponent should be greater than or equal to 0'
  }
  if(exp === 0){
    return 1;
  } 
    return baseInt * powerCalculator(baseInt, exp - 1)
}
console.log(`${powerCalculator(10, 2)}`)
console.log(`${powerCalculator(10,-2)}`)

//Reverse String
//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
console.log('Reverse String');

reverseString = (x) =>{
  if(x === ''){
    return '';
  }

  return reverseString(x.slice(1)) + x.charAt(0)
}
console.log(reverseString('thisIsAwesome'))

//nth Triangular Number
//Calculate the nth triangular number. 
//A triangular number counts the objects that can form an equilateral triangle. 
//The nth triangular number is the number of dots composing a triangle with n dots on a side, 
//and is equal to the sum of the n natural numbers from 1 to n. 
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//nth number === x[(n-1)] + n
console.log('Triangle Number')
function triangleNumber(n){
  if(n === 1){
    return 1;
  }
  return n + triangleNumber(n-1)

}
console.log(triangleNumber(7))

//String Splitter
//Write a recursive function that split a string based on a separator 
//(similar to String.prototype.split). Don't use JS array's split function to solve this problem.Input: 02/20/2020 Output: ["02", "20", "2020"] 
function func() {
var str = '02/20/2020.'
var array = str.split('/').join('",');
console.log(array);
}
func ();


//Fibonacci
console.log('Fibonacci')
//Write a recursive function that prints the Fibonacci sequence of a given number. 
//The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
//For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.


fibonacci=(num)=>{
  if(num <= 1){
    return num
  }
  return fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(7))

//Factorial
console.log("Factorial")
//Write a recursive function that finds the factorial of a given number. 
//The factorial of a number can be found by multiplying that number by each number between itself and 1. 
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

factorial=(n)=>{
  if(n === 1){
    return 1
  }
  return n * factorial(n-1)
}
console.log(factorial(6))

//Find a way out of the maze
console.log('Escape the maze')
//You have entered a Maze and need to find your way out of it. 
//There are more than one possible exit from the Maze. 
//Write a recursive function that will help you find a possible exit though the maze

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze) {
  
  this.maze = maze;

  this.traverse = function(column, row) {
    console.log('D')
      if(this.maze[column][row] == 2) {
          console.log("We solved the maze at (" + column + ", " + row + ")");
      } else if(this.maze[column][row] == 1) {
          console.log("At valid position (" + column + ", " + row + ")");
          this.maze[column][row] = 9;
          if(column < this.maze.length - 1) {
            console.log('R')
              this.traverse(column + 1, row);
          }
          if(row < this.maze[column].length - 1) {
            console.log('D')
              this.traverse(column, row + 1);
          }
          if(column > 0) {
            console.log('L')
              this.traverse(column - 1, row);
          }
          if(row > 0) {
            console.log('U')
              this.traverse(column, row - 1);
          }
      }
  };

};
escape(mySmallMaze)
console.log('anagrams')
function anagrams(prefix, str) {
  if (str.length <= 1) {
      console.log(prefix + str);
  }
  else {
      for (let i = 0; i < str.length; i++) {
          const current = str.substring(i, i + 1);
          const before = str.substring(0, i);
          const after = str.substring(i + 1);
          anagrams(prefix + current, before + after);
      }
  }
};

anagrams('', 'east')

//Organization Chart
//Write a recursive function that prints the following organization chart. 
//Your output should be as shown below with proper indentation to show the hierarchy. 
//You may store the org chart in an object and send that as an input to your program.
console.log('org chart')
const org = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organize(org, boss) {
  let node = {};

  org
    .filter(item => item.boss === boss)
    .forEach(item => node[item.id] = organize(org, item.id));
  return node;  
}

console.log(JSON.stringify(organize(org, null)));

//input: a number
//output: a binary number
//recursion input: num/2
//recursion output: num either 1 or 0

console.log('binary')
function binary(num) {
  if (num === 0) {
      return '0';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  if (dividedNum === 0) {
      return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
};

console.log(binary(25));