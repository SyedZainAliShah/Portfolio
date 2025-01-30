import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { MiniGameComponent } from './mini-game.component';

describe('MiniGameComponent', () => {
  let component: MiniGameComponent;
  let fixture: ComponentFixture<MiniGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniGameComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
