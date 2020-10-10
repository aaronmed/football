package com.aaron.football.entity.services;

import java.util.List;

import com.aaron.football.entity.models.Team;

public interface ITeamService {
	public List<Team> getAll();
	public Team findById(int id);
	public void addTeam(Team team);
	public void deleteTeam(int id);
	public void updateTeam(int id, Team team);
}
