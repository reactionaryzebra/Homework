/* 1) Interpolation is when placeholders are used to represent variables.  For example you may want to include a variable
number of tacos that someone ate in an alert.  The interpolated string might be: `Slow down! You just ate ${numTacosEaten} tacos.  You are bound to get sick`.  Concatenation uses the + operator to add a string and a stringified variable to make a longer string.  For example the same message may be written 'Slow down! You just ate ' + numTacosEaten + ' tacos. You are bound to get sick.'
2) DRY stands for Don't Repeat Yourself.  It's an important mantra in coding because keeping our code succinct and readable allows others to both read and work on our code.  It also minimizes risk for errors caused by over-complication.  Storing variables and creating functions allow us to keep our code DRY.
3) Declaring a variable typically refers to the first time it is created within code.  Variables are typically declared at the top of a code file.  Assigning value can happen at any point after the variable is declared.  To put it another way, a variable is first declared (created) and then given a value (assigned).  We define a variable by assigning it a value.  Any variable which has been declared, but not given a value is said to be undefined.
4) const should be used when the value of that variable is not going to be changed.  let should be used any time that variable's value will change.  For example it may be useful to declare a variable Pi as equal to the full value of Pi to 10 decimal places (this saves you having to rewrite 11 numbers every time you want to use it).  Since the value of Pi does not change it would be declared with const.
5) A parent directory is the one that holds another directory, or other files, or both.  It is one level "up" from the "child" directory.
6) Typing 'man' and then the command will produce the manual entry for that command.
7) Tab completion is when you start typing something and pressing tab will auto-complete the name of the path or file you had started to type.  This allows us to enter long directory paths or file names with 2 or 3 keystrokes instead of maybe 10 or 11.


Part 2:

1) <
2) >
3) ===
4) + , ===
5) * , ===
6) ===
7) ==

Part 3:
1) This will produce an infinite loop.  true is an inherently truthy value and so the while condition will always evaluate to true, keeping the loop running infinitely.
2) This loop is NOT infinite.  The loop will run one time.  After the first iteration the value of runProgram becomes falsey, which means when the while condition is evaluated the second time, it will evaluate to false and the loop will not run.
*/

//Declares variable letters and assigns the value "A"
let letters = "A";
//Declares variable i and assigns the value 0
let i = 0;
//Creates a loop who's contents will be executed as long as i is less than 20
while (i < 20) {
  //Adds the value "A" to the letters string
	letters += "A";
  //increases the value of i by 1
	i++;
}

console.log(letters);
//The loop will run 20 times and the output will be AAAAAAAAAAAAAAAAAAAAA

/* Part 4:
1) For loops and while loops both evaluate a statement and then run the code inside it.  A while loop will continue to run until the condition evaluates to false.  This makes it good to use when you are unsure of how many times you need to run the loop.  A for loop can be written to run a given number of times.
 */

 for(let j = 0; j < 1000; j++){
   console.log(j);
 };

 for (/*this part declares the variable that will be used as a counter in the function*/let i = 0;/*this part is tested at each iteration of the loop and stops when the condition evaluates to false*/ i < 100;/*This part increments the counter by one at the end of each iteration of the loop*/ i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}

for (let i = 999; i >= 0; i--){
  console.log(i);
};

for (let i = 1; i < 11; i++){
  console.log(`The value of i is: ${i} of 10`);
};
