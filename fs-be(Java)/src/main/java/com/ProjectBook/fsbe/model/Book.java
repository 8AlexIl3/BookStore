package com.ProjectBook.fsbe.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Book {
    @Id
    @GeneratedValue
    private long Id;
    private String title;
    private String author;
    private String genre;

    private long yearPub;

    private  double price;

    public long getId() {
        return Id;
    }
    public void setId(long id) {
        Id = id;
    }

    public long getYearPub() {
        return yearPub;
    }

    public void setYearPub(long yearPub) {
        this.yearPub = yearPub;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
