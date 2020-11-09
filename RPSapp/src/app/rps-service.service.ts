import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SubmitRequestModel} from "C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/models/submit-model";
import { SubmitResponseModel } from "C:/Users/User/Documents/GitHub/RockPaperScissorsAngular/RockPaperScissors_Angular/RPSapp/src/app/models/submit-model";

@Injectable({
  providedIn: 'root'
})

export class RpsServiceService {

  private _selection?: string;
  private _username?: string;

  get selection() {
    return this._selection;
  }

  get username() {
    return this._username;
  }

  cpuChoice: string;
  result: string;

  constructor(private router: Router, private client: HttpClient) { }

  commitUsername(username: string){
    this._username = username;
  }

  commitSelection(option: SubmitRequestModel) {
    this.client.post<SubmitResponseModel>("http://localhost:5000/result/", option)
      .subscribe((response) => {
        this._username = response.username,
        this._selection = response.userChoice,
        this.cpuChoice = response.cpuChoice,
        this.result = response.result,
        this.router.navigateByUrl("/result");
      })
  }

  // Release 1.0 Code
  /*

  private selection?: 'Rock' | 'Paper' | 'Scissors';
  private AIoption?: 'Rock' | 'Paper' | 'Scissors';
  private outcome: 'Won' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  UserSelection(userChoice: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = userChoice;
  }

  AISelection(option?: 'Rock' | 'Paper' | 'Scissors') {
    // setting AI selection as paper
    option = 'Paper';
    this.AIoption = option;
  }

  calculate_outcome(userChoice: 'Rock' | 'Paper' | 'Scissors', AIoption: 'Rock' | 'Paper' | 'Scissors') {
    if (userChoice == 'Rock' && AIoption == 'Scissors' || 
        userChoice == 'Scissors' && AIoption == 'Paper' || 
        userChoice == 'Paper' && AIoption == 'Rock')
       {
        this.outcome = 'Won';
       }

    if (userChoice == 'Rock' && AIoption == 'Paper' || 
        userChoice == 'Paper' && AIoption == 'Scissors' || 
        userChoice == 'Scissors' && AIoption == 'Rock') 
       {
        this.outcome = 'Lose';
       }

    if (userChoice == 'Rock' && AIoption == 'Rock' || 
        userChoice == 'Paper' && AIoption == 'Paper' || 
        userChoice == 'Scissors' && AIoption == 'Scissors') 
       {
        this.outcome = 'Draw';
       }
  }

  commit_outcome() {
    of(null).pipe(delay(100)).subscribe(() => {
      this.AISelection()
      this.calculate_outcome(this.selection,this.AIoption)
      this.router.navigateByUrl('/result');
    });
  }

  */

}
 