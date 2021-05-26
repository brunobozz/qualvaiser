import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRestaurantesComponent } from './page-restaurantes.component';

describe('PageRestaurantesComponent', () => {
  let component: PageRestaurantesComponent;
  let fixture: ComponentFixture<PageRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRestaurantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
