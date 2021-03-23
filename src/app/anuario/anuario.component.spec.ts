import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuarioComponent } from './anuario.component';

describe('AnuarioComponent', () => {
  let component: AnuarioComponent;
  let fixture: ComponentFixture<AnuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
