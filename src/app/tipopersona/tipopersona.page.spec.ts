import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipopersonaPage } from './tipopersona.page';

describe('TipopersonaPage', () => {
  let component: TipopersonaPage;
  let fixture: ComponentFixture<TipopersonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipopersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
