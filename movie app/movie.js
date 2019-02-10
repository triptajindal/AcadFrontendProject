var btns = document.querySelectorAll('#movie-list .delete');
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		var li = e.target.parentElement;
		li.parentNode.removeChild(li)
	});
});


//this will delete new added movie also
var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function (e) {
	if (e.target.className === 'delete') { // We want to get where did the click happened, so className
		// console.log(e.target);
		var li = e.target.parentElement; // this is the li which is the parent to the delete and we want to delete it.
		//console.log(li);
		// li.parentNode.removeChild(li);
		list.removeChild(li);

	}
})


//add movie
var addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function (e) {

	e.preventDefault(); //to prevent submit default refresh
	var value = addForm.querySelector('input[type="text"]').value;
	var li = document.createElement('li');
	var movieName = document.createElement('span');
	var deletebtn = document.createElement('span');
	li.appendChild(movieName);
	li.appendChild(deletebtn);
	list.appendChild(li);
	movieName.textContent = value;
	deletebtn.textContent = 'delete';
	movieName.classList.add('name');
	deletebtn.classList.add('delete');
})



//hide the list
var hideform = document.querySelector('#add-movie #hide');
hideform.addEventListener('click', function (e) {
	if (list.style.display == "none") {
		list.style.display = "block";
	} else {
		list.style.display = "none";
	}
})



