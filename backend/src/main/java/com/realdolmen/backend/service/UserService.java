package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.User;
import com.realdolmen.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void save(User user){
        userRepository.save(user);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Optional<User> findById(Integer id){
        return userRepository.findById(id);
    }

    public void delete(User user){
        userRepository.delete(user);
    }

    public void deleteById(Integer id){
        userRepository.deleteById(id);
    }




}
