//write a program to find the length of the last word in the string(i.e Example 1, Example 2)
function lastWordlength(s)
{  
//Trims the given string with spaces at first and last then splits the string into array.
//filter(Boolean) removes empty strings in an array
let trimmedArr=s.trim().split(" ").filter(Boolean)
//length-1 of the trimmedArr is the index of last word in an array assigned to variable i
let i=trimmedArr.length-1
//assigned the last word in an array to variable result
let result=trimmedArr[i]
//assigned the length of the last word in an array to variable lastWordlength
let lastWordlength=trimmedArr[i].length
//prints the result
console.log("The last word is "+result+" with length "+lastWordlength)
}
lastWordlength("Hello World")
lastWordlength("fly me  to the moon ")
lastWordlength(" Today        is a good day   ")

//Write a program to find the anagram of two strings
function isAnagram(s1,s2)
{
let str1=s1.toLowerCase().replaceAll(" ","").split("").sort().join("")
let str2=s2.toLowerCase().replaceAll(" ","").split("").sort().join("")
if(str1===str2)
{
    console.log("True")
}
else
{
    console.log("False")
}
}
isAnagram("Listen","Silent")
isAnagram("Duet","Diet")


