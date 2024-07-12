import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerDetailsComponent } from './wrestler-details.component';

describe('WrestlerDetailsComponent', () => {
  let component: WrestlerDetailsComponent;
  let fixture: ComponentFixture<WrestlerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrestlerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrestlerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
