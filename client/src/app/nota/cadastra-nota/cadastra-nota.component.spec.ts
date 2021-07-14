import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraNotaComponent } from './cadastra-nota.component';

describe('CadastraNotaComponent', () => {
  let component: CadastraNotaComponent;
  let fixture: ComponentFixture<CadastraNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
