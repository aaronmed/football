package com.aaron.football.entity.models;

import java.io.Serializable;

import javax.persistence.*;

@Entity(name = "players")
public class Player implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String country;
	
	@Column
	private String position;
	
	@Column
	private String team;
	
//	@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name = "id_team", nullable = false)
//	private Team team;
	
	public Player() {
		
	}
	
	public Player(int id, String name, String country, String position, String team) {
		super();
		this.id = id;
		this.name = name;
		this.country = country;
		this.position = position;
		this.team = team;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}
	
	
}
