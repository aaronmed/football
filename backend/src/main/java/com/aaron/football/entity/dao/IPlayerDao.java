package com.aaron.football.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaron.football.entity.models.Player;

public interface IPlayerDao extends CrudRepository<Player,Integer> {

}
