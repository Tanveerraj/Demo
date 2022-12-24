// function display()
// {
//     let div=document.querySelector("div")
//     div.style.display="block";
//     setTimeout(()=>
//     {
//         div.style.display="none";
//     },5000)
    

let count=0;
function m()
{
    console.log(count++);
}
setInterval(m,5000)
