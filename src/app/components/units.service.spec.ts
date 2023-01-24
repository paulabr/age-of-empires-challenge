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
  it('should filter by check => true', () => {
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

  it('should filter by check => false', () => {
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
        Wood: 50
      }
    } as Unit
    // Act
    const res = service.filterByProperty(unit, filter);

    //Assert
    expect(res).toEqual(false)
  });

  it('should filter by cost of gold => true', () => {
    // Arrange
    const filter = {
      age: 'all',
      food: 200,
      wood: 225,
      gold: 50
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

  it('should filter by cost of gold => false', () => {
    // Arrange
    const filter = {
      age: 'all',
      food: 200,
      wood: 225,
      gold: 40
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
    expect(res).toEqual(false)
  });

  it('should filter by cost of food => true ', () => {
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

  it('should filter by cost of food => false ', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      food: 10,
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
    expect(res).toEqual(false)
  });

  it('should filter by gold => true', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      food: 225,
      gold: 50,
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

  it('should filter by gold => false', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 200,
      food: 225,
      gold: 1,
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

  it('should return all units without cost', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 1,
      food: 1,
      gold: 1,
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);
    //Assert
    expect(units.length).toEqual(9);
  });

  it('should return all units', () => {
    // Arrange
    const filter = {
      age: 'all',
      wood: 225,
      food: 300,
      gold: 225
    } as UnitsFilter;
    // Act
    const units = service.getUnits(filter);

    //Assert
    expect(units.length).toEqual(104)
  });

  it('should return units under or equal to 41 wood', () => {
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
    expect(units.length).toEqual(72)
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
    expect(units.length).toEqual(22)
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

  it('should return 4 units with feudal and food on cost', () => {
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

  it('should return no units', () => {
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

  it('should return all units with gold and wood in cost', () => {
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
