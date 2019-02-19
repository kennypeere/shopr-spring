package com.realdolmen.backend.service;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.repository.ArticleRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public double fetchLowestPrice() throws NotFoundException {
        return articleRepository.findLowestPrice().orElseThrow(() -> new NotFoundException("Lowest price not found"));
    }

    public Object fetchHighestPrice() throws NotFoundException {
        return articleRepository.findHighestPrice().orElseThrow(() -> new NotFoundException("Highest price not found"));
    }

    public List<Article> getCheapest8Articles() {
        return articleRepository.getAllByOrderByPriceAsc().stream().limit(8L).collect(Collectors.toList());
    }
}
