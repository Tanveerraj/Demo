let s=["apple","banana","orange","kiwi"]
for(let i=0;i<=s.length-1;i++)
{
    if(s[i]=="mango")
    {
        console.log(i);
        break;
    }
    else
    {
        s.push("mango");
        break;
    }
    
}
console.log(s);