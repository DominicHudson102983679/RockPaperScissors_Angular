import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/score.service';

@Component({
  selector: 'app-rps-report-display',
  templateUrl: './rps-report-display.component.html',
  styleUrls: ['./rps-report-display.component.css']
})
export class RpsReportDisplayComponent implements OnInit {

  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.get();
  }

}
