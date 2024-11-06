//write a program to print numbers from -1 to -num without using >= operator
num=+prompt("enter a number:")
for(i=-1;!(i<=num-1);i--){
    console.log(i)
}

//write a program to print numbers from -num to -1 without using <= operator
num=+prompt("enter a number:")
for(i=num;!(i>=0);i++){
    console.log(i)
}

//write a program to print sum of even digits in a number
num=prompt("enter a number:")
evensum=0
for( i of num){
    if(i%2==0){
        evensum+=Number(i)
    }
}
console.log("evensum in "+num+" is :" +evensum)

//write a program to print sum of odd digits in a number
num=prompt("enter a number:")
oddsum=0
for(i of num){
    if(!(i%2==0)){
        oddsum+=Number(i)
    }
}
console.log("oddsum in "+num+" is:"+oddsum)