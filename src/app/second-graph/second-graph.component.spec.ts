import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGraphComponent } from './second-graph.component';

describe('SecondGraphComponent', () => {
  let component: SecondGraphComponent;
  let fixture: ComponentFixture<SecondGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
