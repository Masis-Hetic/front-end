var input = document.querySelectorAll('input');
var label = document.querySelectorAll('label');
var eye = document.querySelector('i.fa-eye');
var eye_closed = document.querySelector('i.fa-eye-slash');


for (var i = 0; i < input.length; i++) {
	input[i].addEventListener('focus', function(){
		var parent = this.parentElement;
		parent.children[1].style.top = '-30px';
	});
	input[i].addEventListener('blur', function(){
		var parent = this.parentElement;
		var child = parent.children[0];

		if (child.value) {
			parent.children[1].style.top = '-30px';
		} else {
			parent.children[1].style.top = '0px';
		}
	});
}

eye.addEventListener('click', function(){
	var parent = this.parentElement;
	var child = parent.children[0];
	child.setAttribute('type', 'text');
	this.classList.add('closed');
	eye_closed.classList.remove('closed');
});

eye_closed.addEventListener('click', function(){
	var parent = this.parentElement;
	var child = parent.children[0];
	child.setAttribute('type', 'password');
	this.classList.add('closed');
	eye.classList.remove('closed');
});