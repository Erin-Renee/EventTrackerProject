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
}

function getBook(bkid) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books/' + bkid, true);
	console.log(bkid);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status < 400) {
			var book = JSON.parse(xhr.responseText);
			console.log(bkid);
			display(book);
		}
		if(xhr.readystate === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
		}
	};
	xhr.send(null);
}
	
function display(book){
	var bookDiv = document.getElementById("bookData");
	bookDiv.textContent = " ";
	
	let titleH2 = document.createElement("h2");
	titleH2.textContent = book.title;
	bookDiv.appendChild(titleH2);
	
	let descriptionLi = document.createElement("li");
	descriptionLi.textContent = book.description;
	bookDiv.appendChild(descriptionLi);
	
	let publishedLi = document.createElement("li");
	publishedLi.textContent = book.published;
	bookDiv.appendChild(publishedLi);
	
	let authorLi = document.createElement("li");
	authorLi.textContent = book.author;
	bookDiv.appendChild(authorLi);
	
	let ratingLi = document.createElement("li");
	ratingLi.textContent = book.rating;
	bookDiv.appendChild(ratingLi);
	
	

}
//<!-- id
//rdescription
//author
//published
//rating
//read_date -->