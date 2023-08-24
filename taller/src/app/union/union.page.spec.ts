import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnionPage } from './union.page';

describe('UnionPage', () => {
  let component: UnionPage;
  let fixture: ComponentFixture<UnionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
