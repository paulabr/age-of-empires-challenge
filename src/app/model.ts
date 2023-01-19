export  interface Unit {
  id:            number;
  name:          string;
  description:   string;
  expansion:     string;
  age:           string;
  cost:          Cost;
  build_time:    number;
  reload_time:   number;
  attack_delay:  number;
  movement_rate: number;
  line_of_sight: number;
  hit_points:    number;
  range:         number;
  attack:        number;
  armor:         string;
  attack_bonus:  string[];
  accuracy:      string;
}

export interface Cost {
  Food?:number;
  Wood?: number;
  Gold?: number;
}


export interface UnitsFilter {
  age: 'all' | 'dark' | 'feudal' | 'castle' | 'imperial'
  wood?: number;
  food?: number;
  gold?: number;
  onlyWood?:boolean;
  onlyFood?:boolean;
  onlyGold?:boolean;
}
