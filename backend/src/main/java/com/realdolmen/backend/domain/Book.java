package com.realdolmen.backend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity(name="book")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Book extends Article {
    @Size(max = 100)
    @NotNull
    @Column(nullable = false)
    private String author;

    @Pattern(regexp = "\\d{3}-\\d{2}-\\d{4}-\\d{3}-\\d{1}")
    private String isbn;

    private Integer numberOfPages;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Integer getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(Integer numberOfPages) {
        this.numberOfPages = numberOfPages;
    }
}
