let links = document.querySelectorAll(".header .container .links li a");

links.forEach((li) => {
  li.addEventListener("click" , (e) => {
    links.forEach((li) => {
      li.classList.remove("active");
    })
    e.target.classList.add("active");
  })
})
// create looking function drob down more links
let drobdown = document.querySelector(".links li:last-of-type");
let ul;
drobdown.addEventListener("click" ,() => {
  // create list links 
  // add value ul
  ul = document.createElement("ul")
  // create li 
  let li_one = document.createElement("li")
  let li_two = document.createElement("li")
  let li_tree = document.createElement("li")
  // create links = a
  let a_one = document.createElement("a")
  let a_two = document.createElement("a")
  let a_tree = document.createElement("a")
  // create text node
  let text_one = document.createTextNode("link")
  let text_two = document.createTextNode("link")
  let text_tree = document.createTextNode("link")
  // append ul in page
  drobdown.appendChild(ul);
  // append li in ul 
  ul.appendChild(li_one)
  ul.appendChild(li_two)
  ul.appendChild(li_tree)
  // append a in li
  li_one.appendChild(a_one)
  li_two.appendChild(a_two)
  li_tree.appendChild(a_tree)
  // append text in a  
  a_one.appendChild(text_one)
  a_two.appendChild(text_two)
  a_tree.appendChild(text_tree)
})

document.body.addEventListener("click",(e) => {
  if(e.target.className !== 'active'){
    ul.remove()
  }
})