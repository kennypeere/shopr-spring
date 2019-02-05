package com.realdolmen.backend.repository;

import com.realdolmen.backend.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {
    @Query("select min(price) from Article")
    Optional<Double> findLowestPrice();

    @Query("select max(price) from Article")
    Optional<Double> findHighestPrice();
}
