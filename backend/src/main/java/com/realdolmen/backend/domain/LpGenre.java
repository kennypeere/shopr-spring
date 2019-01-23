package com.realdolmen.backend.domain;

public enum LpGenre {
    CLASSICAL("Classical"),
    POP("Pop"),
    ROCK("Rock"),
    DANCE("Dance"),
    RNB("R&B"),
    HIPHOP("Hip-hop");
    private String description;
    LpGenre(String des){
        this.description = des;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
