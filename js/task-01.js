const ulCategories = document.querySelectorAll(".item");
// console.dir(ulCategories);

console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(element => {

  console.log(`Category: ${element.firstElementChild.textContent}`);

  console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
  
})
