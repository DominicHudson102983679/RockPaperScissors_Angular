import { Component, OnInit } from '@angular/core';
import { RpsServiceService } from 'src/app/rps-service.service'; 

@Component({
  selector: 'app-rps-select',
  templateUrl: './rps-select.component.html',
  styleUrls: ['./rps-select.component.css']
})
export class RpsSelectComponent implements OnInit {

  selection?: "rock" | "paper" | "scissors";
  
  constructor(private rpsServiceService: RpsServiceService) { }
  
  ngOnInit(): void {
  }

  selectOption(option: 'rock' | 'paper' | 'scissors'){
    this.selection = option;
  }

  send() {
    if (this.rpsServiceService.username == null) {
      alert("No username entered")
    } else if (this.selection == null) {
      alert("No selection entered")
    }
    else {
      this.rpsServiceService.commitSelection({
        username: this.rpsServiceService.username,
        userChoice: this.selection
      });
    }
  }
}