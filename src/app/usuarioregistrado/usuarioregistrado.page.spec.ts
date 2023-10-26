import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioregistradoPage } from './usuarioregistrado.page';

describe('UsuarioregistradoPage', () => {
  let component: UsuarioregistradoPage;
  let fixture: ComponentFixture<UsuarioregistradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioregistradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
