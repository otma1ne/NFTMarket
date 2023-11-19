import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAuctionsComponent } from './latest-auctions.component';

describe('LatestAuctionsComponent', () => {
  let component: LatestAuctionsComponent;
  let fixture: ComponentFixture<LatestAuctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestAuctionsComponent]
    });
    fixture = TestBed.createComponent(LatestAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
