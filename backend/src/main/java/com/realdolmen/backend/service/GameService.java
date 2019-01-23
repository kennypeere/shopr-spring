package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Game;
import com.realdolmen.backend.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {
    private GameRepository gameRepository;

    public GameService(GameRepository gameRepository){
        this.gameRepository = gameRepository;
    }

    public void save(Game game){
        gameRepository.save(game);
    }

    public List<Game> findAll(){
        return gameRepository.findAll();
    }

    public Optional<Game> findById(Integer id){
        return gameRepository.findById(id);
    }

    public void delete(Game game){
        gameRepository.delete(game);
    }

    public void deleteById(Integer id){
        gameRepository.deleteById(id);
    }
}
