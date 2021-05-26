import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVotacaoComponent } from './page-votacao.component';

describe('PageVotacaoComponent', () => {
  let component: PageVotacaoComponent;
  let fixture: ComponentFixture<PageVotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
