import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsServiceService } from 'src/app/rps-service.service'; 

@Component({
  selector: 'app-rps-result-display',
  templateUrl: './rps-result-display.component.html',
  styleUrls: ['./rps-result-display.component.css']
})
export class RpsResultDisplayComponent implements OnInit {

  constructor(private RpsServiceService: RpsServiceService) { }

  ngOnInit(): void {

  }
}