package com.skilldistillery.eventtracker.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;
	private String description;
	private String author;
	private int rating;

	@Column(name = "date_read")
	private LocalDate dateRead;

	private LocalDate published;

	public Book() {
		super();
	}

	public Book(int id, String title, String description, String author, int rating, LocalDate dateRead,
			LocalDate published) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.author = author;
		this.rating = rating;
		this.dateRead = dateRead;
		this.published = published;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public LocalDate getDateRead() {
		return dateRead;
	}

	public void setDateRead(LocalDate dateRead) {
		this.dateRead = dateRead;
	}

	public LocalDate getPublished() {
		return published;
	}

	public void setPublished(LocalDate published) {
		this.published = published;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", description=" + description + ", author=" + author
				+ ", rating=" + rating + ", dateRead=" + dateRead + ", published=" + published + "]";
	}

}
