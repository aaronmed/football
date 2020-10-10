import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateTeamPage } from './update-team.page';

describe('UpdateTeamPage', () => {
  let component: UpdateTeamPage;
  let fixture: ComponentFixture<UpdateTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
