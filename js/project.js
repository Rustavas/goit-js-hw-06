import { headingAll, headingOne, headingTwo, headingFour, headingFive, headingSix, headingSeven, headingAight } from './variables_project.js'

headingAll.addEventListener('click', onClick);

function onClick(evt) {
  onLoadAll()
}
async function getAll() {
  // return await fetch('https://books-backend.p.goit.global/books/top-books')
    // return await fetch('https://books-backend.p.goit.global/books/category-list')
    return await fetch('https://books-backend.p.goit.global/books/category?category=Paperback Nonfiction')
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json();
    });

}
function onLoadAll(){
  getAll().then(data => console.log(data))
}
// function onLoadAll() {

//   getAll().then(data => {
//     const arr = [];
//     let i = 0;
//     for (const el of data) {
//       if (arr.length === 4) {
//         break;
//       }
//       i = Math.floor(Math.random() * data.length);
//       if (!arr.includes(i)) {
//         arr.push(i)

//       }
//       console.log(arr)

//     }



//   })
// }
onLoadAll();
