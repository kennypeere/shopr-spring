package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Fiction;
import com.realdolmen.backend.repository.FictionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FictionService {
    private FictionRepository fictionRepository;

    public FictionService(FictionRepository fictionRepository){
        this.fictionRepository = fictionRepository;
    }

    public void save(Fiction fiction){
        fictionRepository.save(fiction);
    }

    public List<Fiction> findAll(){
        return fictionRepository.findAll();
    }

    public Optional<Fiction> findById(Integer id){
        return fictionRepository.findById(id);
    }

    public void delete(Fiction fiction){
        fictionRepository.delete(fiction);
    }

    public void deleteById(Integer id){
        fictionRepository.findById(id);
    }
}
