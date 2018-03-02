import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCompComponent } from './graph-comp.component';

describe('GraphCompComponent', () => {
  let component: GraphCompComponent;
  let fixture: ComponentFixture<GraphCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
