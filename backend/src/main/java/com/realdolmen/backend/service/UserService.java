package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.User;
import com.realdolmen.backend.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public User findById(Integer id) throws NotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new NotFoundException("User is Not found"));
    }

    public void delete(User user){
        userRepository.delete(user);
    }

    public void deleteById(Integer id){
        userRepository.deleteById(id);
    }




}
