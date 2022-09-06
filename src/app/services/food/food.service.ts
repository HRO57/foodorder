import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Salad-Indian',
        price: 9,
        cookTime: '10-20',
        favorite: false,
        origins: ['Indian'],
        star: 4.5,
        imageUrl: '/assets/food/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 2,
        name: 'Chicken-Bangladeshi',
        price: 9,
        cookTime: '10-20',
        favorite: false,
        origins: ['Bangladeshi'],
        star: 4.5,
        imageUrl: '/assets/food/food-2.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 3,
        name: 'Salad-Italy',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 4,
        name: 'Chicken-Franch',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Franch'],
        star: 4.5,
        imageUrl: '/assets/food/food-2.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 5,
        name: 'Salad-America',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['America'],
        star: 4.5,
        imageUrl: '/assets/food/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 6,
        name: 'Chicken-U.K',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['U.K'],
        star: 4.5,
        imageUrl: '/assets/food/food-2.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 7,
        name: 'Salad-Pakistan',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Pakistan'],
        star: 4.5,
        imageUrl: '/assets/food/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 8,
        name: 'Chicken-Australia',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Australia'],
        star: 4.5,
        imageUrl: '/assets/food/food-2.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 9,
        name: 'Salad-Nepal',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Nepal'],
        star: 4.5,
        imageUrl: '/assets/food/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      }
    ];
  }
}
