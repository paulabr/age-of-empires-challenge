import {Component, OnInit} from '@angular/core';
// @ts-ignore
import UnitsJSON from '../../../../assets/age-of-empires-units.json';
import {Cost, Unit} from "../../../model";
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {UnitsService} from "../../../components/units.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-units-view',
  templateUrl: './units-view.component.html',
  styleUrls: ['./units-view.component.scss']
})
export class UnitsViewComponent implements OnInit {
  materials = ['Wood', 'Food', 'Gold']
  toBeDisplayed: Unit[] = [];
  filterForm: UntypedFormGroup | undefined;
  displayedColumns: string[] = ['id', 'name', 'age', 'cost'];

  constructor(private fb: FormBuilder, private  unitsService:UnitsService, private router: Router) {
  }

  ngOnInit(): void {

    this.filterForm = this.fb.group(
      {
        age: ['all'],
        wood: [200],
        food: [200],
        gold: [200],
        onlyFood: [false],
        onlyWood: [false],
        onlyGold: [false]
      }
    )
    this.toBeDisplayed = this.unitsService.getUnits(this.filterForm.value);

    this.filterForm.valueChanges.subscribe(filter => {
      console.log(filter)
      this.toBeDisplayed = this.unitsService.getUnits(filter);
    })
  }

  getCosts(element: Cost) {
    let str = '';
    str += element?.Food? `Food:${element.Food}`:' ';
    str += element?.Gold? `Gold:${element.Gold}`:' ';
    str += element?.Wood? `Wood:${element.Wood}`:' ';
    return str;

  }

  navigateToDetailPage(row: any) {
    debugger;
    this.router.navigate(['/units', row.id]).then(r => console.log(r) );
  }

}
