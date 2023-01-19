import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UnitsViewComponent} from './units-view.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatSliderModule} from "@angular/material/slider";
import {FormBuilder} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {UnitsService} from "../../../components/units.service";


describe('UnitsViewComponent', () => {
  let component: UnitsViewComponent;
  let fixture: ComponentFixture<UnitsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
        MatListModule,
        MatSliderModule,
      ],
      declarations: [UnitsViewComponent],
      providers: [FormBuilder, {provide:UnitsService,useValue:{}}
      ], schemas: [NO_ERRORS_SCHEMA]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(UnitsViewComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
