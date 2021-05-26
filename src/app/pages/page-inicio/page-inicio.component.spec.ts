import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInicioComponent } from './page-inicio.component';

describe('PageInicioComponent', () => {
  let component: PageInicioComponent;
  let fixture: ComponentFixture<PageInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
