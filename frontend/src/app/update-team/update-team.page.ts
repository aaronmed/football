import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.page.html',
  styleUrls: ['./update-team.page.scss'],
})
export class UpdateTeamPage implements OnInit {

  teamUpdateForm: FormGroup;

  constructor(public fb: FormBuilder,
    private teamService: TeamsService,
    private router: Router) {
    this.teamUpdateForm = this.fb.group({
      name: [''],
      country: [''],
      stadium: ['']
    });
  }

  ngOnInit() {
    let id = this.teamService.getCurrentTeamId();

    this.teamService.getTeamById(id).subscribe((t) => {
      this.teamUpdateForm = this.fb.group({
        name: t.name,
        country: t.country,
        stadium: t.stadium
      });
    })
  }

  onFormSubmit() {
    let id = this.teamService.getCurrentTeamId();
    if (!this.teamUpdateForm.valid) {
      return false;
    } else {
      let team = {
        id: id,
        name: this.teamUpdateForm.value.name,
        country: this.teamUpdateForm.value.country,
        stadium: this.teamUpdateForm.value.stadium
      }
      this.teamService.updateTeam(id, team)
        .subscribe((res) => {
          this.router.navigateByUrl("/teams");
        });
    }
  }

}
