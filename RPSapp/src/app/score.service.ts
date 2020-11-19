import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/models/score-model";

@Injectable({
  providedIn: 'root'
})

export class ScoreService {

  scores: User[] = [];

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get() {
    this.httpClient.get<User[]>("http://localhost:5000/rps/leaderboard").subscribe((response) => {
      this.scores = response;
    })
  }
}
