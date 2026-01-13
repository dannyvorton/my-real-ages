import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scriptures } from './scriptures';

describe('Scriptures', () => {
  let component: Scriptures;
  let fixture: ComponentFixture<Scriptures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scriptures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scriptures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
