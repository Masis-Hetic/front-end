var prev = document.querySelector('div.prev');
var next = document.querySelector('div.next');
var index = 0;
var lis = document.querySelectorAll('ul.slider li');

prev.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0)
    index = 2;

    lis[index].classList.add('visible');
});

next.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index++;
    if (index > 2)
    index = 0;

    lis[index].classList.add('visible');
});