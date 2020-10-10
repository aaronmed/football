import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/player';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  players: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  ionViewWillEnter(){
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.playersService.getPlayers().subscribe(players => {
      this.players = players;
      console.log(players);
    });
  }

  deletePlayer(id: number) {
    this.playersService.deletePlayer(id).subscribe(() => {
      this.getAllPlayers();
    });
  }

  insertPlayer() {
    this.router.navigateByUrl("/add-player");
  }

  updatePlayer(id: number) {
    this.playersService.setCurrentPlayerId(id);
    this.router.navigateByUrl("/update-player");
  }
}
