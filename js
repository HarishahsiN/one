//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

const arr = [1,5,6,1,0,1];
const findSumPair = (arr, value) =>{
  let sumsLookup = {};
  let output = [];
  for (let i = 0; i<arr.length; i++){
    let targetVal = value - arr[i];
    if (sumsLookup[targetVal]){
      output.push([arr[i], targetVal]);
    }
    sumsLookup[arr[i]] = true;
  }
  return output;
}
console.log(findSumPair(arr,6));
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Q.2 Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function customReverse(originalArray) {

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
}
let myArray = [1, 2, 3, 4, 5];

customReverse(myArray);

console.log(myArray);
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q.3 Write a program to check if two strings are a rotation of each other?

function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {
     
        
        if(s1[i] != s2[(indexFound + i) % Size])return false;
         

    }
 
    return true;
}
 

let s1 = "abcd";
let s2 = "cdab";
 
if(s1.length != s2.length)
{
    console.log("s2 is not a rotation on s1");
}
else
{
     
    let indexes = []; 
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }
 
    let isRotation = false;
 
   
    for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);
 
        if(isRotation)
            break;
    }
 
    if(isRotation){
      console.log("s2 is rotation of s1")
    }
    else{ 
      console.log("s2 is not a rotation of s1")
}}
---------------------------------------------------------------------------------------------------------------------------------------------
//Q.4 Write a program to print the first non-repeated character from a string?

var str = "abcdbca";
for (let i=0; i<str.length; i++){
  if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
    console.log(str.charAt(i));
    break;
  }
}
--------------------------------------------------------------------------------------------------------------------------------------------------
//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function toh(n,src,des,aux)
{
  if(n>=1)  
  {
    toh(n-1,src,aux,des);
    console.log("Move disk from tower ",src,"to tower",des);
    toh(n-1,src,des,aux);
  }
  return;
  

}
toh(2,"A","B","C");
-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function isOperator (x){
  switch (x){
    case '+' :
    case '-' :
    case '/' :
    case '*' :
      return true;
  }
  return false;
}
function postToPre (post_exp){
  let s = [];
  let length = post_exp.length;
  for (let i=0; i<length; i++){
    if (isOperator(post_exp[i])){
      let op1 = s[s.length -1];
      s.pop();
      let op2 = s[s.length -1];
      s.pop();
      let temp = post_exp[i]+op2+op1;
      s.push(temp)
    }
    else{

      s.push(post_exp[i]+"");
    }
  }
  let ans = "";
  while (s.length>0)
    ans += s.pop();
  return ans;
}
let post_exp = "ABC/-AK/L-*";
console.log("prefix :" +postToPre(post_exp))
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 //Q.7 Write a program to convert prefix expression to infix expression.

function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
 
    function convert(str)
    {
        let stack = [];
        let l = str.length;
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
               
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
               
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    console.log("Infix : " + convert(exp));
-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr)
{
         
    let stack = [];
  
    
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
              
            
            stack.push(x);
            continue;
        }     
        
        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
  
    
    return (stack.length == 0);
}
let expr = "([{}])";
  

if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q9. Write a program to reverse a stack.

let st = [];
 
function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
            let a = st.pop();
            insert_at_bottom(x);
 
            st.push(a);
    }
     
     
}
 
function reverse()
{
    if(st.length > 0)
        {
             
            let x = st.pop();
            reverse();
              

            insert_at_bottom(x);
        }
}
 
st.push('1');
st.push('2');
st.push('3');
st.push('4');
 
console.log("Original Stack<br>");
 
console.log(st.join(" ")+"<br>");
 
reverse();
 
console.log("Reversed Stack<br>");
 
console.log(st.join(" "));

//Q10. Write a program to find the smallest number using a stack.

const arr1 = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = arr1.reduce((a, b) => Math.min(a, b))
console.log(min)
