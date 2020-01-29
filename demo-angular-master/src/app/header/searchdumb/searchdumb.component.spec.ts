import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdumbComponent } from './searchdumb.component';

describe('SearchdumbComponent', () => {
  let component: SearchdumbComponent;
  let fixture: ComponentFixture<SearchdumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
