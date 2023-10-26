import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MivehiculoPage } from './mivehiculo.page';

describe('MivehiculoPage', () => {
  let component: MivehiculoPage;
  let fixture: ComponentFixture<MivehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MivehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
