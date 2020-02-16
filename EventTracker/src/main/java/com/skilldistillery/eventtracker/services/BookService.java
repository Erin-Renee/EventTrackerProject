package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Book;

@Service
public interface BookService {

	List<Book> showAllBooks();

	Book create(Book book);

	Book update(Integer bId, Book updateBook);

	boolean delete(Integer id);

	Book selectBook(Integer id);
}
