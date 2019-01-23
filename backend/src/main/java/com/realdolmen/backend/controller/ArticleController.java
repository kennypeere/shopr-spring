package com.realdolmen.backend.controller;

import com.realdolmen.backend.domain.Article;
import com.realdolmen.backend.service.ArticleService;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping(path = "/all")
    public List<Article> findAll(){
        return articleService.findAll();
    }

    public Optional<Article> findById(Integer id){
        return articleService.findById(id);
    }

    public void delete(Article article){
        articleService.delete(article);
    }

    public void deleteById(Integer id){
        articleService.deleteById(id);
    }
}
