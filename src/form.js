const addNewData = () => {
  let person = {
    id: storegeCustom.length + 1,
    email: document.getElementById('email').value,
    age: document.getElementById('birthday').value,
    first_name: document.getElementById('name').value,
    last_name: document.getElementById('last-name').value,
    avatar: '',
    update: function(array) {
      updateDataInDOM(array)
    }
  };
  let newPerson = Object.create(person)
  storegeCustom.push(newPerson.__proto__)
  newPerson.update(storegeCustom)
}

let btnElement = document.getElementById('btn-form')
if(btnElement != null)
btnElement.addEventListener('click', () => {
  addNewData()
  btnElement.parentElement.reset()
})