import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarsesionPage } from './iniciarsesion.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('IniciarsesionPage', () => {
  let fixture: ComponentFixture<IniciarsesionPage>;
  let component: IniciarsesionPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciarsesionPage], 
      imports: [HttpClientModule, RouterTestingModule], 
    }).compileComponents(); 

    fixture = TestBed.createComponent(IniciarsesionPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
