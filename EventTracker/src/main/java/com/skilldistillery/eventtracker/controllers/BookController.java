package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	
}
