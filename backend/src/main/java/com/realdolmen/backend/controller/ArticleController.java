package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.service.ArticleService;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path = "/add")
    public void save(@RequestBody Article article){
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

    @DeleteMapping(path = "/delete/{id}")
    public void deleteById(@PathVariable Integer id){
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
