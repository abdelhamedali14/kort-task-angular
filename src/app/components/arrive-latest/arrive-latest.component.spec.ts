import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriveLatestComponent } from './arrive-latest.component';

describe('ArriveLatestComponent', () => {
  let component: ArriveLatestComponent;
  let fixture: ComponentFixture<ArriveLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArriveLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArriveLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
