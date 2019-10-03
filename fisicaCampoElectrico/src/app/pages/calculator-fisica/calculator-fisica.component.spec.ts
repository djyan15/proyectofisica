import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFisicaComponent } from './calculator-fisica.component';

describe('CalculatorFisicaComponent', () => {
  let component: CalculatorFisicaComponent;
  let fixture: ComponentFixture<CalculatorFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
