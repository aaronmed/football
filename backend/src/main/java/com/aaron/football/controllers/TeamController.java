package com.aaron.football.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aaron.football.entity.models.Team;
import com.aaron.football.entity.services.ITeamService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class TeamController {
	
	@Autowired
	ITeamService teamService;
	
	// Here you can see the end-points
	
	@GetMapping("/api/teams")
	private List <Team> getAll(){
		return teamService.getAll();
	}
	
	@GetMapping("/api/teams/{id}")
	private Team findById(@PathVariable(value = "id") int id){
		return teamService.findById(id);
	}
	
	@PostMapping("/api/teams")
	private void addTeam(Team team) {
		teamService.addTeam(team);
	}
	
	@DeleteMapping("/api/teams/{id}")
	private void deleteTeam(@PathVariable(value = "id") int id) {
		teamService.deleteTeam(id);
	}
	
	@PutMapping("/api/teams/{id}")
	private void updateTeam(@PathVariable(value = "id") int id, Team team) {
		teamService.updateTeam(id, team);
	}
}
