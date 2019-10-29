Assignment Requirements (You must use recursion to solve these problems).

For each of these exercises, without using any code, you are expected to identify the following:

What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?

Start each problem by understanding the problem and coming up with some sample input and output. In some of the drills we have 
provided sample inputs and outputs for your convenience.

1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. 
That number should be the number of sheep you have. The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence

2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 
(positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n 
natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  
5. String Splitter
Write a recursive function that split a string based on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]

6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which 
each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence 
looks as follows: 1, 1, 2, 3, 5, 8, 13.

7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that
number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one possible exit from the Maze. Write a recursive 
function that will help you find a possible exit though the maze
You can use the following mazes to test your program.

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
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner 
and the exit is indicated by e.  Passing through a blocked cell as well as passing though a cell that you have already passed before 
are forbidden.
For the above maze, a possible exit can be RRDDLLDDRRRRRR

9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exits through the Maze.  
The program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".
Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", 
"sta", "tas", and "tsa".

11. Organization Chart
Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

