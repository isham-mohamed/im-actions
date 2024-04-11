import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoStuffComponent } from './do-stuff.component';

describe('DoStuffComponent', () => {
  let component: DoStuffComponent;
  let fixture: ComponentFixture<DoStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
