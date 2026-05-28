function numbertype(a)
{  
let num=""
if(a<0)
    num=a+" is Negative"
else if(a>0)
    num=a+" is Positive"
else
    num=a+" is Neutral"
return num
}
console.log(numbertype(158))