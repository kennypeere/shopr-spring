package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Lp;
import com.realdolmen.backend.repository.LpRepository;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class LpService {
    private LpRepository lpRepository;

    public LpService(LpRepository lpRepository){
        this.lpRepository = lpRepository;
    }

    public void save(Lp lp){
        lpRepository.save(lp);
    }

    public List<Lp> findAll(){
        return lpRepository.findAll();
    }

    public Optional<Lp> findById(Integer id){
        return lpRepository.findById(id);
    }

    public void delete(Lp lp){
        lpRepository.delete(lp);
    }

    public void deleteById(Integer id){
        lpRepository.deleteById(id);
    }
}
