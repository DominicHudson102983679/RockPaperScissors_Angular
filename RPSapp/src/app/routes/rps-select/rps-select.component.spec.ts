import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsSelectComponent } from './rps-select.component';

describe('RpsSelectComponent', () => {
  let component: RpsSelectComponent;
  let fixture: ComponentFixture<RpsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
