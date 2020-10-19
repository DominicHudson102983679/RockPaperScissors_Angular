import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsServiceService } from 'src/app/rps-service.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'; 

@Component({
  selector: 'app-rps-select',
  templateUrl: './rps-select.component.html',
  styleUrls: ['./rps-select.component.css']
})

export class RpsSelectComponent implements OnInit {

  selection?: "Rock" | "Paper" | "Scissors";

  constructor(private rpsService: RpsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  selectOption(option: "Rock" | "Paper" | "Scissors") {
    this.selection = option;
  }

  send() {
    of(null).pipe(delay(100)).subscribe(() => {
      this.rpsService.commitSelection(this.selection);
      this.router.navigateByUrl("/display");
    })
  }

  /*
  constructor(private GameService: RpsServiceService) { }
  optionPicked: true|false = false;
  ngOnInit(): void {
  }

  SelectOption(option: 'Rock' | 'Paper' | 'Scissors'){
    this.optionPicked = true;
    this.GameService.SetSelection(option);
  }

  Shoot(){
    this.GameService.commit_outcome();
  }*/
}