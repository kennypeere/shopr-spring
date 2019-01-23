package com.realdolmen.backend.domain;

import javax.persistence.*;

@Entity
@Table(name="non_fiction")
@DiscriminatorValue("NON_FICTION")
public class NonFiction extends Book {
    @Enumerated(EnumType.STRING)
    private NonFictionSubject subject;

    public NonFictionSubject getSubject() {
        return subject;
    }

    public void setSubject(NonFictionSubject subject) {
        this.subject = subject;
    }

    @Override
    public String getDisplayValue(){
        return "Non Fiction";
    }
}
