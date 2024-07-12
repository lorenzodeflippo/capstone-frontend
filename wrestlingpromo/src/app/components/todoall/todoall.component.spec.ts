import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoallComponent } from './todoall.component';

describe('TodoallComponent', () => {
  let component: TodoallComponent;
  let fixture: ComponentFixture<TodoallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
