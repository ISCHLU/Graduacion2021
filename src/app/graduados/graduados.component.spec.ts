import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduadosComponent } from './graduados.component';

describe('GraduadosComponent', () => {
  let component: GraduadosComponent;
  let fixture: ComponentFixture<GraduadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
