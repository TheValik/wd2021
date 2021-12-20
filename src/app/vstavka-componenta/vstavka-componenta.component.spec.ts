import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VstavkaComponentaComponent } from './vstavka-componenta.component';

describe('VstavkaComponentaComponent', () => {
  let component: VstavkaComponentaComponent;
  let fixture: ComponentFixture<VstavkaComponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VstavkaComponentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VstavkaComponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
