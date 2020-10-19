import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RpsServiceService {

  private _selection?: "Rock" | "Paper" | "Scissors";
  
  get selection() {
    return this._selection;
  }

  constructor(){}

  commitSelection(option: "Rock" | "Paper" | "Scissors"){
    this._selection = option;

  }


  /*

  private selection: 'Rock' | 'Paper' | 'Scissors';
  private AIselection: 'Rock' | 'Paper' | 'Scissors';
  private outcome: 'Win' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  SetSelection(playerOption: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = playerOption;
  }

  calculate_outcome(playerOption: 'Rock' | 'Paper' | 'Scissors', AIselection: 'Rock' | 'Paper' | 'Scissors') {
    if (playerOption == 'Rock' && AIselection == 'Rock' || playerOption == 'Paper' && AIselection == 'Paper' || playerOption == 'Scissors' && AIselection == 'Scissors')
    {
      this.outcome = 'Draw';
    }
    if (playerOption == 'Rock' && AIselection == 'Scissors' || playerOption == 'Scissors' && AIselection == 'Paper' || playerOption == 'Paper' && AIselection == 'Rock')
    {
      this.outcome = 'Win';
    }
    if (playerOption == 'Rock' && AIselection == 'Paper' || playerOption == 'Paper' && AIselection == 'Scissors' || playerOption == 'Scissors' && AIselection == 'Rock')
    {
      this.outcome = 'Lose';
    }
  }

  AISelection(AIoption?: 'Rock' | 'Paper' | 'Scissors') {
    AIoption = "Scissors";
    this.AIselection = AIoption;
  }

  commit_outcome() {
    of(null).pipe(delay(0)).subscribe(() => {
      this.AISelection()
      this.calculate_outcome(this.selection,this.AIselection)
      this.router.navigateByUrl('/result');
    });
  }
  */
}
 