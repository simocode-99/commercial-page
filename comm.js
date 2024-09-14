const myLink = document.getElementById('mylink');
var listesContent = document.getElementById('listes-content');
const lastChilds = document.querySelector('last-childs');
let isVisible = false;

myLink.addEventListener('click', event => {
    event.preventDefault();
    if(listesContent.style.display === 'none' || listesContent.style.display === ''){
        listesContent.style.display = 'block';
    }
    else{
        listesContent.style.display = 'none';
    }
})

