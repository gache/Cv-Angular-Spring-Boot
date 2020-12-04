import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageInforComponent } from './langage-infor.component';

describe('LangageInforComponent', () => {
  let component: LangageInforComponent;
  let fixture: ComponentFixture<LangageInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangageInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
