import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaSistemaComponent } from './fecha-sistema.component';

describe('FechaSistemaComponent', () => {
  let component: FechaSistemaComponent;
  let fixture: ComponentFixture<FechaSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
