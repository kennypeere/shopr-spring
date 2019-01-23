package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {
    private ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }

    public void save(Article article){
        articleRepository.save(article);
    }

    public List<Article> findAll(){
        return articleRepository.findAll();
    }

    public Optional<Article> findById(Integer id){
        return articleRepository.findById(id);
    }

    public void delete(Article article){
        articleRepository.delete(article);
    }

    public void deleteById(Integer id){
        articleRepository.deleteById(id);
    }
}
