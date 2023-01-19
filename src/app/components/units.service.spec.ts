import {UnitsService} from "./units.service";
import {Unit, UnitsFilter} from "../model";

describe('ValueService', () => {
  let service: UnitsService;
  beforeEach(() => {
    service = new UnitsService();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should', () => {
    // Arrange
    const filter = {
      age: 'all',
      food: 200,
      wood: 225,
      gold: 225,
      onlyGold:true
    } as UnitsFilter;
    const unit = {
      cost: {
        Food: 30,
        Gold: 50
      }
    } as Unit
    // Act
    const res = service.filterByProperty(unit, filter);

    //Assert
    expect(res).toEqual(true)
  });
  it('should', () => {
    // Arrange
    const filter = {
      age: 'all',
      food: 200,
      wood: 225,
      gold: 225
    } as UnitsFilter;
    const unit = {
      cost: {
        Food: 30,
        Gold: 50
      }
    } as Unit
    // Act
    const res = service.filterByCost(unit, filter);

    //Assert
    expect(res).toEqual(true)
  });

  it('should', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      food: 225,
    } as UnitsFilter;
    const unit = {
      cost: {
        Food: 30,
        Gold: 50
      }
    } as Unit
    // Act
    const res = service.filterByCost(unit, filter);

    //Assert
    expect(res).toEqual(true)
  });

  it('should', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      food: 225,
    } as UnitsFilter;
    const unit = {
      cost: {
        Gold: 50
      }
    } as Unit
    // Act
    const res = service.filterByCost(unit, filter);

    //Assert
    expect(res).toEqual(true)
  });

  it('should', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      gold: 25,
    } as UnitsFilter;
    const unit = {
      cost: {
        Gold: 50
      }
    } as Unit
    // Act
    const res = service.filterByCost(unit, filter);

    //Assert
    expect(res).toEqual(false)
  });

  it('should return all units', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 300,
      food: 300,
      gold: 300
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(104)
  });

  it('should return units under 41 wood', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 41,
      food: 200,
      gold: 200
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(70)

  });

  it('should return units under or up to filter', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 40,
      food: 30,
      gold: 50
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(18)

  });

  it('should return all dark', () => {
    // Arrange
    const filter = {
      age: 'dark',
      wood: 200,
      food: 200,
      gold: 200
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(13)

  });

  it('should return 1 feudal with food only per cost', () => {
    // Arrange
    const filter = {
      age: 'feudal',
      food: 200,
      onlyFood:true
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(4)
  });

  it('should return all units 2', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 300,
      food: 300,
      gold: 300,
      onlyGold:true,
      onlyWood:true,
      onlyFood:true,
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(0)
  });

  it('should return all units 3', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 300,
      food: 300,
      gold: 300,
      onlyGold:true,
      onlyWood:true,
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(41)
  });
});
