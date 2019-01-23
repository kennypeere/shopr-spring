package com.realdolmen.backend.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@DiscriminatorValue("GAME")
public class Game extends Article {
    @Size(max = 100)
    private String publisher;

    @Column(name = "minimum_age")
    private int minimumAge;

    @Enumerated(EnumType.STRING)
    private GameGenre genre;

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getMinimumAge() {
        return minimumAge;
    }

    public void setMinimumAge(int minimumAge) {
        this.minimumAge = minimumAge;
    }

    public GameGenre getGenre() {
        return genre;
    }

    public void setGenre(GameGenre genre) {
        this.genre = genre;
    }

    @Override
    public String getDisplayValue(){
        return "Game";
    }
}
