import { Component, OnInit } from '@angular/core';
import { RpsServiceService } from 'src/app/rps-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rps-result-display',
  templateUrl: './rps-result-display.component.html',
  styleUrls: ['./rps-result-display.component.css']
})
export class RpsResultDisplayComponent implements OnInit {

  constructor(public RpsServiceService: RpsServiceService, private router: Router) { 
    this.RpsServiceService.selection;
  }

  ngOnInit(): void {
    if (this.RpsServiceService.selection == null) {
      this.router.navigateByUrl("/selection")
    }
  }

  playAgain() {
    this.router.navigateByUrl("/selection");
  }
}