
/*1. Exercise 1
  User Profile: Create a program that defines three variables for a social media profile: a user's username (string), age (number), and isOnline (boolean). Then, output a welcome message using a template literal (e.g., "Welcome, Astrid! You are 28 years old and currently online.").*/
const username = "Astrid";
const age = 32;
const isOnline = true;

//console.log(`Welcome, ${username}! You are ${age} years old and currently ${isOnline ? "online" : "offline"}.`);

/*2. Exercise 2
  Shopping Receipt: Create two variables price and quantity with values 150 and 3. Calculate and log the subtotal. Then, calculate the tax (25% of subtotal) and the final total.*/
const price = 150;
const quantity = 3;

const subtotal = price * quantity;

const taxRate = 0.25;
const tax = subtotal*taxRate;

const total = subtotal + tax;
/*
console.log(`Subtotal: ${subtotal} `);
console.log(`Tax (25%): ${tax}`);
console.log(`Final Total: ${total}`);*/


/*3. Exercise 3
  Data Type Check: You receive data from an API. Predict and log the output of the following comparisons to understand how JavaScript handles types:

  10 == "10"
  10 === "10"
  undefined == null
  undefined === null Explain in a comment why we should prefer === for checking user IDs or passwords.*/

/*console.log(10 == "10");      // true (string "10" converted to number)
console.log(10 === "10");     // false (number vs string)
console.log(undefined == null);   // true (both are empty values)
console.log(undefined === null);  // false (different types)*/

/*4. Exercise 4
  Age Verification: Write a script for a movie theater. Check if a variable visitorAge is between 12 and 18 (inclusive) to qualify for a "Teen Discount" using the && operator. Log true or false.*/

const visitorAge = 17;
const isTeen = visitorAge>=12 && visitorAge<=18;

//console.log(isTeen);

