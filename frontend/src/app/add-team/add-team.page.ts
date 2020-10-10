import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.page.html',
  styleUrls: ['./add-team.page.scss'],
})
export class AddTeamPage implements OnInit {

  teamForm: FormGroup;
  isSubmitted = false;

  constructor(public fb: FormBuilder,
    private teamService: TeamsService,
    private router: Router
  ) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      country: ['', [Validators.required, Validators.minLength(4)]],
      stadium: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
  }

  get errorControl() {
    return this.teamForm.controls;
  }

  onFormSubmit(){
    this.isSubmitted = true;
    if (!this.teamForm.valid) {
      return false;
    } else {
      let team = {
        id: null,
        name: this.teamForm.value.name,
        country: this.teamForm.value.country,
        stadium: this.teamForm.value.stadium,
      }
      this.teamService.addTeam(team)
        .subscribe((res) => {
          this.router.navigateByUrl("/teams");
        });
    }
  }

}
