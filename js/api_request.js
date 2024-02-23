import axios from "axios"

async function getCategoryList(){
  const categoryList = await axios.get('https://books-backend.p.goit.global/books/category-list');
  return categoryList;
}

async function getTopBooks(){
  const topBooks = await axios.get('https://books-backend.p.goit.global/books/top-books');
  return topBooks;
}

async function getByCategoryBooks(param){
  const categoryBooks = await axios.get(`https://books-backend.p.goit.global/books/category?category=${param}`);
  return categoryBooks;
}
async function getByIdBook(param){
  const idBook = await axios.get(`https://books-backend.p.goit.global/books/category?category=${param}`);
  return idBook;
}