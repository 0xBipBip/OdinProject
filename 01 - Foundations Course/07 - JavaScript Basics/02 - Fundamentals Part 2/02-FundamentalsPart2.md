Introduction
There are a few extremely common types of data that you will encounter in JavaScript, and these lessons on fundamentals will give us a really strong foundation in all of them. Before we start digging deep, however, this article (https://javascript.info/types) will give you a quick overview of the most common ones.

Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.
    Name the eight data types in JavaScript.
    Understand the difference between single, double, and backtick quotes.
    Embed a variable/expression in a string.
    Understand what a method is.
    Name the three logical operators.
    Understand what the comparison operators are.
    Understand what conditionals are.
    Understand what nesting is.
    Understand what truthy and falsy values are.

Strings
Depending on what kind of work you’re doing, you might end up working more with pieces of text rather than numbers. A string is simply a piece of text… and is a fundamental building block of the language.

    1. Read and code along with yet another MDN tutorial (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) on the topic.
    2. Go through this lesson (https://www.w3schools.com/js/js_string_methods.asp) to learn a bit more about what you can do with strings… be sure to take a peek at the String Reference (https://www.w3schools.com/jsref/jsref_obj_string.asp) page near the bottom, and do the exercises at the end!
    3. Vocabulary time: a method is a bit of functionality that is built into the language or into specific data types. In the previous W3Schools exercise (https://www.w3schools.com/js/js_string_methods.asp), you learned a few methods that can be used on strings, such as replace and slice. An exhaustive list of methods that can be used on strings can be found here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

Conditionals
Now it’s time for the fun stuff… So far we haven’t done much with our programming that you couldn’t do with simple math skills. Sure, we’ve told our computer how to do the math, so that makes it quicker, but the essence of programming is teaching the computer how to make decisions in order to do more involved things. Conditionals are how we do that.

    1. Step one in learning about conditionals is making sure you have a good grasp on comparisons (http://javascript.info/comparison).
    2. This tutorial (https://www.w3schools.com/js/js_if_else.asp) is a great first glance at conditionals in JavaScript.
    3. This tutorial (http://javascript.info/logical-operators) will teach you about logical operators. A little heads up regarding this reading’s tasks; there will be questions where you see alert() (with a number or string inside of the parenthesis), what’s happening here will be discussed later in the curriculum. Some of the answers may not make sense now but they are accurate and will come to be understood as you progress in the curriculum. Don’t worry too much about it now!
    4. This article (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) reinforces the concept and provides several interesting examples of how you could use it building websites.
    5. This article (http://javascript.info/ifelse) covers the same basic concept (read through it as a review!) and - more importantly - offers the usual ‘tasks’ at the bottom of the page!
    6. This article (https://javascript.info/switch) teaches you about the switch statement, which comes in handy when you have multiple conditions.

Assignment
To give you a good bit of practice, we have created some replit.com exercises for you to play with. We believe that it’s best to practice programming on your own computer, rather than in an online environment, but we’ll get to that soon enough.

Be sure to do the lessons in order presented here. Pressing “run” at the top will run the code. Read all directions, watch the terminal, and read all the errors. Don’t forget to use ‘console.log’ extensively.

To get started, create a free replit account and click “Fork” or “Remix” in order to have access to the exercises. Note: Feel free to browse the files on the left column in order to gain familiarity with it.

Exercise 1
In this exercise, you will be working out of the file called troubleshooting.js

===== Troubleshooting =====
The function below should log the number 2, however it does not, see if you can fix it!
Be sure to fix it in the spirit of the code, do not hard code the result.

function troubleshooting() {
	const a = 1;
	const b = 1;
	let result;
	result = "a" + "b";
	return result;
}

Exercise 2
You will be working out of script.js, and you will use the console in the ‘webview’ pane to check your work. To access the console, click the wrench icon, which is located on the right side of the address bar within the ‘webview’ pane.

The code below tells the browser to ask you for a number then if that number is `6`, it returns `true` otherwise it returns `false`
Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10

number = Number(prompt("enter a number"));
function numberChecker() {
	if(number === 6) {
		return true;
	} else {
		return false;
	}
}

Exercise 3
You will be working out of math.js

Lets do some math!
Some rules first:
- Replace the strings to the right of the = with the math expression they describe.
- Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out

const a = "one plus eight"
const b = "22 times three"
const c = "the *remainder* of 5/4"
const d = "the variable 'a' minus 17"
const e = "the sum of the previous four variables"

Exercise 4
You will be working out of follow.js

- After each step, run the code to make sure your code still works! 
- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

*/

// code to be deleted
const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

/*

  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1948
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 17 years old."

*/

//===== Your code goes here =================


/*

  ===== Step 3: =====
  Now that you have the code working again, let's go back over it and, using the instructions below, edit it to make it easier to read.

  ---------------------------------------------------------------

  1. Go to "Testing your code" below

  2. Comment out the lines under "Test Step 2"

  3. Uncomment the lines under "Test Step 3" (Notice the difference between them)

  4. Go back to your code and create 2 new variables: "fullName" and "age"

  Do NOT simply type the full name and age into the new variables. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

  5. Edit the greeting string to use fullName and age instead of the other 4 variables. (the greeting should then look something like: "Hello, my name is " + fullName)

  6. Press 'Run' to ensure your code still works (output should be unchanged)

  ---------------------------------------------------------------

  ===== Testing your code =====
  - Do NOT edit this section until told to do so. 

  - Make sure one and only one of these test steps are commented out at a time

*/

// Test Step 2: 

module.exports = {
  testGroup: "a",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}


// Test Step 3: (Don't forget to comment out lines under Test Step 2)

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }


Additional Resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

Regular expressions, commonly known as regex, are a tool that matches or locates patterns in strings for string validation. Although it shouldn’t be your immediate solution this early on, you can still use this resource to understand how websites know that myemail@com isn’t a valid email address. On top of that, other solutions to filter out strings exist, and regex is considered a slow operation.

The Net Ninja’s Regular Expressions Tutorial.
When to avoid regular expressions.
Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What are the eight data types in JavaScript?
Which data type is NOT primitive?
What is the relationship between null and undefined?
What is the difference between single, double, and backtick quotes for strings?
What is the term for joining strings together?
Which type of quote lets you embed variables/expressions in a string?
How do you embed variables/expressions in a string?
How do you use escape characters in a string?
What is the difference between the slice/substring/substr string methods?
What are the three logical operators and what do they stand for?
What are the comparison operators?
What are truthy and falsy values?
What are the falsy values in JavaScript?
What are conditionals?
What is the syntax for an if/else conditional?
What is the syntax for a switch statement?
What is the syntax for a ternary operator?
What is nesting?