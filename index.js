// Import stylesheets
import './style.css';
// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
//
//examine the document object
// console.dir(document)

// document.title = 123;
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);

// console.log(headerTitle.innerText);
// headerTitle.textContent = 'hello'
// headerTitle.innerText = 'goodbye'

//inner html is used for adding tags element
// headerTitle.innerHTML = '<h3>hello</h3>';

// header.style.borderBottom = 'solid 3px #000'

// let items = document.getElementsByClassName('list-group-item');

// let li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(let i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = 'f4f4f4'
// }

//traversing the dom
//parent nodes
// let itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childnodes

// console.log(itemList.childNodes)
// line breaks,text

//without using line break
// console.log(itemList.children);

//first child
// console.log(itemList.firstChild)
//first element child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'hello 1'

//last child
// console.log(itemList.lastChild);
//last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 1';

//next siblings
// console.log(itemList.nextSibling);
//next element siblings
// console.log(itemList.nextElementSibling);

// previous siblings
// console.log(itemList.previousSibling);
//previous element siblings
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//create element
// let newDiv = document.createElement('div');

// add class
// newDiv.className = 'hello';

//add id
// newDiv.id = 'hello';

//add attr
// newDiv.setAttribute('title', 'hello Div');
// console.log(newDiv);

// create text node//
// let newDivText = document.createTextNode('hello world');

// add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

//events

// let button = document
//   .getElementById('button')
//   // .addEventListener('click', buttonClick);

// function buttonClick(e) {
//   console.log(e);

// console.log(e.target)
// console.log(e.target.id)
// console.log(e.target.className)

///client x is position on broswer window
// console.log(e.clientX);
///client x is position top down on broswer window
// console.log(e.clientY);
//client is from the broswer

// console.log(e.offsetX);
// console.log(e.offsetY);
//offset the actually element itself

// let button = document.getElementById('button');
// let button = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouse', runEvent);
// }

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// let iteminput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// iteminput.addEventListener('keydown', runEvent);
// iteminput.addEventListener('keyup', runEvent);

// iteminput.addEventListener('focus', runEvent);
// iteminput.addEventListener('blur', runEvent);

// function runEvent(e) {
//   console.log('EVENT TYPE: ' + e.type);

//   document.body.style.backgroundColor =
//     'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
// }

// form.addEventListener('submit', runEvent)

let form = document.getElementById('addform');
let itemList = document.getElementById('items');

function addItem(e) {
  e.preventDefault();
  form.addEventListener('submit', addItem);
  itemList.addEventListener('click', removeItem);
}
// get input value
let newItem = document.getElementById('item').value;
// create new li element
let li = document.createElement('li');

//add class
li.className = 'list-group-item';
// add text node
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);

let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    console.log(1);
  }
}
