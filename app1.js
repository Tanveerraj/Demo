let header=document.createElement("header")
let body=document.querySelector("body")
body.prepend(header)

let span1=document.createElement("span")
let span2=document.createElement("span")
let span3=document.createElement("span")
let span4=document.createElement("span")
let span5=document.createElement("span")
header.append(span1)
header.append(span2)
header.append(span3)
header.append(span4)
header.append(span5)

span1.innerHTML="HOME"
span2.innerHTML="LOGIN"
span3.innerHTML="ABOUT"
span4.innerHTML="CONTACT"
span5.innerHTML="SIGN IN"

let hr=document.createElement("hr")

let section=document.createElement("section")
body.append(section)
let h1=document.createElement("h1")
