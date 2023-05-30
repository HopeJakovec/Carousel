let container = document.querySelector('.container');

let i = 1;
for (let li of container.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 140;
let count = 5;
let list = container.querySelector('ul');
let listElems = container.querySelectorAll('li');
// let listElemsImg = container.querySelectorAll('img');
let position = 0;

container.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

container.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, - width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

// container.querySelectorAll('.gallery__img').mouseover = function() {
//     listElemsImg.style.cursor = pointer;
// };
