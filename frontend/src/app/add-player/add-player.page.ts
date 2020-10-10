import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

  playerForm: FormGroup;
  teams: Team[];
  isSubmitted = false;

  constructor(public fb: FormBuilder,
    private playerService: PlayersService,
    private teamService: TeamsService,
    private router: Router
  ) {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]], 
      country: ['', [Validators.required, Validators.minLength(4)]],
      position: ['', [Validators.required, Validators.minLength(5)]],
      team: ['']
    });
  }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.teamService.getTeams().subscribe(teams => {
      this.teams= teams;
      console.log(teams);
    });
  }

  get errorControl() {
    return this.playerForm.controls;
  }

  onFormSubmit() {
    this.isSubmitted = true;
    if (!this.playerForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let player = {
        id: null,
        name: this.playerForm.value.name,
        country: this.playerForm.value.country,
        position: this.playerForm.value.position,
        team: this.playerForm.value.team
      }
      this.playerService.addPlayer(player)
        .subscribe((res) => {
          this.router.navigateByUrl("/players");
        });
    }
  }
}
