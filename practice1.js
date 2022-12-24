function test(n)
{
    let coiunt=0;
    for(let i=2;i<=n-1;i++)
    {
        if(n%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        console.log("the number is prime");
    }
    else
    {
        console.log("not prime number");
    }
}
test(10)