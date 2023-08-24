import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParPage } from './par.page';

describe('ParPage', () => {
  let component: ParPage;
  let fixture: ComponentFixture<ParPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
