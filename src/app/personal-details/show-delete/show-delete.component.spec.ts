import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteComponent } from './show-delete.component';

describe('ShowDeleteComponent', () => {
  let component: ShowDeleteComponent;
  let fixture: ComponentFixture<ShowDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
