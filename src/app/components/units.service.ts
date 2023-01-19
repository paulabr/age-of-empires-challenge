import {Injectable} from "@angular/core";
import {Unit, UnitsFilter} from "../model";
// @ts-ignore
import UnitsJSON from "../../assets/age-of-empires-units.json";

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

@Injectable()
export class UnitsService {
  private units: Unit[] = UnitsJSON?.units || [];


  getUnits(filter: UnitsFilter) {
    return this.units
      .filter((unit: Unit) => this.filterByAge(unit, filter))
      .filter((unit: Unit) => this.filterByProperty(unit, filter))
      .filter((unit: Unit) => this.filterByCost(unit, filter))
  }

  filterByProperty(unit: Unit, filter: UnitsFilter) {
    if (filter.onlyGold && filter.onlyFood && filter.onlyWood&& !unit.cost) {
      return false;
    }
    if(filter.onlyGold && !unit.cost?.Gold ){
      return false;
    }

    if(filter.onlyFood && !unit.cost?.Food){
      return false;
    }
    if(filter.onlyWood && !unit.cost?.Wood){
      return false;
    }
    return  true;
  }

  filterByCost(unit: Unit, filter: UnitsFilter) {
    if (!unit.cost) {
      return true;
    }
    // @ts-ignore
    if (filter.wood && ((unit.cost?.Wood) >= (filter?.wood))) {
      return false
    }
    // @ts-ignore
    if (filter.food && ((unit.cost?.Food) >= (filter?.food))) {
      return false
    }
    // @ts-ignore
    if (filter.gold && ((unit.cost?.Gold) >= (filter?.gold))) {
      return false
    }
    return true;
  }

  filterByAge(unit: Unit, filter: UnitsFilter) {
    const {age} = filter;
    if (age === 'all') return true;
    return unit.age === toTitleCase(age as string);
  }


  getUnitById(id: number) {
    return this.units[id];
  }
}
