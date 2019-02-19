package com.realdolmen.backend.domain;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@DiscriminatorColumn(name = "types", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue(value = "")
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max = 100)
    private String title;

    @NotNull
    @Digits(integer = 6, fraction = 2)
    private double price;

    @NotNull
    @Size(max = 100)
    @Column(name = "supplier_id")
    private String supplierId;

    @Column(name = "types", insertable = false, updatable = false)
    private String types;

    public String getTypes() {
        return types;
    }

    public void setTypes(String types) {
        this.types = types;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public String getDisplayValue(){
        return "Article";
    }
}
