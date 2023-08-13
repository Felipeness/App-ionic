import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Erro404Page } from './erro404.page';

describe('Erro404Page', () => {
  let component: Erro404Page;
  let fixture: ComponentFixture<Erro404Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Erro404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
