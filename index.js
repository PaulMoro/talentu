/* Generate referent Storage */
let storegeCustom = [
  {
    age: 32,
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth"
  }
]

/* create element
 * add data from parameter,
 * add class for styles,
 * add information to new node
 * retunr the new element  */
const generateElemet = (information) => {
  let newElement = document.createElement("tr")
  let contentElement = `
    <td class="table__item table__item--id">${information.id}</td>
    <td class="table__item table__item--name">${information.first_name} ${information.last_name}</td>
    <td class="table__item table__item--age">${information.age}</td>
    <td class="table__item table__item--email">${information.email}</td>
    <td class="table__item table__item--photo">
      <img src="${information.avatar}" alt="photo's ${information.first_name}">
    </td>
  `
  newElement.classList.add('table__row')
  newElement.innerHTML = contentElement
  return newElement
}

/* update the elemnt on DOM
 * get the element,
 * reset data on element
 * Do for each object on parameter for add the information to the node  */
const updateDataInDOM = (dataStorage) => {
  let element = document.getElementById('body-table')
  element.innerHTML = ''
  dataStorage.forEach(e => {
    element.appendChild(generateElemet(e))
  });
}

/* Generate information since storage our */
updateDataInDOM(storegeCustom)

/* Call to API */
const callData = async () => {
  const request = await fetch("https://reqres.in/api/users?page=1");
  const data = await request.json();
  return data;
}

/* Init all Function */
callData().then(covidData => {
  storegeCustom = covidData.data
  updateDataInDOM(covidData.data);
});