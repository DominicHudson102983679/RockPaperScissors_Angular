import { Component, OnInit } from '@angular/core';
import { RpsServiceService } from 'src/app/rps-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-rps-select',
  templateUrl: './rps-select.component.html',
  styleUrls: ['./rps-select.component.css']
})
export class RpsSelectComponent implements OnInit {

  selection?: "Rock" | "Paper" | "Scissors";
  
  constructor(private rpsService: RpsServiceService, private router: Router) { }
  // optionPicked: true|false = false;
  ngOnInit(): void {
  }

  selectOption(option: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = option;
  }

  send() {
    if (this.rpsService.username == null) {
      alert("No username entered")
    }
    else {
      this.rpsService.commitSelection({
        username: this.rpsService.username,
        userChoice: this.selection
      })
    }
  }

  /*
  Shoot(){
    this.rpsService.commit_outcome();
  }
  */
}