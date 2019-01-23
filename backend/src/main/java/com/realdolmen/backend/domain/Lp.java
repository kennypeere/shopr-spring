package com.realdolmen.backend.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Size;

@Entity
@DiscriminatorValue("LP")
public class Lp extends Article{
    @Size(max = 100)
    private String artist;

    @Enumerated(EnumType.STRING)
    private LpGenre genre;

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public LpGenre getGenre() {
        return genre;
    }

    public void setGenre(LpGenre genre) {
        this.genre = genre;
    }

    @Override
    public String getDisplayValue(){
        return "Lp";
    }
}
