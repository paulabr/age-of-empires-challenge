import {Component, OnInit} from '@angular/core';
// @ts-ignore
import UnitsJSON from '../../../../assets/age-of-empires-units.json';
import {Unit} from "../../../model";
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {UnitsService} from "../../../components/units.service";


@Component({
  selector: 'app-units-view',
  templateUrl: './units-view.component.html',
  styleUrls: ['./units-view.component.scss']
})
export class UnitsViewComponent implements OnInit {
  materials = ['Wood', 'Food', 'Gold']
  toBeDisplayed: Unit[] = [];
  filterForm: UntypedFormGroup | undefined;

  constructor(private fb: FormBuilder, private  unitsService:UnitsService) {
  }

  ngOnInit(): void {

    this.filterForm = this.fb.group(
      {
        age: ['all'],
        wood: [200],
        food: [200],
        gold: [200]
      }
    )
    this.toBeDisplayed = this.unitsService.getUnits(this.filterForm.value);

    this.filterForm.valueChanges.subscribe(filter => {
      this.toBeDisplayed = this.unitsService.getUnits(filter);
    })
  }


}
