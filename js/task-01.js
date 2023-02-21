
const listCategoriesItem = document.querySelectorAll('.item');

console.log (`Number of categories: ${listCategoriesItem.length}`);
listCategoriesItem.forEach(element => {
console.log (`Category: ${element.firstElementChild.textContent}`);
console.log (`Elements: ${element.lastElementChild.children.length}`);    
});