package com.linkedbook.dao;

import com.linkedbook.entity.LikeDealDB;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeDealRepository extends JpaRepository<LikeDealDB, Integer>, LikeDealRepositoryCustom {
}
