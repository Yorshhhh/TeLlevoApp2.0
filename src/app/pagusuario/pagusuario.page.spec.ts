import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagusuarioPage } from './pagusuario.page';

describe('PagusuarioPage', () => {
  let component: PagusuarioPage;
  let fixture: ComponentFixture<PagusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
