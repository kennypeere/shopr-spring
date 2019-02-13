package com.realdolmen.backend.repository;

import com.realdolmen.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select size(u.favourites) from User u where user_id = :userId and article_id = :articleId")
    Optional<Integer> numberOfFavourites(@Param(value = "userId") Integer userId, @Param(value = "articleId") Integer articleId);



}
