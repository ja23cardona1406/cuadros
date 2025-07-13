export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  description: string;
  imageUrl: string;
  dimensions: string;
  style: string;
  inStock: number;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}