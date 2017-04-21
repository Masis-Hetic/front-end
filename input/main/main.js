var input = document.querySelector('input');
var label = document.querySelector('label');
var eye = document.querySelector('i.fa-eye');
var eye_closed = document.querySelector('i.fa-eye-slash');

input.addEventListener('focus', function(){
	label.style.top = '-30px';
});
input.addEventListener('blur', function(){
	label.style.top = '0px';
	if (input.value) {
		label.style.top = '-30px';
	}
});

eye.addEventListener('click', function(){
	input.setAttribute('type', 'text');
	this.classList.add('closed');
	eye_closed.classList.remove('closed');
});

eye_closed.addEventListener('click', function(){
	input.setAttribute('type', 'password');
	this.classList.add('closed');
	eye.classList.remove('closed');
});