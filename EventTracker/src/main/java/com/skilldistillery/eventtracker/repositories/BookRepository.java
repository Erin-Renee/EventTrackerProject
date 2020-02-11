package com.skilldistillery.eventtracker.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
