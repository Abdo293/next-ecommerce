interface IProducts {
  id: number;
  img: string;
  cat: string;
  title: string;
  price: number;
  reviews: number;
  type: string;
  badge: string;
  sale?: number;
}

interface ICart {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
}

interface IproductDetails {
  id: number;
  title: string;
  price: number;
  img: string;
  cat: string;
  reviews: number;
  quantity?: number;
}

interface ICategories {
  img: string;
  title: string;
  count: string;
  link: string;
}
