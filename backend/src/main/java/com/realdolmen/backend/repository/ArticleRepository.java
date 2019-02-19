package com.realdolmen.backend.repository;

import com.realdolmen.backend.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {



    @Query("select min(price) from Article")
    Optional<Double> findLowestPrice();

    @Query("select max(price) from Article")
    Optional<Double> findHighestPrice();

//    @Query("select first 4 from Article order by price asc")
//    List<Article> getCheapest4Articles();

//    @Query("select a from Article order by a.price asc limit 6")
//    List<Article> getCheapest4Articles();

//    @Override
//    public List<Article> findOrderedByPriceLimitedTo(int limit) {
//
//    }

    List<Article> getAllByOrderByPriceAsc();

}
