package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.service.ArticleService;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/article")
@RestController
public class ArticleController implements Serializable {
    private Article newArticle;
    private ArticleService articleService;

    public ArticleController (ArticleService articleService){
        this.articleService = articleService;
    }

    public Article getNewArticle() {
        return newArticle;
    }

    public void setNewArticle(Article newArticle) {
        this.newArticle = newArticle;
    }

    public void save(Article article){
        articleService.save(article);
    }

    @GetMapping(path = "")
    public List<Article> findAll(){
        return articleService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Article> findById(@PathVariable Integer id){
        return articleService.findById(id);
    }

    public void delete(Article article){
        articleService.delete(article);
    }

    public void deleteById(Integer id){
        articleService.deleteById(id);
    }

    @GetMapping(path = "/lowest")
    public ResponseEntity fetchLowestPrice(){
        try {
            return ResponseEntity.ok().body(articleService.fetchLowestPrice());
        } catch (NotFoundException e) {
           return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/highest")
    public ResponseEntity fetchHighestPrice(){
        try {
            return ResponseEntity.ok().body(articleService.fetchHighestPrice());
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
