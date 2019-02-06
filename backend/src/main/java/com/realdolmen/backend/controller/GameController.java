package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Game;
import com.realdolmen.backend.service.GameService;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/game")
@RestController
public class GameController implements Serializable {
    private Game newGame;
    private GameService gameService;

    public GameController(GameService gameService){
        this.gameService = gameService;
    }

    public Game getNewGame() {
        return newGame;
    }

    public void setNewGame(Game newGame) {
        this.newGame = newGame;
    }

    @PostMapping(path = "/add")
    public void save(@RequestBody Game game){
        gameService.save(game);
    }

    @GetMapping(path = "")
    public List<Game> findAll(){
        return gameService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Game> findById(@PathVariable Integer id){
        return gameService.findById(id);
    }

    public void delete(Game game){
        gameService.delete(game);
    }

    public void deleteById(Integer id){
        gameService.deleteById(id);
    }

}
