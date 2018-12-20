import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdsCalculatorComponent } from './nds-calculator.component';

describe('NdsCalculatorComponent', () => {
  let component: NdsCalculatorComponent;
  let fixture: ComponentFixture<NdsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
