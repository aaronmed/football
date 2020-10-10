import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  player: Player;
  //players: Player[];
  ids: number[];


  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.getOnePlayer();
  }


  getOnePlayer() {
    this.ids = [];
    this.playersService.getPlayers().subscribe(players => {
      for (let p of players) {
        this.ids.push(p.id);
      }
      let random = Math.floor(Math.random() * this.ids.length);
      let randomId = this.ids[random];
      this.playersService.getPlayerById(randomId).subscribe(player => {
        this.player = player;
      });
    });
  }
}
