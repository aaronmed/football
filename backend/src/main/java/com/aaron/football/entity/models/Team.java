package com.aaron.football.entity.models;

import java.io.Serializable;
//import java.util.Set;

import javax.persistence.*;


//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "teams")
public class Team implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String stadium;
	
	@Column
	private String country;
	
//	@JsonIgnore
//	@OneToMany(mappedBy = "team", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private Set<Player> players;

	public Team() {
		
	}

	public Team(int id, String name, String stadium, String country) {
		super();
		this.id = id;
		this.name = name;
		this.stadium = stadium;
		this.country = country;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
//	public void setPlayers(Set<Player> players) {
//		this.players = players;
//	}
//	
//	public Set<Player> getPlayers() {
//		return players;
//	}

	public String getStadium() {
		return stadium;
	}

	public void setStadium(String stadium) {
		this.stadium = stadium;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
}
