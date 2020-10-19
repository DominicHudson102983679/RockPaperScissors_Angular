import { Component, OnInit } from '@angular/core';
import { RpsServiceService } from 'src/app/rps-service.service'; 

@Component({
  selector: 'app-rps-select',
  templateUrl: './rps-select.component.html',
  styleUrls: ['./rps-select.component.css']
})
export class RpsSelectComponent implements OnInit {

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
  }
}