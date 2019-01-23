package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.User;
import com.realdolmen.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/user")
@RestController
public class UserController implements Serializable {
    private User newUser;
    private User currentUser;
    private UserService userService;

    public UserController(UserService userService){
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
    public List<User> findAll(){
        return userService.findAll();
    }

    public void save(User user){
        userService.save(user);
    }

    public void delete(User user){
        userService.delete(user);
    }

    public void deleteById(Integer id){
        userService.deleteById(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<User> findById(@PathVariable Integer id){
        return userService.findById(id);
    }
}
