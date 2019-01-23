package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Lp;
import com.realdolmen.backend.service.LpService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/lp")
@RestController
public class LpController implements Serializable {
    private Lp newLp;
    private LpService lpService;

    public LpController(LpService lpService){
        this.lpService = lpService;
    }

    public Lp getNewLp() {
        return newLp;
    }

    public void setNewLp(Lp newLp) {
        this.newLp = newLp;
    }

    public void save(Lp lp){
        lpService.save(lp);
    }

    @GetMapping(path = "")
    public List<Lp> findAll(){
        return lpService.findAll();
    }

    @GetMapping(path = "{id}")
    public Optional<Lp> findById(@PathVariable Integer id){
        return lpService.findById(id);
    }

    public void delete(Lp lp){
        lpService.delete(lp);
    }

    public void deleteById(Integer id){

    }

}
