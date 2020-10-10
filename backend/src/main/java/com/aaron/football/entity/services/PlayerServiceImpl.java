package com.aaron.football.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.football.entity.dao.IPlayerDao;
import com.aaron.football.entity.models.Player;

@Service
public class PlayerServiceImpl implements IPlayerService {
	
	@Autowired
	IPlayerDao playerDao;
	
	@Override
	public List<Player> getAll() {
		return (List<Player>) playerDao.findAll();
	}
	
	public void addPlayer(Player player) {
		playerDao.save(player);
	}
	
	public void deletePlayer(int id) {
		playerDao.deleteById(id);
	}
	
	public void updatePlayer(int id, Player player) {
		Optional<Player> p = playerDao.findById(id);
		
		if (p.isPresent()) {
			player.setId(id);
			playerDao.save(player);
		}
	}
	
	public Player findById(int id) {
		Optional<Player> p = playerDao.findById(id);
		
		if(p.isPresent()) {
			return p.get();
		}
		
		return null;
	}

}
