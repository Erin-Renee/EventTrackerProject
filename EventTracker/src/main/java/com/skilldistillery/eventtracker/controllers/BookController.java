package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Book;
import com.skilldistillery.eventtracker.services.BookService;

@RestController
@RequestMapping("api")
public class BookController {

	@Autowired
	private BookService svc;
	
	@GetMapping("books")
	public List<Book> allBooks() {
		return svc.showAllBooks();
	}
	
	@GetMapping("books/{bId}")
	public Book selectBook(@PathVariable Integer bId) {
		return svc.selectBook(bId);		
	}
	
	@PostMapping("books/create")
	public Book createBook(@RequestBody Book book) {
		return svc.create(book);	
	}
	
	@PutMapping("books/update/{bId}")
	public Book updateBook(@PathVariable Integer bId, @RequestBody Book newBook) {
		return svc.update(bId, newBook);
		
	}
	@DeleteMapping("books/delete/{bId}")  
	public boolean deleteBook(@PathVariable Integer bId) {
		return svc.delete(bId);
	}
	
}
