package com.aaron.football.entity.services;

import java.util.List;

import com.aaron.football.entity.models.Player;

public interface IPlayerService {
	public List<Player> getAll();
	public Player findById(int id);
	public void addPlayer(Player player);
	public void deletePlayer(int id);
	public void updatePlayer(int id, Player player);
}
