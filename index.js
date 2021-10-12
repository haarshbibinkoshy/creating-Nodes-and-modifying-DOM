//parent node
let itemList=document.querySelector(`#items`)
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor=`#f4f4f4`


//parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor=`#f4f4f4`

//childNodes
// console.log(itemList.childNodes);

 //children
// console.log(itemList.children);
// console.log(itemList.children[1])

//first child
 
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent=`hello 1`

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent=`hello 4`

//nextsibling

// console.log(itemList.nextSibling);

//nextElemnetSibling

// console.log(itemList.nextElementSibling);

//prevsibling
// console.log(itemList.previousSibling);

//preveousSiblingElemnt
// console.log(itemList.previousElementSibling);

//createElement

let newDiv=document.createElement("div");
newDiv.className=`hello`
newDiv.id=`hello 1`
//setAttribute
newDiv.setAttribute(`title`,`hello div`)
//create text node
let newDivText=document.createTextNode(`hello world`)
//appendChild
newDiv.appendChild(newDivText)
let container=document.querySelector(`header .container`)
let h1=document.querySelector(`header h1`)
container.insertBefore(newDiv,h1)
console.log(newDiv);
//inserting before Item 1
let firstList=itemList.firstElementChild
itemList.insertBefore(newDiv,firstList)