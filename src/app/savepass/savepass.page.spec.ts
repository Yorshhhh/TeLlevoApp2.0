import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavepassPage } from './savepass.page';

describe('SavepassPage', () => {
  let component: SavepassPage;
  let fixture: ComponentFixture<SavepassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
