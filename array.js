
/* Question No: 13 => Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় ?
Answer : =>
An array is a collection of similar data elements stored at contiguous memory locations. It is the simplest data structure where each data element can be accessed directly by only using its index number.
The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.
var numbers = [15, 85, 78, 37, 82, 97];
 */



/* Question No: 14 => Array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে  ?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
var numbersElement = numbers.length;
console.log(numbersElement); 
*/



/* Question No: 15 =>  array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়?
Answer : => 
var numbers = [15, 85, 78, 37, 82, 97];
        index = 0   1   2   3   4   5
*/



/* Question No: 16 => কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়  ?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
       index = 0   1   2   3   4   5
var result = numbers.indexOf(100);
console.log(result); = -1;  
*/



/* Question No: 17 => কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
var findElement = numbers[3];
console.log(findElement); 
*/




/* Question No: 18 =>  কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে?
Answer : => 
var numbers = [15, 85, 78, 37, 82, 97];
numbers[0] = 100 ;
console.log(numbers); 
*/
 



/* Question No: 19 => একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
var indexNumbers = numbers.indexOf(82);
console.log(indexNumbers); 
*/
 



/* Question No: 20 => ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? 
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
var findElement = numbers[7];
console.log(findElement); This index number is no found on elements in this array. */
 



/* Question No: 21 => কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
numbers.push(500);
console.log(numbers);
var numbers = [15, 85, 78, 37, 82, 97];
numbers.pop();
console.log(numbers); 
*/




/* Question No: 22 => কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?
Answer : =>
var numbers = [15, 85, 78, 37, 82, 97];
numbers.unshift(100);
console.log(numbers);
var numbers = [15, 85, 78, 37, 82, 97];
numbers.shift();
console.log(numbers); 
*/




/* Question No: 23 => এইগুলার মানে কি?: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
Answer : =>
( > )   = Greater Than.
( < )   = Smaller Than.
( == )  = Double Equals.
( != )  = Single Not Equals.
( <= )  = Smaller Than or Equals.
( >= )  = Greater Than or Equals.
( === ) = Triple Equals.
( !== ) = Double Not Equals.
( && )  = And.
( ।। )   = Or.
*/




/* Question No: 24 => তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। ?
Answer : =>
var amount = 80000;
var amount = 60000;
var amount = 40000;
var amount = 20000;

if(amount < 100000 && amount >= 80000){
    console.log('I will buy Mac Laptop');
}

else if(amount < 80000 && amount >= 60000){
    console.log('I will buy Gaming Laptop');
}

else if(amount < 60000 && amount >= 40000){
    console.log('I will buy Lenovo yoga Laptop');
}

else if(amount < 40000 && amount >= 20000){
    console.log('I will buy old Laptop');
}

else{
    console.log('I will buy only Mobile');
}
 */



