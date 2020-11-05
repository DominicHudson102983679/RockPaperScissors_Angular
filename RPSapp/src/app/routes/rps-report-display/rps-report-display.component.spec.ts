import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsReportDisplayComponent } from './rps-report-display.component';

describe('RpsReportDisplayComponent', () => {
  let component: RpsReportDisplayComponent;
  let fixture: ComponentFixture<RpsReportDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsReportDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsReportDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
