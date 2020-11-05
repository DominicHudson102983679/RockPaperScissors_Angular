import { Component, OnInit } from '@angular/core';
import { User } from "C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/models/score-model";
import { ScoreService } from 'C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/score.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
