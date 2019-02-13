package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.domain.User;
import com.realdolmen.backend.repository.ArticleRepository;
import com.realdolmen.backend.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private ArticleRepository articleRepository;

    public UserService(UserRepository userRepository, ArticleRepository articleRepository){
        this.userRepository = userRepository;
        this.articleRepository = articleRepository;
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

    public boolean hasFavourite(Integer userId, Integer articleId){
        return userRepository.numberOfFavourites(userId, articleId).get() == 1;
    }

    public void addFavourite(Integer userId, Integer articleId) {
        User user = userRepository.findById(userId).get();
        Article article = articleRepository.findById(articleId).get();
        List<Article> favourites = user.getFavourites();
        favourites.add(article);
        user.setFavourites(favourites);
        save(user);
    }
}
