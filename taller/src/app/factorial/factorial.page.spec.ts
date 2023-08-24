import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactorialPage } from './factorial.page';

describe('FactorialPage', () => {
  let component: FactorialPage;
  let fixture: ComponentFixture<FactorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
