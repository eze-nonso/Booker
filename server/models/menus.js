import { dummyMeals } from './meals';

export const dummyMenus = [{
  id: 1,
  name: 'Jollof rice',
  description: 'Valued meal in Africa',
  image: '../img.jpg',
}, {
  id: 2,
  name: 'Rice and Stew',
  description: 'Lorem ipsum',
  image: '../img2.jpg',
}];

export class Menu {
  constructor(mealIdList) {
    if (mealIdList instanceof Array) {
      this.menu = [];
      for (let i = 0; i < mealIdList.length; i += 1) {
        const id = mealIdList[i];
        this.menu.push(dummyMeals[id - 1]);
      }
    }
  }
}
