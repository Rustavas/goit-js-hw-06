import { headingAll, headingOne, headingTwo, headingFour, headingFive, headingSix, headingSeven, headingEight } from './variables_project.js'

headingOne.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt.target.textContent)
}
async function getTopBooks() {
  return await fetch('https://books-backend.p.goit.global/books/top-books')
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json();
    });

}

function getRandomTopBooks() {
  getTopBooks().then(data => {
    const arrTopBooks = [];
    let i = 0;
    for (const el of data) {
      if (arrTopBooks.length === 4) {
        break;
      }
      i = Math.round(Math.random() * data.length);
      if (!arrTopBooks.includes(data[i])) {
        arrTopBooks.push(data[i])
      }
    }
    
    const objTopBooks = {
      ...arrTopBooks
    }
    console.dir(arrTopBooks)
   





    
  })
    .catch(err => console.log(err))
}
getRandomTopBooks()
// (list_name, )