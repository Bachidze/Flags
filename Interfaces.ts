export interface Country {
  name: {
      common: string;
  };
  flags: {
      svg: string;
  };
  population: number;
  region: string;
  capital: string;
  lowercaseName: any
}

export interface FilterProps {
  name: string;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  appear: () => void;
  show: boolean;
  filterByRegion: (region: string) => void;
}
