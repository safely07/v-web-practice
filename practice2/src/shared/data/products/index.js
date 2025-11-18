import { create } from '../../../entities/product';

export const productsList = [
    create(
      1, 
      'Смартфон Samsung', 
      29990, 
      24990, 
      { url: 'empty.png', alt: 'Samsung Galaxy A53' }
    ),
    create(
      2, 
      'Ноутбук Lenovo IdeaPad 3', 
      45990, 
      39990, 
      { url: 'empty.png', alt: 'Lenovo IdeaPad 3' }
    ),
    create(
      3, 
      'Apple AirPods Pro', 
      19990, 
      17990, 
      { url: 'empty.png', alt: 'Apple AirPods Pro' }
    ),
    create(
      4, 
      'Планшет iPad 10.2', 
      34990, 
      30990, 
      { url: 'empty.png', alt: 'iPad 10.2' }
    ),
    
  ];