import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopTypeComponent } from './shop-type.component';

describe('ShopTypeComponent', () => {
  let component: ShopTypeComponent;
  let fixture: ComponentFixture<ShopTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
