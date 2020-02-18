window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {

	document.getElementById("lookup").addEventListener('click', function(e) {
		e.preventDefault();
		var bkid = document.bookForm.bId.value;
		if (!isNaN(bkid) && bkid > 0) {
			getBook(bkid);
		}
	});

	document.getElementById("showAll").addEventListener("click", function(e) {
		e.preventDefault();
		console.log("showAllBooks");
		getAllBooks();
	});
	
	document.getElementById("delete").addEventListener('click', function(e) {
		e.preventDefault();
		var bkid = document.deleteBookForm.bId.value;
		if (!isNaN(bkid) && bkid > 0) {
			deleteBook(bkid);
		}
	});
	
	document.getElementById("createBk").addEventListener("click", function(e) {
		e.preventDefault();
		createBook();
	});
	
	document.getElementById("updateBk").addEventListener('click', function(e) {
		e.preventDefault();
		var bkid = document.updateBookForm.bId.value;
		if (!isNaN(bkid) && bkid > 0) {
			updateBook(bkid);
		}
	});
}

// All Books
function getAllBooks() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books/', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var books = JSON.parse(xhr.responseText);
			displayAll(books);
		}
		if (xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	xhr.send(null);
}

// get book by ID
function getBook(bkid) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books/' + bkid, true);
	console.log(bkid);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var book = JSON.parse(xhr.responseText);
			console.log(bkid);
			display(book);
		}
		if (xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	xhr.send(null);
}



function deleteBook(bkid) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/books/delete/' + bkid, true);
	console.log(bkid);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var book = JSON.parse(xhr.responseText);
			console.log(bkid);
			display(book);
		}
		if (xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	xhr.send(null);
}

function createBook() {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/books/create', true);
	
	xhr.setRequestHeader("Content-type", "application/json")
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var newBook = JSON.parse(xhr.responseText);
			display(newBook);
		}
		if (xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	
	let form = document.createBookForm;
	let newbk = {
			title : form.title.value,
			author : form.author.value,
			published : form.published.value,
			rating : form.rating.value,
			description : form.description.value,
			dateRead : form.dateRead.value
			
	}
	xhr.send(JSON.stringify(newbk));
}
function updateBook(bkid) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/books/update/' + bkid, true);
	
	xhr.setRequestHeader("Content-type", "application/json")
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var updateBk = JSON.parse(xhr.responseText);
			display(updateBk);
		}
		if (xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	
	let form = document.updateBookForm;
	let newbk = {
			id : form.id.value,
			title : form.title.value,
			author : form.author.value,
			published : form.published.value,
			rating : form.rating.value,
			description : form.description.value,
			dateRead : form.dateRead.value
			
	}
	xhr.send(JSON.stringify(newbk));
}




// update book
// function updateBook(bkid) {
// let xhr = new XMLHttpRequest();
// xhr.open('UPDATE', 'api/books/update' + bkid, true);
// console.log(bkid);
// if(xhr.readyState)
// }

// display selected book details

function display(book) {
	var bookDiv = document.getElementById("bookData");
	bookDiv.textContent = " ";

	let titleH2 = document.createElement("h2");
	titleH2.textContent = "Title: " + book.title;
	bookDiv.appendChild(titleH2);

	let idLi = document.createElement("li");
	idLi.textContent = "ID: " + book.id;
	bookDiv.appendChild(idLi);
	
	let publishedLi = document.createElement("li");
	publishedLi.textContent = "Date Published: " + book.published;
	bookDiv.appendChild(publishedLi);

	let authorLi = document.createElement("li");
	authorLi.textContent = "Author: " + book.author;
	bookDiv.appendChild(authorLi);

	let ratingLi = document.createElement("li");
	ratingLi.textContent = "Rating: " + book.rating;
	bookDiv.appendChild(ratingLi);

	let dateReadLi = document.createElement("li");
	dateReadLi.textContent = "Finished Reading on: " + book.dateRead;
	bookDiv.appendChild(dateReadLi);

	let descriptionLi = document.createElement("li");
	descriptionLi.textContent = "Description: " +book.description;
	bookDiv.appendChild(descriptionLi);
}

// display All Books
function displayAll(books) {
	var bookDiv = document.getElementById("bookData");
	bookDiv.textContent = " ";

	let table = document.createElement("table");
	bookDiv.appendChild(table);

	books.forEach(function(book, index) {

		let titleH2 = document.createElement("h2");
		titleH2.textContent = "Title: " + book.title;
		bookDiv.appendChild(titleH2);
		
		let idLi = document.createElement("li");
		idLi.textContent = "ID: " + book.id;
		bookDiv.appendChild(idLi);

		let publishedLi = document.createElement("li");
		publishedLi.textContent = "Date Published: " + book.published;
		bookDiv.appendChild(publishedLi);

		let authorLi = document.createElement("li");
		authorLi.textContent = "Author: " + book.author;
		bookDiv.appendChild(authorLi);

		let ratingLi = document.createElement("li");
		ratingLi.textContent = "Rating: " + book.rating;
		bookDiv.appendChild(ratingLi);

		let dateReadLi = document.createElement("li");
		dateReadLi.textContent = "Finished Reading on: " + book.dateRead;
		bookDiv.appendChild(dateReadLi);

		let descriptionLi = document.createElement("li");
		descriptionLi.textContent = "Description: " +book.description;
		bookDiv.appendChild(descriptionLi);
	});
}
