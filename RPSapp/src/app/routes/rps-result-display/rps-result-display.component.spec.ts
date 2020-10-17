import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsResultDisplayComponent } from './rps-result-display.component';

describe('RpsResultDisplayComponent', () => {
  let component: RpsResultDisplayComponent;
  let fixture: ComponentFixture<RpsResultDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsResultDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
