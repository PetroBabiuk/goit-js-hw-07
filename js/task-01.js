// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
// консоль текст заголовка элемента(тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulRef = document.querySelector('ul#categories');
const categories = ulRef.children;
console.log(categories);
const countCategories = () => {
    return `В списке ${categories.length} категории`;
}

console.log(countCategories(ulRef));

const countElementOfCategoryAndFindTitle = (category) => {
    const titleCategoryRef = category.firstElementChild;
    const elementsListRef = category.querySelector('ul');
    return `Категория ${titleCategoryRef.textContent}, 
            элементов: ${elementsListRef.children.length}`;
}

console.log(countElementOfCategoryAndFindTitle(categories[0]));
console.log(countElementOfCategoryAndFindTitle(categories[1]));
console.log(countElementOfCategoryAndFindTitle(categories[2]));

