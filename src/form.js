/* Cahnge class list to a Element
 * element for parameter */
const changeClass = (ele, decision) => {
  if (decision) {
    ele.classList.toggle('active')
  } else {
    ele.classList.remove('active')
  }
}

/* Get Element principal */
let elementDOMForPreview = document.getElementById('preview')

/* Get btn 'remove' */
elementDOMForPreview.lastElementChild.lastElementChild.addEventListener('click', () => {
  elementDOMForPreview.firstElementChild.innerHTML = '' //Reset content to element
  storegeCustom.pop() // do a reset to storageCustom
  changeClass(elementDOMForPreview, 0)
})

/* Get btn 'update' */
elementDOMForPreview.lastElementChild.firstElementChild.addEventListener('click', () => {
  elementDOMForPreview.firstElementChild.innerHTML = '' //Reset content to element
  changeClass(elementDOMForPreview, 0) 
  updateDataInDOM(storegeCustom, 'body-table') // Update element in DOM
})

/* Copy content, reset the content and change class to this element */
const copyDOM = (array, idName) => {
  elementDOMForPreview.firstElementChild.innerHTML =  document.getElementById(idName).parentElement.parentElement.innerHTML
  updateDataInDOM(array, idName)
  changeClass(element, 1)
}

/* Create a object, update storage, Update the DOM */
const addNewData = () => {
  let person = {
    id: storegeCustom.length + 1,
    email: document.getElementById('email').value,
    age: `${new Date().getFullYear() - Number(document.getElementById('birthday').value.substr(0, 4))}`,
    first_name: document.getElementById('name').value,
    last_name: document.getElementById('last-name').value,
    avatar: '',
    preview: function(array, idName) { // Create a Function in Object, for call later
      copyDOM(array, idName)
    }
  };
  let newPerson = Object.create(person)
  storegeCustom.push(newPerson.__proto__)
  newPerson.preview(storegeCustom, 'body-table')
}

/* Add function to btn in DOM */
let btnElement = document.getElementById('btn-form')
if(btnElement != null)
btnElement.addEventListener('click', () => {
  addNewData()
  btnElement.parentElement.reset()
})