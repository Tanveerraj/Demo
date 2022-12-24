let form=document.createElement("form")
let username=document.createElement("input")
let password=document.createElement("input")
let button=document.createElement("button")
let hr1=document.createElement("hr")
let hr2=document.createElement("hr")

let section=document.createElement("section")



username.type="text"
username.placeholder="username"
password.type="password"
password.placeholder="password"
button.type="submit"

button.innerText="login"
let body=document.querySelector("body")
body.prepend(section)
section.append(form)

form.append(username)
form.append(hr1)
form.append(password)
form.append(hr2)
form.append(button)