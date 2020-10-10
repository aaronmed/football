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

import com.aaron.football.entity.models.Player;
import com.aaron.football.entity.services.IPlayerService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class PlayerController {
	
	@Autowired
	IPlayerService playerService;
	
	// Here you can see the end-points
	
	@GetMapping("/api/players")
	private List <Player> getAll(){
		return playerService.getAll();
	}
	
	@GetMapping("/api/players/{id}")
	private Player findById(@PathVariable(value = "id") int id){
		return playerService.findById(id);
	}
	
	@PostMapping("/api/players")
	private void addPlayer(Player player) {
		playerService.addPlayer(player);
	}
	
	@DeleteMapping("/api/players/{id}")
	private void deletePlayer(@PathVariable(value = "id") int id) {
		playerService.deletePlayer(id);
	}
	
	@PutMapping("/api/players/{id}")
	private void updatePlayer(@PathVariable(value = "id") int id, Player player) {
		playerService.updatePlayer(id, player);
	}
}
