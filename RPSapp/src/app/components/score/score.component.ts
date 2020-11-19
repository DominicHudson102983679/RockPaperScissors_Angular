import { Component, Input, OnInit } from '@angular/core';
import { User } from "C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/models/score-model";


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  @Input()
  score: User;

  constructor() { }

  ngOnInit(): void {
  }

}
