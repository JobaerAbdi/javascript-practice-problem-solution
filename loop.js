
/* Question No: 25 => আজকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
Answer : =>
var x = 1;
while(x <= 39){
    console.log(x);
    console.log('আজকে আমার মন ভালো নেই');
    x++;
}
*/



/* Question No: 26 => while লুপ কিভাবে কাজ করে?
Answer : =>
var i = 0;
while(i <= 39){
    console.log(i);
    i++;
}
*/



/* Question No: 27 => for লুপ কিভাবে কাজ করে?
Answer : =>
for(var i = 1; i <= 20; i++){
    console.log(i);
} 
*/




/* Question No: 28 => while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়?
Answer : =>
Infinity Loop Be Create.
*/



/* Question No: 29 => একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও?
Answer : =>
var number = 58;
while(number <= 98){
    console.log(number);
    number++
} */


/* Question No: 30 => একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও?
Answer : =>
for(var number = 412; number <= 456; number = number + 2){
    console.log(number);
} */



/* Question No: 31 => একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও?
Answer : =>
var number = 581;
while (number <= 623){
    console.log(number);
    number = number + 2;
}
 */



/* Question No: 32 =>while আর for loop এর মধ্যে পার্থক্য কি ?
Answer : =>
The difference between for loop and while loop is that for allows initialization, condition checking and iteration statements on the top of the loop, whereas while only allows initialization and condition checking at the top of the loop.
 */



/* Question No: 33 => তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। ?
Answer : =>
var learn = ['html', 'css', 'bootstarp', 'tailwind'];
for(var i = 0; i < learn.length; i++){
    var element = learn[i];
    console.log(element);
} 
*/



/* Question No: 34 => তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও ?
Answer : =>
var allMobile = ['nokia', 'motrolla', 'samsung', 'symphoni', 'oppo'];
var x = 0;
while (x < allMobile.length){   
    var mobile = allMobile[x];
    console.log(mobile);
    x++;
}
*/




/* Question No: 35 => একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও?
Answer : =>
for(var number = 30; number <= 86; number++){
    if(number > 44){
        break;
    }
    console.log(number);
} 
*/




/* Question No: 36 => তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।?
Answer : =>
var booksPrice = [150, 250, 170, 190, 230, 330, 120, 520, 180];
for(var x = 0; x <= booksPrice.length; x++){
    var singleBookPrice = booksPrice[x];
    if(singleBookPrice > 200){
        continue;
    }
    console.log(singleBookPrice);
} 
*/