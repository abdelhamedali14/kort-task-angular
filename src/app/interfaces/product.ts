export interface Product {
  id: number;
  image: string;
  title:string;
  description: string;
  price: string;
  quantity:number;
  priceBeforeSale?:string
  favourite: boolean,
  isNew:boolean,
  isSale:boolean,
  productState:string,
  rating:number,
  exist:boolean
}
