package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.NonFiction;
import com.realdolmen.backend.repository.NonFictionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NonFictionService {
    private NonFictionRepository nonFictionRepository;

    public NonFictionService(NonFictionRepository nonFictionRepository){
        this.nonFictionRepository = nonFictionRepository;
    }

    public void save(NonFiction nonFiction){
        nonFictionRepository.save(nonFiction);
    }

    public List<NonFiction> findAll(){
        return nonFictionRepository.findAll();
    }

    public Optional<NonFiction> findById(Integer id){
        return nonFictionRepository.findById(id);
    }

    public void delete(NonFiction nonFiction){
        nonFictionRepository.delete(nonFiction);
    }

    public void deleteById(Integer id){
        nonFictionRepository.deleteById(id);
    }
}
