package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.NonFiction;
import com.realdolmen.backend.service.NonFictionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/nonFiction")
@RestController
public class NonFictionController implements Serializable {
    private NonFiction newNonFiction;
    private NonFictionService nonFictionService;

    public NonFictionController(NonFictionService nonFictionService) {
        this.nonFictionService = nonFictionService;
    }

    public NonFiction getNewNonFiction() {
        return newNonFiction;
    }

    public void setNewNonFiction(NonFiction newNonFiction) {
        this.newNonFiction = newNonFiction;
    }

    public void save(NonFiction nonFiction){
        nonFictionService.save(nonFiction);
    }

    @GetMapping(path = "")
    public List<NonFiction> findAll(){
        return nonFictionService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<NonFiction> findById(@PathVariable Integer id){
        return nonFictionService.findById(id);
    }

    public void delete(NonFiction nonFiction){
        nonFictionService.delete(nonFiction);
    }

    public void deleteById(Integer id){
        nonFictionService.deleteById(id);
    }
}
