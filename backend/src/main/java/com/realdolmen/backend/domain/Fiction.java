package com.realdolmen.backend.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Size;

@Entity
@DiscriminatorValue("FICTION")
public class Fiction extends Book {
    @Enumerated(EnumType.STRING)
    private FictionGenre genre;

    @Size(max = 255)
    private String summary;

    public FictionGenre getGenre() {
        return genre;
    }

    public void setGenre(FictionGenre genre) {
        this.genre = genre;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Override
    public String getDisplayValue(){
        return "Fiction";
    }
}
