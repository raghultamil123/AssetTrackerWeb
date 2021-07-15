import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPopupComponent } from './asset-popup.component';

describe('AssetPopupComponent', () => {
  let component: AssetPopupComponent;
  let fixture: ComponentFixture<AssetPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
