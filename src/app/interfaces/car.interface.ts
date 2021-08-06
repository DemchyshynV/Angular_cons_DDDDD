export interface ICar {
  id: number;
  model: string;
  price: number;
  year: number;
}

export interface ICarFull {
  links: ILinks
  count: number;
  data: ICar[]
}

export interface ILinks {
  next: string;
  prev: string;
}
