var activ = document.querySelector('div.activ');
var themes = document.querySelector('div.themes');

activ.addEventListener('click', function(){
    if(themes.classList.contains('themes')){
        themes.className = 'test';
    } else{
        themes.className = 'themes';
    }
});

var body = document.querySelector('body');
var btn = document.querySelectorAll('li');

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


