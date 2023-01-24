import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UnitsService} from "../../../components/units.service";
import {Unit} from "../../../model";

@Component({
  selector: 'app-unit-detail-view',
  templateUrl: './unit-detail-view.component.html',
  styleUrls: ['./unit-detail-view.component.scss']
})
export class UnitDetailViewComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'age', 'wood_cost', 'food_cost', 'gold_cost', 'build_time', 'reload_time', 'hit_points', 'attack', 'accuracy'];
  toBeDisplayed: Unit[] = [];
  constructor(private route: ActivatedRoute, private unitsService: UnitsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (typeof id === "string") {
      const unit = this.unitsService.getUnitById(parseInt(id));
      if (unit) {
        this.toBeDisplayed.push(unit);
      }
    }
  }
}
