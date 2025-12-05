import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scripture } from './scripture';

describe('Scripture', () => {
  let component: Scripture;
  let fixture: ComponentFixture<Scripture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scripture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scripture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
