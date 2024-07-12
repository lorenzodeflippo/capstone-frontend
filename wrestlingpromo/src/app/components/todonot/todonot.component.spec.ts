import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodonotComponent } from './todonot.component';

describe('TodonotComponent', () => {
  let component: TodonotComponent;
  let fixture: ComponentFixture<TodonotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodonotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodonotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
