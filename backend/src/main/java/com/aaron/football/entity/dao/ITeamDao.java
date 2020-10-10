package com.aaron.football.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaron.football.entity.models.Team;

public interface ITeamDao extends CrudRepository<Team,Integer> {

}
