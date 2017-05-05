var activ = document.querySelector('main div:nth-of-type(2)');
var themes = document.querySelector('div.themes');
var body = document.querySelector('body');
var btn = document.querySelectorAll('li');
var p = document.querySelector('main div:nth-of-type(2)>p');

activ.addEventListener('click', function(){
    if(themes.classList.contains('themes')){
        themes.className = 'test';
    } else{
        themes.className = 'themes';
    }
});

p.addEventListener('click', function(){
    activ.classList.toggle('activ');
    p.classList.toggle('activ');
    console.log('yeah man');
});

for (var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        var thisClass = this.className;
        body.className = thisClass;
        localStorage.setItem('theme', JSON.stringify(thisClass));
    });
}

function refresh(){
    var monTheme = JSON.parse(localStorage.getItem('theme'));
    body.className = monTheme;
}

window.onload = refresh;


