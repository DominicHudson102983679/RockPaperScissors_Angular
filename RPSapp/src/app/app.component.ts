import { Component, Input, ViewChild } from '@angular/core';
import { ScoreService } from 'C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/score.service';
import { RpsServiceService } from 'src/app/rps-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RPSapp';
  username?: string;

  playing: boolean = true;

  constructor(private rpsServiceService: RpsServiceService, private scoreService: ScoreService, private router: Router){}

  toggleReports(){
    if (this.playing) {
      this.router.navigateByUrl("/leaderboard");
      this.playing = false;
    }
    else {
      this.router.navigateByUrl("/selection");
      this.playing = true
    }
  }

  setUsername(event:any) {
    this.username = event.target.value;
    this.rpsServiceService.commitUsername(event.target.value);
  }
}
