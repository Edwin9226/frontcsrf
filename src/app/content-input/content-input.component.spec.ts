import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInputComponent } from './content-input.component';

describe('ContentInputComponent', () => {
  let component: ContentInputComponent;
  let fixture: ComponentFixture<ContentInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentInputComponent]
    });
    fixture = TestBed.createComponent(ContentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
