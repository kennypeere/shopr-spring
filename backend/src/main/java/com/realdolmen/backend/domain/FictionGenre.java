package com.realdolmen.backend.domain;

public enum FictionGenre {
    THRILLER("Thriller"),
    FANTASY("Fantasy"),
    DETECTIVE("Detective"),
    ROMANCE("Romance"),
    SCIFI("Sci-Fi");
    private String description;
    FictionGenre(String des){
        this.description = des;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
