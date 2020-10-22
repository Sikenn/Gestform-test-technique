import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestformComponent } from './gestform.component';

describe('GestformComponent', () => {
  let component: GestformComponent;
  let fixture: ComponentFixture<GestformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
