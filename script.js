const inputAdd = document.querySelector('#input_add'),
      form = document.querySelector('form'),
      list = document.querySelector('ul'),
      allInfo = document.querySelector('.all-info'),
      clearAll = document.querySelector('#clear-all');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let amount = document.querySelector('.amount');
    let countTask = document.querySelectorAll('li').length;
    countTask= ++countTask;
    amount.textContent = countTask;
    const task = inputAdd.value;
    const item = document.createElement('li');
    const removeButton = document.createElement('img');
    removeButton.src = 'img/del.png';
    removeButton.className = 'del_img';
    item.textContent = task;
    list.appendChild(item);
    item.appendChild(removeButton);
    inputAdd.value = '';
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      e.target.parentElement.remove();
    }

    let delAmount = document.querySelector('.amount');
    let countTask = document.querySelectorAll('li').length;
    countTask = -countTask;
    countTask = Math.abs(countTask);
    delAmount.textContent = countTask;
});


clearAll.addEventListener('click', (e) => {
    const items = document.querySelectorAll('li');
    items.forEach(item => {
        item.remove();
    });
    let delAllAmount = document.querySelector('.amount');
    delAllAmount.textContent = '0';
});



