import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalButtonsComponent } from './additional-buttons.component';

describe('AdditionalButtonsComponent', () => {
  let component: AdditionalButtonsComponent;
  let fixture: ComponentFixture<AdditionalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
