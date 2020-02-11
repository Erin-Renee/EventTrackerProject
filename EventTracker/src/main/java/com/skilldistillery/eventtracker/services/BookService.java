package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Book;

@Service
public interface BookService {

	List<Book> showAllBooks();
}
