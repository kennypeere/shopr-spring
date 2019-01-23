package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Fiction;
import com.realdolmen.backend.service.FictionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/fiction")
@RestController
public class FictionController implements Serializable {
    private Fiction newFiction;
    private FictionService fictionService;

    public FictionController(FictionService fictionService){
        this.fictionService = fictionService;
    }

    public void save(Fiction fiction){
        fictionService.save(fiction);
    }

    @GetMapping(path = "")
    public List<Fiction> findAll(){
        return fictionService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Fiction> findById(@PathVariable Integer id){
        return fictionService.findById(id);
    }

    public void delete(Fiction fiction){
        fictionService.delete(fiction);
    }

    public void deleteById(Integer id){
        fictionService.deleteById(id);
    }
}
