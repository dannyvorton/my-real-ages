import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ages } from './ages';

describe('Ages', () => {
  let component: Ages;
  let fixture: ComponentFixture<Ages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
