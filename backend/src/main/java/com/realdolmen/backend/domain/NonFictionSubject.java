package com.realdolmen.backend.domain;

public enum NonFictionSubject {
    HISTORY("History"),
    COOKBOOK("Cookbook"),
    SCIENCE("Science"),
    SPORTS("Sports");
    private String description;
    NonFictionSubject(String des){
        this.description = des;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
