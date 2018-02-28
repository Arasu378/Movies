import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSortComponent } from './test-sort.component';

describe('TestSortComponent', () => {
  let component: TestSortComponent;
  let fixture: ComponentFixture<TestSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
