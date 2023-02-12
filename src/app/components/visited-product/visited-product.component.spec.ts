import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedProductComponent } from './visited-product.component';

describe('VisitedProductComponent', () => {
  let component: VisitedProductComponent;
  let fixture: ComponentFixture<VisitedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
