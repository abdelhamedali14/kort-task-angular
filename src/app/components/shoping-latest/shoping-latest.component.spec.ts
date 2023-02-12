import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingLatestComponent } from './shoping-latest.component';

describe('ShopingLatestComponent', () => {
  let component: ShopingLatestComponent;
  let fixture: ComponentFixture<ShopingLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
