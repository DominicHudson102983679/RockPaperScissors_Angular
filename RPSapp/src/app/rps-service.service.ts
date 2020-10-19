import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RpsServiceService {

  private selection?: 'Rock' | 'Paper' | 'Scissors';
  private AIoption?: 'Rock' | 'Paper' | 'Scissors';
  _AIselection = null;
  private outcome?: 'Win' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  SetSelection(playerOption: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = playerOption;
  }

  calculate_outcome(playerOption: 'Rock' | 'Paper' | 'Scissors', AIoption: 'Rock' | 'Paper' | 'Scissors') {
    if (playerOption == 'Rock' && AIoption == 'Rock' || playerOption == 'Paper' && AIoption == 'Paper' || playerOption == 'Scissors' && AIoption == 'Scissors')
    {
      this.outcome = 'Draw';
    }
    if (playerOption == 'Rock' && AIoption == 'Scissors' || playerOption == 'Scissors' && AIoption == 'Paper' || playerOption == 'Paper' && AIoption == 'Rock')
    {
      this.outcome = 'Win';
    }
    if (playerOption == 'Rock' && AIoption == 'Paper' || playerOption == 'Paper' && AIoption == 'Scissors' || playerOption == 'Scissors' && AIoption == 'Rock')
    {
      this.outcome = 'Lose';
    }
  }

  AISelection(option?: 'Rock' | 'Paper' | 'Scissors') {
    option = 'Paper';
    this.AIoption = option;
  }

  commit_outcome() {
    of(null).pipe(delay(100)).subscribe(() => {
      this.AISelection()
      this.calculate_outcome(this.selection,this.AIoption)
      this.router.navigateByUrl('/result');
    });
  }

}
 