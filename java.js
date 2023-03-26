// let li = document.getElementsByClassName('li');
// console.log(li);

// for (let i = 0; i < li.length; i++) {
//     let del = document.createElement('i');
//     del.className = 'fa-solid fa-trash';
//     li[i].appendChild(del);


//     del.addEventListener('click', () => {
//         del.parentElement.style.display = 'none';
//     })
// };

let btnEnter = document.getElementById('btnEnter');
let ul = document.getElementById('to-do')
let text = document.getElementById('text');

    let newLi = document.createElement('div');
    newLi.className = 'li';

    let checkMe = document.createElement('div');
    checkMe.className = 'check-me';

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    let li = document.createElement('li');
    li.className = 'list';
    li.innerText = text.value;

    checkMe.append(checkBox, li);
    newLi.appendChild(checkMe);

    console.log(newLi);


btnEnter.addEventListener('click', () => {
    let newLi = document.createElement('div');
    newLi.className = 'li';

    let checkMe = document.createElement('div');
    checkMe.className = 'check-me';

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    let li = document.createElement('li');
    li.className = 'list';
    li.innerText = text.value;

    checkMe.append(checkBox, li);
    newLi.appendChild(checkMe);

    if (text.value === '') {
        alert('Field cannot be empty')
    }
    else {
        ul.appendChild(newLi);
    }
    text.value = ''

    let del = document.createElement('i');
    del.className = 'fa-solid fa-trash';
    newLi.appendChild(del);

    del.addEventListener('click', () => {
        del.parentElement.style.display = 'none'
    })
})