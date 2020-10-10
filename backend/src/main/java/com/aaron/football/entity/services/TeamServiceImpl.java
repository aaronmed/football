package com.aaron.football.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.football.entity.dao.ITeamDao;
import com.aaron.football.entity.models.Team;

@Service
public class TeamServiceImpl implements ITeamService {
	
	@Autowired
	ITeamDao teamDao;
	
	@Override
	public List<Team> getAll() {
		return (List<Team>) teamDao.findAll();
	}
	
	public void addTeam(Team team) {
		teamDao.save(team);
	}
	
	public void deleteTeam(int id) {
		teamDao.deleteById(id);
	}
	
	public void updateTeam(int id, Team team) {
		Optional<Team> t = teamDao.findById(id);
		
		if (t.isPresent()) {
			team.setId(id);
			teamDao.save(team);
		}
	}
	
	public Team findById(int id) {
		Optional<Team> t = teamDao.findById(id);
		
		if(t.isPresent()) {
			return t.get();
		}
		
		return null;
	}

}
