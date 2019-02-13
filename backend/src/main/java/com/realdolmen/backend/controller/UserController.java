package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.User;
import com.realdolmen.backend.service.UserService;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@RequestMapping(path = "/user")
@RestController
public class UserController implements Serializable {
    private User newUser;
    private User currentUser;
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public User getNewUser() {
        return newUser;
    }

    public void setNewUser(User newUser) {
        this.newUser = newUser;
    }

    public User getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(User currentUser) {
        this.currentUser = currentUser;
    }

    @GetMapping(path = "")
    public List<User> findAll() {
        return userService.findAll();
    }

    @PostMapping(path = "/register")
    public void save(@RequestBody User user) {
        userService.save(user);
    }

    public void delete(User user) {
        userService.delete(user);
    }

    public void deleteById(Integer id) {
        userService.deleteById(id);
    }

    @PostMapping(path = "/find")
    public ResponseEntity<User> findById(@RequestBody Integer userId) {
        try {
            return ResponseEntity.ok().body(userService.findById(userId));
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/{userId}/favourites/{articleId}")
    public boolean hasFavourite(@PathVariable Integer userId, @PathVariable Integer articleId){
        return userService.hasFavourite(userId, articleId);
    }
    @GetMapping(path = "/{userId}/addFavourite/{articleId}")
    public void addFavourite(@PathVariable Integer userId, @PathVariable Integer articleId){
        userService.addFavourite(userId, articleId);

    }
}
