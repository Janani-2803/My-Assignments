function reverseString(str)  //Function to reverse a string
{
    let reversed=""  //to store the reversed variable result
    let y=str.toLowerCase().replaceAll(" ","")  //converts input string into lowercase and ignores spaces if any
    let x=y.split("")  //Splits the converted lowercase and removed space string into characters
    for(let i=y.length-1;i>=0;i--)
    {
        reversed=reversed.concat(y[i])    //Loops and reverse the string and stores to reversed variable
    }
    console.log("\nThe user input string "+str) //to print the original string given by user
    console.log("\nThe user input after process "+y) // to print the processed input string to lowercase and without spaces
    console.log("The new reversed string is "+reversed) // to print the reversed string
    return reversed //return the reversed result
}
function isPalindrome(str) //Function to check the reversed string is palindrome or not
{
    let y=str.toLowerCase().replaceAll(" ","") //input string after changing to lowercase and removing extra spaces
    let result=reverseString(str) //Calls the function reverseString(str) to reverse the string
    if(result===y) //if the reversed string and input string(after tolowercase and space removal) are same 
    {
        console.log("\nThe given string is a palindrome")
    }
    else
    {
        console.log("\nThe given string is not a palindrome")
    }
}
isPalindrome("MaDAm ")