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
  private outcome: 'Win' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  UserSelection(userChoice: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = userChoice;
  }

  AISelection(option?: 'Rock' | 'Paper' | 'Scissors') {
    option = 'Paper';
    this.AIoption = option;
  }

  calculate_outcome(userChoice: 'Rock' | 'Paper' | 'Scissors', AIoption: 'Rock' | 'Paper' | 'Scissors') {
    if (userChoice == 'Rock' && AIoption == 'Scissors' || userChoice == 'Scissors' && AIoption == 'Paper' || userChoice == 'Paper' && AIoption == 'Rock')
    { this.outcome = 'Win'; }
    else if (userChoice == 'Rock' && AIoption == 'Paper' || userChoice == 'Paper' && AIoption == 'Scissors' || userChoice == 'Scissors' && AIoption == 'Rock')
    { this.outcome = 'Lose'; }
    else if (userChoice == 'Rock' && AIoption == 'Rock' || userChoice == 'Paper' && AIoption == 'Paper' || userChoice == 'Scissors' && AIoption == 'Scissors')
    { this.outcome = 'Draw'; }
  }

  commit_outcome() {
    of(null).pipe(delay(100)).subscribe(() => {
      this.AISelection()
      this.calculate_outcome(this.selection,this.AIoption)
      this.router.navigateByUrl('/result');
    });
  }

}
 