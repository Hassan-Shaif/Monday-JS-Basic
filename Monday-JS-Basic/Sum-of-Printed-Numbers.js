//Write a program that will print all the numbers from 1 to 135 AND the sum
//of the numbers that have been printed so far. Your output should look similar to this:

//Number is: 0 Sum: 0

//Number is: 1 Sum: 1

//Number is: 2 Sum: 3

//Number is: 3 Sum: 6


//Pseudocode
//1-for loop to print numbers from 1 to 135
//2-add numbers to var called sum to print the sum of them


//code
var sum = 0;
for(var i =0;i<136 ;i++){
    sum+=i;
    console.log(` Number is ${i} : ${sum}`);
}


//diagram
//1-loop start with  numbers 1
//2- add the value of printed number which is 1 here to sum where sum=0;
//3-print the result of sum >result=1
//4-loop goes with  numbers 2
//5- add the value of printed number which is 2 here to sum where sum=1;
//6-print the result of sum >result=3
//7-loop goes with  numbers 3
//8- add the value of printed number which is 3 here to sum where sum =3 ;
//9-print the result of sum >result=6
//..................ezv