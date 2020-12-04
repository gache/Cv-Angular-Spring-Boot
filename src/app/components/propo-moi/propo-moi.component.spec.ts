import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropoMoiComponent } from './propo-moi.component';

describe('PropoMoiComponent', () => {
  let component: PropoMoiComponent;
  let fixture: ComponentFixture<PropoMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropoMoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropoMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
