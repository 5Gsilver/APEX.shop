export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    description:
      'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    description:
      'Advanced smartwatch with health monitoring, GPS, and 7-day battery life.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    name: 'Laptop Stand - Aluminum',
    price: 49.99,
    description:
      'Ergonomic aluminum laptop stand with adjustable height and angle.',
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    description:
      'Comfortable organic cotton t-shirt available in multiple colors.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    inStock: true,
    rating: 4.2,
    reviews: 67,
  },
  {
    id: 5,
    name: 'Professional Camera',
    price: 899.99,
    description:
      'High-resolution DSLR camera perfect for professional photography.',
    image:
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: false,
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 6,
    name: 'Hiking Backpack',
    price: 79.99,
    description:
      'Durable hiking backpack with 40L capacity and weather resistance.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: true,
    rating: 4.6,
    reviews: 156,
  },
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Accessories',
  'Sports',
];
