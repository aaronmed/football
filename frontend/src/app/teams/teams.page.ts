import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[];

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  ionViewWillEnter(){
    this.getAllTeams();
  }

  getAllTeams() {
    this.teamsService.getTeams().subscribe(teams => {
      this.teams= teams;
      console.log(teams);
    });
  }

  deleteTeam(id: number) {
    this.teamsService.deleteTeam(id).subscribe(() => {
      this.getAllTeams();
    });
  }

  insertTeam() {
    this.router.navigateByUrl("/add-team");
  }

  updateTeam(id: number) {
    this.teamsService.setCurrentTeamId(id);
    this.router.navigateByUrl("/update-team");
  }

}
