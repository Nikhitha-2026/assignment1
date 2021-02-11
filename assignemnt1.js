// What will the code below output to the console and why ?
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);
console.log(1+"2"+"2");
//o/p:122;while performing arthimatic operations js considers the strings as numbers and concatinates them instead of adding the numbers 
console.log(1 + +"2" + "2");
//output:32 ;it ads the 1st 2 numbers and considers the last number as string and concatinates it 
console.log(1 + -"1" + "2");
//output:02;it asubtracts  the 1st 2 numbers and since  the last number as string and concatinates it
console.log(+"1" + "1" + "2");
//output:since all the numbers are delcared in double quotations considers it as strings and contactinates them

console.log( "A" - "B" + "2");
//o/p:NaN2 arthimatic operation other then numbers results NaN(Not a number ) as 2 is considred as string it concatinates with Nan
console.log( "A" - "B" + 2);
//o/p:NaN arthimatic operation other then numbers results NaN(Not a number ) 