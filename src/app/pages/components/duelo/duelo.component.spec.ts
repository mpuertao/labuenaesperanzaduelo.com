import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueloComponent } from './duelo.component';

describe('DueloComponent', () => {
  let component: DueloComponent;
  let fixture: ComponentFixture<DueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
