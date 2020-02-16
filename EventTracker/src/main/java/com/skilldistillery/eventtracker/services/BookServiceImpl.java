package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Book;
import com.skilldistillery.eventtracker.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository repo;

	@Override
	public List<Book> showAllBooks() {
		return repo.findAll();
	}
	
	@Override
	public Book selectBook(Integer bId) {
		Book book = null;
		Optional<Book> bookOpt = repo.findById(bId);
		if(bookOpt.isPresent()) {
		book = bookOpt.get();
		} else {
			return null;
		}
		return book;
	}

	@Override
	public Book create(Book newBook) {
		repo.saveAndFlush(newBook);
		return newBook;
	}

	@Override
	public boolean delete(Integer bId) {
		Book book = null;
		Optional<Book> bookOpt = repo.findById(bId);
		if (bookOpt.isPresent()) {
			book = bookOpt.get();
			repo.delete(book);
			return true;
		}
		return false;
	}

	@Override
	public Book update(Integer bId, Book updateBook) {
		Optional<Book> bookOpt = repo.findById(bId);
		Book bookUpdate = null;
		if (bookOpt.isPresent()) {
			bookUpdate = bookOpt.get();
			updateBook.setId(bookUpdate.getId());
			bookUpdate = updateBook;
			repo.saveAndFlush(bookUpdate);
		} else {
			return null;
		}
		return bookUpdate;
	}
}
