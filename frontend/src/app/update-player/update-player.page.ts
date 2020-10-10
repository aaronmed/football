import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.page.html',
  styleUrls: ['./update-player.page.scss'],
})
export class UpdatePlayerPage implements OnInit {

  playerUpdateForm: FormGroup;
  teams: Team[];

  constructor(public fb: FormBuilder,
    private playerService: PlayersService,
    private teamService: TeamsService,
    private router: Router) {
      this.playerUpdateForm = this.fb.group({
        name: [''],
        country: [''],
        position: [''],
        team: ['']
      });
     }

  ngOnInit() {
    this.getAllTeams();
    let id = this.playerService.getCurrentPlayerId();

    this.playerService.getPlayerById(id).subscribe((p) => { 
      this.playerUpdateForm = this.fb.group({
        name: p.name,
        country: p.country,
        position: p.position,
        team: p.team
      });
    })
  }

  onFormSubmit() {
    let id = this.playerService.getCurrentPlayerId();
    if (!this.playerUpdateForm.valid) {
      return false;
    } else {
      let player = {
        id: id,
        name: this.playerUpdateForm.value.name,
        country: this.playerUpdateForm.value.country,
        position: this.playerUpdateForm.value.position,
        team: this.playerUpdateForm.value.team
      }
      this.playerService.updatePlayer(id,player)
        .subscribe((res) => {
          this.router.navigateByUrl("/players");
        });
    }
  }
  
  getAllTeams() {
    this.teamService.getTeams().subscribe(teams => {
      this.teams= teams;
      console.log(teams);
    });
  }

  // findPlayerById() {
  //   let id = this.playerService.getCurrentPlayerId();

  //   this.playerService.getPlayerById(id).subscribe((p) => {
  //     this.playerUpdateForm.value
  //   })
  // }

}
